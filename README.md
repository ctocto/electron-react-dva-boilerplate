This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install
```github
git clone --depth 1 --single-branch --branch master https://github.com/ctocto/electron-react-dva-boilerplate.git your-project-name
```
And then install the dependencies with npm
```
$ cd your-project-name
$ npm i
$ npm i -g foreman // http://strongloop.github.io/node-foreman/
```
### Starting Development
```
$ npm start
```

### Packaging for Production
To package apps for the local platform:
```
$ npm run dist
```


> https://flaviocopes.com/react-electron/

### QA
#### Unable to resolve path to module '@pages/Home/Home'  import/no-unresolved
https://www.npmjs.com/package/eslint-import-resolver-alias

#### How do I change `src` folder to something else in create-react-app
```js
const path = require('path')
const {
  override,
} = require('customize-cra')

module.exports = {
  paths(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'app/index.js')
    paths.appSrc = path.resolve(__dirname, 'app')
    return paths
  },
}
```
#### '@pages/Demo' should be listed in the project's dependencies. Run 'npm i -S @pages/Demo' to add it            import/no-extraneous-dependencies
have no alternative
```
"import/no-extraneous-dependencies": [0]
```