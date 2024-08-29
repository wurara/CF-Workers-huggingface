export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    url.host = 'huggingface.co';
    return fetch(url, { headers: request.headers, method: request.method, body: request.body });
  },
};
