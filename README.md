# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# react-practice
react application setup 
tech used 
1. yarn 
2. vite
3. react
4. typescript + SWC

After setup all this application as we init the npm application here also we need to init our yarn 


C:\Users\acer>d:

# D:\>npm i yarn -g

changed 1 package in 965ms

# D:\>yarn create vite project11
yarn create v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-vite@6.3.1" with binaries:
- create-vite
- cva
|
# o Select a framework:
| React
|
o Select a variant:
# | TypeScript + SWC
|
o Scaffolding project in D:\project11...
|
— Done. Now run:

# cd project11
# yarn init ||  yarn 

Done in 14.75s.

# D:\>cd project11

# D:\project11>yarn
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 36.63s.

# D:\project11>yarn dev
yarn run v1.22.22
$ vite

VITE v6.2.1 ready in 404 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help

 ➜ D:\project11>code .

when we need to import packages with the binding of the types then we can use

➜ yarn add @types/<packagesName>

when we need to send code for the production phase we need to build that code
as that time it will compile that code and make 4 files
all the files will be stored in the dist folder 

➜ yarn dev build

1. index.html
2. .css
3. js--> if the app is big then it will break down into chunck
4. svg --> store all the file/photos

"lint": This will maintain the standard of the code as need some shorts of the  
rules are: 1. variable name must be alpha numeric, camel cases, all the function name must be within the limited size
    function name must be of the certain size or the length 

➜ yarn dev lint==>Now this will set all the rules that we have discussed above 

if we need to see about the rules for the linting then we can see search on the chrome 
most popular is of the airbnb


The entry point of the react application is of the index.html as of of the outside of the folder

but in the case of  react our main file is pages.tsx

Any thing that we write outside of the src directory will be not compile 
but images are can be taken from the public directory 

when we working on the NEXT.JS 
all the file name must be the name of the folder name and last will be 
as in next.js what ever we are making of the folder name that is consider as the url of the that pages

in react if we need to use multiple of the components/ function then we can use fragment

➜ <>  </>   ---> this is called as the fragement
 ➜ <fragment></fragment>

