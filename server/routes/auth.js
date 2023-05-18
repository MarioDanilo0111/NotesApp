const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    /* Need to verify user with "cb"(callback) to complete authenttication */
    async function (accessToken, refreshToken, profile, done) {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profileImage: profile.photos[0].value,
      };
      /* console.log(profile); */
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          done(null, user);
        } else {
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

/* route middleware in an Express application
 * Google login Route */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
/* Get user data */
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failure",
    successRedirect: "/dashboard",
  })
);
/* Route if something goes wrong */
router.get("/login-failure", (req, res) => {
  res.send("Someting is not right...");
});

/*
 * Destry user session
 * here we can also do an other page for the logout
 * We use 'unuse' method to delete CASH of the strategy for more security
 */
router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.send("Error loggin out");
    } else {
      passport.unuse(GoogleStrategy.name);
      res.redirect("/");
    }
  });
});

/* Persist or in other words 'Store' user data after successful Authentication
 * This is used to send and use data from MongoosDB
 */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

/* Retrieve or get the user data from session */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = router;
