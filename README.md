## The server is created using Node.js

The server is created using Node.js in conjunction with the MongoDB database.  
On this server, you can register, log in, and assign roles.

I used the following npm packages in creating my server:

1. **express**:
   Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It simplifies the process of handling HTTP requests, routing, and middleware.

2. **express-validator**: Express-validator is a set of Express.js middlewares that wraps validator.js validator and sanitizer functions. It makes data validation and sanitization in Express applications more straightforward and convenient.

3. **jsonwebtoken**:JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The "jsonwebtoken" npm package allows you to generate and verify JWTs, which is commonly used for authentication and information exchange between the server and clients.

4. **mongoose**:Mongoose is an elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution for modeling application data and includes features like validation, casting, and business logic hooks.

5. **nodemon**:Nodemon is a utility that monitors for changes in files in a Node.js application and automatically restarts the server. This is particularly useful during development, as it eliminates the need to manually restart the server every time changes are made to the code, improving the development workflow.
