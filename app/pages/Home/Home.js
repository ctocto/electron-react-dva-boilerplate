import { Link } from 'dva/router'

import logo from '@assets/logo.svg'
import Hello from '@pages/Demo/Hello'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>app/App.js</code>
          {' '}
          and save to reload.
        </p>
        <Hello />
        <Link to="/demo/counter">to counter</Link>
      </header>
    </div>
  )
}
