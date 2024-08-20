export default {
  async fetch(request) {
    const url = new URL(request.url);
    request.headers.set('x-forwarded-for', '172.16.19.233');
    request.headers.set('x-real-ip', '172.16.19.233');
    request.headers.set('remote_addr', '172.16.19.233');
    url.host = 'chat.openai.com';
    return fetch(url, { headers: request.headers, method: request.method, body: request.body });
  },
};
