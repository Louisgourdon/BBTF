**_Step 1_**

```
npm install
```

**_Step 2_**
Create a `.env` file in the root of the project

**_Step 3_**
Copy all the content of `.env.example` into `.env`

```js
- DATABASE_URL= // your database url
- JWT_SECRET= // jwt secret
- FRONTEND_URL= // http://localhost:3000
- BACKEND_URL= // http://localhost:5000
```

**_Step 4_**

```
npm run dev
```

## Tech Stack

1. `Express.js`
2. `Cors`
3. `TypeScript & Javascript`
4. `PostgreSQL`
5. `drizzle ORM`,
6. `jsonwebtoken`,
7. `bcrypt`
8. `cookie-parser`
9. `dotenv`

## Folder Structure (src/)

```bash

│   index.ts
│
├───controllers
│       user.controller.ts
│
├───db
│   │   db.ts
│   │
│   └───schema
│           user.ts
│
├───routes
│       index.ts
│       user.route.ts
│
└───utils
        constant.ts
        index.ts
        middleware.ts
```

## Folder Structure Info

- `src/index.ts` -- Main entry file of the project
- `src/db/schema` -- All the schemas must be in this directory
- `src/controllers` -- All the routes logic/controller must me in this directory
- `src/routes` -- All the routes must be in this directory
- `src/utils/constant.ts` -- All the constant variables must be in this file
- `src/utils/index.ts` -- All the utility functions must be in this file
- `src/utils/middleware.ts` -- All middleware functions must be in this file

## Some Important Rules

1. Use `Promise.all()` when making multiple async calls in a function and those calls are indeprendent of each other
2. Run `npm run gen` and then `npm run migrate` after doing any kind of change in schema
3. All controllers must be wrapped with `TryCatch` untility function from `src/utils/index.ts`
4. Always use `TError` utility function from `src/utils/index.ts` to throw an error in a controller. NOTE: Only use this when the controller is wrapped with `TryCatch`
5. Prefer using `router.route("/path").get().post()` instead of `router.get()` or `router.post()`
6. When creating a new utility function add that function's name and info in the list below

## Utilities function and their info

1. `TError` - Used to throw an error in a controller or in any function as long as that function is wrapped in `TryCatch` or it's parent function is wrapped in `TryCatch`
2. `TryCatch` - A higher order function that takes a controller as an argument and calls that controller, it's used so that we only have to handle error once and to keep the error structure same for every controller
3. `encryptText` - Function to enrypt a plain text using jwt `sign` function
4. `decryptText` - Function to decrypt a encrypted text using jwt `verify` function
5. `encryptPassword` - Function to encrypt password using `bcrypt`
6. `comparePassword` - Function to compare an encrypted password with a plain text password
7. `checkFields` - This function loops over an javascript object and throws an error if any of the key doesn't have any value, so that we do not have to check every single field manually
8. `isValidEmail` - This function uses `RegExp` to check if an email is valid or not
