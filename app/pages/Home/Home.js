import { Link } from 'dva/router'

import logo from '@assets/logo.svg'
import Hello from '@pages/Demo/Hello'

import styles from './style.module.less'

export default function Home() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
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
