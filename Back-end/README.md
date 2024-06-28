# Management system

## Technologies Used

- [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
- [Typescript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types to the language
- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [TypeORM](https://typeorm.io/#/) - TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8)

## Environment Variables

```
# JWT
AUTH_TOKEN_EXPIRATION_TIME=""
AUTH_TOKEN_SECRET=""

# DATABASE
DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=""
DB_USERNAME=""
DB_MAIN_SCHEMA=""
DB_AUDIT_SCHEMA=""

# LOGGING
LOGGING_COMBINED_FILE=""
LOGGING_ERROR_FILE=""
LOGGING_LEVEL=""
LOGGING_TYPE=""

# SERVER
SERVER_PORT=""
```

## Setup

1. Create a `.env.local` file on the root of the project based on `.env.example`
2. Create a `dev` app database. `$ createdb <DB_NAME>;`
3. Execute `$ npm run setup:local`
4. Start the development server running `$ npm run dev`

## Running Tests

1. Create a `.env.test` file on the root of the project based on `.env.example`
2. Create a `test` app database. `$ createdb <DB_NAME>;`
3. Execute `$ npm run setup:test`
4. Run `$ npm test`
   .

## Build

#### build image

```bash
docker build --progress=plain -t management-back-end .
```

#### run image

```bash
docker run -d -p 3000:3000 management-back-end
```
