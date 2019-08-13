import { useEffect } from 'react'
import { Link } from 'dva/router'


import logo from '@assets/logo.svg'
import Hello from '@pages/Demo/Hello'

import { ipcRenderer } from 'electron'
import styles from './style.module.less'

// const { ipcRenderer } = window.require('electron')

export default function Home() {
  useEffect(() => {
    ipcRenderer.on('checking-for-update', (event, message) => {
      console.log(message)
    })
    ipcRenderer.on('autoUpdater-error', (event, err) => {
      console.log(err)
    })
    ipcRenderer.on('autoUpdater-canUpdate', (event, info) => {
      console.log(info)
    })
  }, [])

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
