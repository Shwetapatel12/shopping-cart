import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {
  return (
    <div>
      <Fragment>
        <header>
            <Navbar />
        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>
      </Fragment>
    </div>
  )
}

export default Layout
