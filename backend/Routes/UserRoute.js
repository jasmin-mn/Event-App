const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const authenticate = require("../middleware/authenticate");
const restrictTo = require("../middleware/restrictTo");
const User = require("../Models/UserModel");
const router = express.Router();
const nodemailer = require("nodemailer");
const sendEmail = require("../Utilities/sendEmail");
const { response } = require("express");

//register
router.post("/register", async (request, response) => {
  const { userName, firstName, lastName, email, password } = request.body;
  try {
    const data = await User.findOne({ email });
    if (data) {
      return response
        .status(400)
        .json({ msg: "Email is already exist. Please use different email." });
    }
    const user = new User({
      userName,
      firstName,
      lastName,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    console.log(user.password);
    await user.save();

    const payload = {
      id: user.id,
      iat: Date.now(),
      exp: Date.now() + 60000,
    };
    jwt.sign(payload, process.env.SECRET, (error, token) => {
      if (error) throw error;
      response.json({ token });
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ msg: "Server error" });
  }
});

//login signin public
router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  let data = await User.findOne({ email });
  if (!data) {
    return response.status(400).json({ msg: "Invalid Credentials" });
  }

  const isMatch = await bcrypt.compare(password, data.password);
  if (!isMatch) {
    return response.status(400).json({ msg: "Invalid Credentials" });
  }

  // token store the id
  const payload = {
    id: data.id,
    iat: Date.now(),
    exp: Date.now() + 600000,
  };
  try {
    jwt.sign(payload, process.env.SECRET, (error, token) => {
      if (error) throw error;
      console.log(token);
      // // response.json({token})
     return response
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 90000000,
        })
        .json({ success: true, message: "Logged In" });
    });
  } catch (error) {
    console.log(error);
    response.status(500).send("Server error");
  }
});

// @root POST user/dashboard for private

router.get("/dashboard", async (request, response) => {
  console.log("this is request.id", request.id);
  try {
    const user = await User.findById(request.id).select("-password");
    if (!user) {
      return response.status(500).json({ msg: "Server error" });
    }
    response.json({ msg: ` welcome back ${user.userName}` });
  } catch (error) {
    response.status(500).json({ msg: "Server error" });
  }
});

// Profile

router.get("/profile", authenticate, async (request, response) => {
  // const { userName, firstName, lastName, email, password, age, place, hometown, gender, language, yourInterests, others} = request.body
  console.log("this is test request.id", request.id);
  try {
    const user = await User.findById(request.id).select("-password");
    if (!user) {
      return response.status(500).json({ msg: "Server error" });
    }

    response.json({ msg: `Welcome Back ${user.userName}` , user});
  } catch (error) {
    response.status(500).json({ msg: "Server error" });
  }
});
router.post("/profileUpdate", authenticate, async (request, response) => {
  const {
    userName,
    firstName,
    lastName,
    email,
    age,
    place,
    hometown,
    gender,
    language,
    yourInterests,
    others,
  } = request.body;
  console.log("this is test request.id", request.id);
  try {
    const user = await User.findById(request.id).select("-password");
    if (!user) {
      return response.status(500).json({ msg: "Server error" });

    
})
router.post("/profileUpdate" ,authenticate , async(request, response)=>{
    const { userName, firstName, lastName, email, age, place, hometown, gender, language, yourInterests, others} = request.body
    console.log("this is test request.id", request.id);
    try{
        const user = await User.findById(request.id).select('-password')
        if(!user){
            return response.status(500).json({msg: 'Server error'})
        }
       /////// response.json({msg: `Welcome Back ${user.userName}`})
       user.userName = userName;
       user.firstName = firstName;
       user.lastName = lastName;
       user.email = email;
       user.age = age;
       user.place = place;
       user.hometown = hometown;
       user.gender = gender;
       user.language = language;
       user.yourInterests = yourInterests;
       user.others = others;

       user.save();
       response.json({msg: `user info updated  Back ${user.userName}` , user})
    } catch(error){
        response.status(500).json({msg:'Server error'})

    }
    /////// response.json({msg: `Welcome Back ${user.userName}`})
    user.userName = userName;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.place = place;
    user.hometown = hometown;
    user.gender = gender;
    user.language = language;
    user.yourInterests = yourInterests;
    user.others = others;

    user.save().then(function () {
      return response.json({
        msg: `user info updated  Back ${user.userName}`,
        user,
      });
    });
    //    response.json({msg: `user info updated  Back ${user.userName}` , user})
  } catch(error) {
    response.status(500).json({ msg: "Server error" });
  }
});

// Delete Profile
// router.delete('/delete/:id', authenticate, async(request, response)=>{
//    const user = await User.findByIdAndDelete({_id:(request.params.id)})
//    if(user){
//        response.send('Successfully Deleted')
//    } else{
//        response.send('Server Error')
//    }
// })

// Edit Profile

// router.get("/profileUser",authenticate, async(request,response)=>{

//     const user = await User.findById(request.id)

// } )

router.get("/profileUser", authenticate, async (request, response) => {
  console.log("this is request.id", request.id);
  try {
    const user = await User.findById(request.id);
    if (!user) {
      return response.status(500).json({ msg: "Server error" });
    }
    response.json({ msg: ` welcome back ${user.userName}` });
  } catch (error) {
    response.status(500).json({ msg: "Server error" });
  }
});

router.post("/profile/:id", authenticate, async (request, response) => {
  console.log("the id of the current logged in user is : ", request.id);
  // MAke sure that the user own the profile
  if (request.id !== request.params.id) {
    return response.status(401).json({ msg: "Not authorized" });
  }
  const {
    userName,
    firstName,
    lastName,
    email,
    age,
    place,
    hometown,
    gender,
    language,
    yourInterests,
    others,
  } = request.body;
  const user = await User.findByIdAndUpdate(
    { _id: request.params.id },
    {
      $set: {
        userName,
        firstName,
        lastName,
        email,
        age,
        place,
        hometown,
        gender,
        language,
        yourInterests,
        others,
      },
    }
  );
  if (user) {
    response.send(`Profile has been updated`);
  } else {
    response.send("Server Error");
  }
});

// Get user/adminboard

router.get(
  "/",
  authenticate,
  restrictTo("supervisor", "admin"),
  async (request, response) => {
    console.log("This is request.id", request.id);
    try {
      const user = await User.findById(request.id).select("-password");
      if (!user) {
        return response.status(500).json({ msg: "Server error" });
      }
      response.json({
        msg: `Welcome back ${user.userName} You are logged in as ${request.user.role}`,
      });
    } catch (error) {
      response.status(500).json({ msg: "Server error" });
    }
  }
);

// Signout

router.post("/signout", async (request, response) => {
  return request.body;
});

// Forgot password/reset password

router.post("/forgotPassword", async (request, response) => {
  console.log(request.body);
  const { email } = request.body;
  const user = await User.findOne({ email });
  if (!user) {
    return response.status(400).json({ msg: "User email is not exist" });
  }
  const payload = {
    id: user.id,
    iat: Date.now(),
  };
  const token = jwt.sign(payload, process.env.RESETPASSWORD_SECRET, {
    expiresIn: "60m",
  });
  console.log(token);
  user.passwordResetToken = token;
  user.passwordChangedAt = Date.now() + 1 * 60 * 60 * 1000; //(1 * 60 * 1000)
  user.save();
  const resetUrl = `${request.protocol}://${request.get(
    "host"
  )}/user/resetPassword/${token}`;
  const message = `Forgot your password? Click on the link and submit your new password and password confirmation to ${resetUrl} \n \n if you did not reset your password. Kindly ignore this email`;

  try {
    await sendEmail({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      email: user.email,
      subject: "Your password reset link is valid for 60 minutes",
      text: message,
    });
    response
      .status(200)
      .json({ msg: "You have received email to change your password." });
  } catch (error) {
    console.log(error);
  }
});

router.post("/resetPassword/:token", async (request, response) => {
  console.log(request.body);
  const token = request.params.token;

  const user = await User.findOne({
    passwordResetToken: request.params.token,
    passwordChangedAt: { $gt: Date.now() },
  });
  if (!user) {
    return response
      .status(500)
      .json({ msg: "Token is invalid or already expired" });
  } else {
    response.send(`You may reset your Password`);
  }
});

module.exports = router;
