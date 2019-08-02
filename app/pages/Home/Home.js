import { Link } from 'dva/router'

import logo from '../../logo.svg'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </p>
        <Link to="/demo/counter">to counter</Link>
      </header>
    </div>
  )
}
