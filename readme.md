1) GET PROJECT FROM GIT
git init
git remote add origin https://thegge@bitbucket.org/thegge/storebrand.git

2) SETUP PROJECT WITH NPM
npm install

3) RUN MODERNIZR WHENEVER NEED BE
gulp modernizr

4) RUN GULP TO COMPILE AND WATCH FILES
gulp

5) RUN NODEMON LIKE SO TO HAVE IT AUTOMATICALLY RESTART ON CHANGES
nodemon -e js,html --watch app app/index.js

6) WHEN READY TO PUBLISH, UGLIFY THE JAVASCRIPT
gulp build
