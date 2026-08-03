const QQ_PLAYLIST_ENDPOINT = 'https://cyapi.top/API/song_list.php';

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store',
      'x-content-type-options': 'nosniff',
      ...extraHeaders,
    },
  });
}

function validQQPlaylistUrl(value) {
  if (!value || value.length > 2048) return null;
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    if (url.protocol !== 'https:' || !(hostname === 'qq.com' || hostname.endsWith('.qq.com'))) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function onRequest(context) {
  if (context.request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405, { allow: 'GET' });
  const requestUrl = new URL(context.request.url);
  const playlistUrl = validQQPlaylistUrl(requestUrl.searchParams.get('url'));
  if (!playlistUrl) return json({ error: 'invalid_qq_playlist_url' }, 400);

  const apiKey = context.env.QQ_MUSIC_API_KEY;
  if (!apiKey) return json({ error: 'qq_music_api_key_not_configured' }, 503);

  const upstreamUrl = new URL(QQ_PLAYLIST_ENDPOINT);
  upstreamUrl.searchParams.set('apikey', apiKey);
  upstreamUrl.searchParams.set('url', playlistUrl);

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: { accept: 'application/json' },
      cf: { cacheEverything: true, cacheTtl: 300 },
    });
    const body = await upstream.text();
    if (!upstream.ok) return json({ error: 'qq_playlist_upstream_error', status: upstream.status }, 502);
    try {
      return json(JSON.parse(body));
    } catch {
      return json({ error: 'qq_playlist_invalid_response' }, 502);
    }
  } catch (error) {
    console.error('QQ playlist proxy failed', error);
    return json({ error: 'qq_playlist_proxy_failed' }, 502);
  }
}
