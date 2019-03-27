# ReactSetup

- [Introduction]()
- [Integrated Modules]()
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
- [ ] [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
- [ ] [Webpack Tree Shaking in production](https://webpack.js.org/guides/tree-shaking/)
- [ ] React Router Lazy Loading

What will be include:

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
