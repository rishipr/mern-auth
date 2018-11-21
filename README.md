# mern-auth
![Final App](https://i.postimg.cc/tybZb8dL/final-MERNAuth.gif)
Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:
+ [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
+ [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
+ [MongoDB](https://www.mongodb.com/) for the database
+ [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components


## Medium Series
+ [Full-Stack Development: Build a Login/Auth App with MERN Stack- part 1 (Creating the Backend)](https://blog.bitsrc.io/full-stack-development-build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
+ Parts 2 and 3 will be added here as they are published.

## Configuration
Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.
```javascript
module.exports = {
  mongoURI: "YOUR_MONGOURI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start
```javascript
// Install dependencies for server
npm install

// Install dependencies for client
npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.
