# Help for Career Foundry Students converting their Heroku app to Netlify

I made this repo to help with CF students who are no longer able to post their movie apis to Heroku and would like to move them to Netlify.

# click [here](https://www.loom.com/share/528e9fb968114735b53d09ab518e477e) to watch video showing you how to deploy this on Netlify

some important things: 
- most of you currently have your routes in a file called "index.js" in the root.  You will find similar routes here inside express/server.js
- netlify-lambda (the tech that makes this work) has an issue with bcrypt which CF students use in their movie_app.  Use bcryptjs instead. See [here](https://github.com/netlify/netlify-lambda/issues/132) for more detail.
- your routes need to have "/.netlify/functions/server/" at the end of them.  Test the following on Postman:
	- https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/users
	- https://imaginative-frangipane-fccf11.netlify.app/.netlify/functions/server/movies
- check out the other branch ("separate-user-and-movie-routes") to see how cool express router is -- and how tidy it can make your code.
- netlify is not your only option.  So this repo is only for those who choose this particular one.
- I used [this](https://github.com/neverendingqs/netlify-express/blob/master/server-local.js) repo and [this](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/) article as my guide to create this.
- If you have any questions about applying this, please make an appointment with your mentor.

