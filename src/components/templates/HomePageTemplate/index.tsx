import React from 'react'
import Header from '../../organisms/Header'
import SideNav from '../../organisms/SideNavBar'

const HomePageTemplate = () => {
    return (
        <React.Fragment>
            <Header style={{ height: '80px', position: 'fixed', top: 0 }} />
            <SideNav style={{ position: 'fixed', top: '80px', left: 0 }} />
        </React.Fragment>
    )
}

export default HomePageTemplate
