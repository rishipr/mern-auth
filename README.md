# mern-auth
![Final App](https://i.postimg.cc/tybZb8dL/final-MERNAuth.gif)
Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:
+ [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
+ [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
+ [MongoDB](https://www.mongodb.com/) for the database
+ [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components


## Medium Series
+ [Part 1/3: Full-stack development for beginners: building a login/auth app with the MERN stack from scratch (Creating the Backend)](https://medium.com/@rishipr/part-1-3-full-stack-development-for-beginners-building-a-login-auth-app-with-the-mern-stack-from-c405048e3669)
+ [Part 2/3: Full-stack development for beginners: building a login/auth app with the MERN stack from scratch (Frontend & Redux Setup)](https://medium.com/@rishipr/part-2-3-full-stack-development-for-beginners-building-a-login-auth-app-with-the-mern-stack-from-5fe6838fe24d)
+ [Part 3/3: Full-stack development for beginners: building a login/auth app with the MERN stack from scratch (Linking Redux with React Components)](https://medium.com/@rishipr/part-3-3-full-stack-development-for-beginners-building-a-login-auth-app-with-the-mern-stack-from-ce7fef2a5f62)

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
// Install dependencies for server"
npm install

// Install dependencies for client
npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.
