export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get("url");
    if (!url) return new Response("No URL provided", { status: 400 });

    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*"); // 모든 곳에서 허용
    
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
};
