const express=require('express');

const app=express();

//mkdir public views models routes config controllers middlewares services utils
//touch app.js .env .gitignore config/db.js config/mongoose.js config/passport-jwt-strategy.js config/passport-local-strategy.js controllers/home_controller.js controllers/users_controller.js models/user.js routes/index.js routes/users.js services/passport.js utils/mailer.js
//touch views/header.ejs views/footer.ejs views/login.ejs views/registration.ejs views/profile.ejs views/home.ejs views/reset_password.ejs views/update_password.ejs views/update_profile.ejs views/verify_email.ejs
//npm i express ejs body-parser dotenv mongoose colour
//nodemon app.js
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
return res.send('Hello World');
}
);
app.get("/health-check",(req,res)=>{
return res.send("OK");
}
);
app.get("/home",(req,res)=>{
return res.render("home");
}
);
app.listen(port,()=>{
console.log(`Server is running on port `+port);
});
