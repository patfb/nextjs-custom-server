"use client";

import { useEffect } from "react";

// let module = {};

export default function B() {
  if (true) {
    useEffect(() => {
      console.log("loaded!");
    }, []);
  }

  return (
    <div>
      <h1>B</h1>
      <p>this is the B app router</p>
    </div>
  );
}

/* 
patrick@BATCOMPUTER:~/projects/nextjs-custom-server$ npm run lint

> lint
> eslint .


/home/patrick/projects/nextjs-custom-server/app/b/page.tsx
   8:1  error  Do not assign to the variable `module`. See: https://nextjs.org/docs/messages/no-assign-module-variable                       @next/next/no-assign-module-variable
   8:5  error  'module' is never reassigned. Use 'const' instead                                                                             prefer-const
   8:5  error  'module' is assigned a value but never used                                                                                   @typescript-eslint/no-unused-vars
  12:5  error  React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks

/home/patrick/projects/nextjs-custom-server/middlewares/__tests__/aLogger.test.ts
   1:20  error    'expect' is defined but never used        @typescript-eslint/no-unused-vars
   2:10  error    'aLogger' is defined but never used       @typescript-eslint/no-unused-vars
   6:9   error    'req' is assigned a value but never used  @typescript-eslint/no-unused-vars
  12:3   warning  Test has no assertions                    jest/expect-expect

/home/patrick/projects/nextjs-custom-server/middlewares/aLogger.ts
  3:7  error  'apples' is defined but never used  @typescript-eslint/no-unused-vars

✖ 9 problems (8 errors, 1 warning)
  1 error and 0 warnings potentially fixable with the `--fix` option. 
  
  */
