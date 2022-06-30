import React from 'react'
import HomePageTemplate from '../../templates/HomePageTemplate'

interface HomePageProps {
    details: string
}

const HomePage = ({ details }: HomePageProps) => {
    return (
        <>
            <HomePageTemplate details={details} />
        </>
    )
}

export default HomePage
