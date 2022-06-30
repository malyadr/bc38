import React from 'react'
import Header from '../../organisms/Header'
import SideNav from '../../organisms/SideNavBar'

interface HomePageTemplateProps {
    details: string
}
const HomePageTemplate = ({ details }: HomePageTemplateProps) => {
    return (
        <React.Fragment>
            <Header
                text={details}
                style={{ height: '80px', position: 'fixed', top: 0 }}
            />
            <SideNav style={{ position: 'fixed', top: '80px', left: 0 }} />
        </React.Fragment>
    )
}

export default HomePageTemplate
