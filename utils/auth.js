const withAuth = (req, res, next) => {

    // If the user is not logged in, redirect the user to the login page
    // This is direct from the `/gallery/:id` and `/painting/:id` routes

    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is loged in, it will execute the route function that will allow them to view the gallery
      // then it calls next() if the user is authenticated.'
      next();
    }
  };
  
  module.exports = withAuth;