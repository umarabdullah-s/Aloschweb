import React from 'react'
import { Fragment } from 'react'
import '@/styles/global.css'
import WebLayout from '@/layout/WebLayout'
import "antd/dist/reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = ({Component,pageProps}) => {
  return (
    <Fragment>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  )
}

export default App