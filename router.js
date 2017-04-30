function route(handle, pathname) {
  console.log(`ABout to route a request for ${pathname}`);

  if(typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log('No handler found');
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('404 not found');
    response.end();
  }
}

exports.route = route;
