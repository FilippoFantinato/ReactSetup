# ReactSetup

- [Introduction](#introduction)
- [Structure]()

<h2 id='introduction'>Introduction</h2>
ReactSetup is my personal setup for react projects

I'll go to use this structure in a my future project called Act, which is a command line program to manage react projects

This isn't a definetly version and maybe it could even change radically.
Any suggestions or criticisms are welcome

It include:
- [x] [Webpack](https://webpack.js.org/)
- [x] [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
- [x] [Tyepscript](https://www.typescriptlang.org/)
- [x] [Redux](https://redux.js.org/)
- [x] [React Router v4](https://reacttraining.com/react-router/)
- [x] [DotEnv for Webpack](https://github.com/mrsteele/dotenv-webpack)
- [x] [SASS/SCSS with node-sass](https://sass-lang.com/)
- [ ] [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [ ] [Webpack Tree Shaking in production](https://webpack.js.org/guides/tree-shaking/)
- [ ] React Router Lazy Loading

Should I include: 
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)?
- [Redux Saga](https://redux-saga.js.org/)?
- [Webpack Caching](https://webpack.js.org/guides/caching/)
- Separeted environment system?

## Structure

```bash
├── public
│   ├── assets
│   └── index.html
├── src
│   ├── app
│   │   ├── app.routing.ts
│   │   ├── app.scss
│   │   ├── app.tsx
│   │   ├── components
│   │   │   └── components.scss
│   │   ├── pages
│   │   │   └── pages.scss
│   │   ├── redux
│   │   │   ├── actions
│   │   │   │   └── index.ts
│   │   │   ├── reducers
│   │   │   │   └── index.ts
│   │   │   └── store.ts
│   │   ├── services
│   │   │   └── HttpService.ts
│   │   ├── styles
│   │   │   ├── shared.scss
│   │   │   ├── utils.scss
│   │   │   └── variables.scss
│   │   ├── types
│   │   │   ├── actions.ts
│   │   │   ├── components
│   │   │   ├── pages
│   │   │   ├── shared.ts
│   │   │   ├── state.ts
│   │   │   └── system
│   │   │       ├── config.types.ts
│   │   │       └── HttpService.types.ts
│   │   └── utils
│   │       └── routing.utils.tsx
│   ├── environment
│   │   └── environment.ts
│   └── index.tsx
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

### Public
The directory "public" has the aim to contains all the files exposed to the internet.

Here will be generated by webpack the bundle.js

### Src
Src is the directory which contains all the react side of the project.
The main parts of it are:
- index.tsx. It's the entry point of the project and it imports app.tsx
- environment.
- app.

### Environment
Environment is the directory which contains all the file usefull for the management of variables taken from the .env file
- environment.ts 


### App
The app directory contains all

- app.tsx. It's the main React Component and here there is the first integration with React Router. All the information about the routing are into the file app.routing.tsx
- app.routing.ts. Here all the routes of the app.tsx component are declareted.There will be an object called "routes", which is of type Route[], that contains which path associate to a specific component.<br/>
All the route can easly created by the function [createRoutes]() contained in the file [utils/routing.utils.tsx]()
- app.scss. It's the main style file in the project. All the others files will be included here.
