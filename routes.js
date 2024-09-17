const proxyTable = {
    '127.0.0.1:8000/api/publishers': 'http://127.0.0.1:5000', // host only
    '127.0.0.1:8000/api/affiliates': 'http://127.0.0.1:5001'
  };
  
  const OPTIONS = {
    target: 'http://127.0.0.1:5000',
    router: proxyTable
  };

module.exports = {
    OPTIONS
}