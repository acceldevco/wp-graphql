// Define routes and corresponding handlers
const routes = {
    '/': homeHandler,
    '/about': aboutHandler,
    '/contact': contactHandler,
    '/products': {
      '/': productsHandler,
      '/details': productDetailsHandler
    }
  };
  
  // Function to handle the home route
  function homeHandler() {
    console.log('Home Page');
    // Add your logic to update the content for the home page
  }
  
  // Function to handle the about route
  function aboutHandler() {
    console.log('About Page');
    // Add your logic to update the content for the about page
  }
  
  // Function to handle the contact route
  function contactHandler() {
    console.log('Contact Page');
    // Add your logic to update the content for the contact page
  }
  
  // Function to handle the products route
  function productsHandler() {
    console.log('Products Page');
    // Add your logic to update the content for the products page
  }
  
  // Function to handle the product details route
  function productDetailsHandler() {
    console.log('Product Details Page');
    // Add your logic to update the content for the product details page
  }
  
  // Function to handle routing based on the current URL
  function router() {
    const path = window.location.pathname;
    const matchingRoute = findMatchingRoute(routes, path);
    if (matchingRoute) {
      matchingRoute.handler();
    } else {
      console.log('404 Page');
      // Handle the case when the route is not found
    }
  }
  
  // Function to navigate to a new route
  function navigateTo(path) {
    history.pushState(null, null, path);
    router();
  }
  
  // Event listener for the popstate event (back/forward button)
  window.addEventListener('popstate', router);
  
  // Event listener for link clicks
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      navigateTo(event.target.getAttribute('href'));
    }
  });
  
  // Function to find a matching route handler
  function findMatchingRoute(routeObj, path) {
    if (routeObj.hasOwnProperty(path)) {
      return {
        path,
        handler: routeObj[path]
      };
    }
  
    for (const key in routeObj) {
      if (routeObj.hasOwnProperty(key) && key.startsWith('/') && path.startsWith(key)) {
        const nestedRoute = routeObj[key];
        const remainingPath = path.slice(key.length);
        if (typeof nestedRoute === 'object') {
          return findMatchingRoute(nestedRoute, remainingPath);
        }
      }
    }
  
    return null;
  }
  
  // Initial route handling
  router();