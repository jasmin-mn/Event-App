const passport = require("passport");


const authenticate = (request, response, next) => {
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (!user || error) {
      response.status(401).send(error);
    }
    console.log(5464646)
    request.user = user;
    next();
  })(request, response, next);
};

module.exports = authenticate;
