
<h3 align="center">
  Omnistack 10 - Dev Radar Project
</h3>

## :rocket: About the challenge
<p>
The goal of this project was to build web app and mobile to find developers near the user, using distance calculation in a radio of 10km
</p>

## :airplane: NodeJS

- NodeJS Principles
- HTTP principles
   - HTTP verbs and how to use it properly
- Express
- Insomnia to test API
- MVC with express
- MongoDB
   - This DB was choosen because it has array e geolocation structure for our app
   - How to create and use Mongoose Schema
   - How to use GeoLocation with mongoose
   - How to use Cloud MongoDB
      - How to connect remotely
- How to config ESlint + Prettier + Nodemon
- Axios (Promise based HTTP client for the browser)
- Socket I.O

### **Tools that I've used**

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL);
- Docker
- Vscode

### **What I've learned**

- Yarn/Npm
- Concepts of JWT (Json Web Token) and how to apply it:
  - Headers (token type, algorithm)
  - Payload (Additional data)
  - Signature
- Authentication through JWT
- Nodejs Concepts and how it really works;
  - Goolgle V8
  - Single-Thread
    - Multi-Thread through	C++ by lib libuv
    - Background-Threads
  - Event Loop
    - Callstack
  - Non-blocking IO
    - Web sotcket (Persistent request)
- ExpressJS framework
  - Good for micro-services
  - Without opinion/structure
- How an API works
- How to use and add extra configs on Nodemon
- How to use sucrase to add Es6/7+ features in Nodejs (I could use also Babel)
- Docker concepts and how it works
- How to apply editor config
- How to use Sequelize ORM for Postgres/Mysql
- How to use EsLint / Prittier and the benefits of using it
- How to use migrations / seeds
- How to organize folders structure and how to import files
- How to use bcrypt library
- How to validate data schema through Yup library
- How to use local/global middleware, is this case I've created auth middleware
- HTTP verbs

### **How to use it**

Install node modules
```
yarn install
```

Run migrations
```
yarn sequelize db:migrate
```

Run Seed
```
yarn sequelize db:seed:all
```

Run Server
```
yarn dev
```
