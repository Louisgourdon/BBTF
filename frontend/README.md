**_Step 1_**

```
npm install
```

**_Step 2_**
Create a `.env` file in the root of the project

**_Step 3_**
Copy all the content of `.env.example` into `.env`

```js
NEXT_PUBLIC_BACKEND_URL = "http://localhost:5000";
```

**_Step 4_**

```
npm run dev
```

## Tech Stack

1. `Nextjs`
2. `Tailwind CSS`
3. `TypeScript & Javascript`
4. `tw-merge` - For merging tailwind classes
5. `shadcnUI` - For UI components

## Folder Structure (Root)

```bash
 .env
│   .env.example
│   .gitignore
│   components.json
│   eslint.config.mjs
│   next-env.d.ts
│   next.config.ts
│   package-lock.json
│   package.json
│   postcss.config.mjs
│   README.md
│   tsconfig.json
│
│
├───app
│   │   favicon.ico
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │
│   └───(auth)
│       ├───component
│       │       login-form.tsx
│       │       register-form.tsx
│       │
│       ├───login
│       │       page.tsx
│       │
│       └───register
│               page.tsx
│
├───components
│   └───ui
│           button.tsx
│           container.tsx
│           form.tsx
│           input.tsx
│
├───hooks
│       useMutations.ts
│
├───lib
│       utils.ts
│
├───public
│       file.svg
│       globe.svg
│       next.svg
│       vercel.svg
│       window.svg
│
└───utils
        routes.ts
        type.ts

```

## Some Important Rules

1. `page.tsx` and `layout.tsx` must always be a server component
2. Use `useMutation` hook from calling any api that makes any kind of mutation in the database
3. Use `Promise.all()` when making multiple async calls in a function and those calls are indeprendent of each other
4. If there are lot's of API calls during Server-Side-Rendering(SSR) and it's increasing the page load time then try to put the API calls into there respective components and use `Suspense` to stream the component, which will reduce the load times
