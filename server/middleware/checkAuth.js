exports.isLoggedIn = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res
      .status(401)
      .render("partials/error", { message: "Access Denied" });
  }
};

/* Here its possible to send to a 401 denied access page */
