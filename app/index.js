import dva from 'dva'
import * as serviceWorker from './serviceWorker'

const createHistory = require('history').createHashHistory


const app = dva({
  history: createHistory(),
})


// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app').default)

// 4. Router
app.router(require('./App').default)

// 5. Start
app.start('#root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
