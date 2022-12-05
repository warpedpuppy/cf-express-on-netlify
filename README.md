# Help for Career Foundry Students converting their Heroku app to Netlify

Hi, my name is Ted and I made this repo to help with CF students who are no longer able to post their movie apis to Heroku and would like to move them to Netlify.

Most of you currently have your routes in a file called "index.js" in the root.  You will find similar routes here inside express/server.js

Just one thing:  Netlify is not your only option.  So this repo is only for those who choose this particular one.

I used [this](https://github.com/neverendingqs/netlify-express/blob/master/server-local.js) repo and [this](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/) article as my guide to create this.



If you have any questions about applying this, please make an appointment with your mentor.

# click [here](https://www.loom.com/share/528e9fb968114735b53d09ab518e477e) to watch video showing you how to deploy this on Netlify

** np: don't forget to remove the word 'dist' from the deployment process **

# important information below!

**In order to hit the routes you need to add "/.netlify/functions/server/" to the end of your api url!**

I currently have this posted to netflify so if you want to try to hit some urls using postman:

 - https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/users

 - https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/movies

should both work

# Ooh one more thing!

check out the other branch here -- "separate-user-and-movie-routes" -- to see how cool express router is -- and how tidy it can make your code.