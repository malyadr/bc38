// import Typography from '@mui/material/Typography'
import React from 'react'

interface Props {
    index: string
}

const AQIIndicator = ({ index }: Props) => {
    return (
        <>
            <svg
                width="212"
                height="214"
                viewBox="0 0 212 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="aqi"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M108.184 0.0213712C140.824 0.749279 168.093 22.16 187.773 48.0881C206.715 73.0451 216.22 103.736 210.204 134.436C203.935 166.425 186.368 197.883 156.018 210.121C127.23 221.728 97.3546 204.885 69.525 191.157C42.2847 177.72 12.6878 163.903 3.71566 134.992C-5.93182 103.904 4.04257 70.2111 23.9929 44.4356C44.3863 18.0879 74.7754 -0.723665 108.184 0.0213712Z"
                    fill="white"
                    stroke="black"
                />
                <text
                    xlinkHref="#aqi"
                    x="56px"
                    y="120px"
                    fill="#0B6D62"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="600"
                    fontSize="48px"
                >
                    {index}
                </text>
            </svg>
        </>
    )
}

export default AQIIndicator
