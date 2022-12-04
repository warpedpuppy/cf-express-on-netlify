# Help for Career Foundry Students converting their Heroku app to Netlify

Hi, my name is Ted and I made this repo to help with CF students who are no longer able to post their movie apis to Heroku and would like to move them to Netlify.

Most of you currently have your routes in a file called "index.js" in the root.  You will find similar routes here inside express/server.js

Just one thing:  Netlify is not your only option.  So this repo is only for those who choose this particular one.

I used [this](https://github.com/neverendingqs/netlify-express/blob/master/server-local.js) repo and [this](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/) article as my guide to create this.



If you have any questions about applying this, please make an appointment with your mentor.

**import note:** when publishing to netlify be sure to delete the word "dist" so the build settings should look like:

![build image on netlify](https://walthermidcoast.s3.amazonaws.com/Screen+Shot+2022-12-03+at+3.13.24+PM.png)

# In order to hit the routes you need to add **/.netlify/functions/server/** to the end of your api url!

I currently have this posted to netflify so if you want to try to hit some urls using postman:

-https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/users
-https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/movies
