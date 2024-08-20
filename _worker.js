export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 复制原始请求的标头
    const headers = new Headers(request.headers);
    // 确保 Host 头部被替换为 hub.docker.com
    headers.set('Host', 'registry.hub.docker.com');
    headers.set('x-forwarded-for', '172.16.19.233');
    headers.set('x-real-ip', '172.16.19.233');
    headers.set('remote_addr', '172.16.19.233');
    
    url.host = 'chat.openai.com';
    return fetch(url, { headers: request.headers, method: request.method, body: request.body });
  },
};
