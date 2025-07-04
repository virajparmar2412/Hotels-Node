const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person");


// Configure Passport Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    // Authentication logic
    try {
    //   console.log("Credentials Received:", username, password);
      const user = await Person.findOne({ username });
      if (!user) {
        return done(null, false, { message: "Incorrect Username" });
      }
      const isPasswordMatch = await user.comparePassword(password); // Simple string comparison
      if (isPasswordMatch) {
        return done(null, user); // Authentication successful
      } else {
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (err) {
      return done(err); // Pass error to passport
    }
  })
);

module.exports = passport;