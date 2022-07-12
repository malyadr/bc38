import React, { SetStateAction } from 'react'
import Popup from '.'

export default {
    title: 'Organisms/Filter',
    component: Popup,
}

export const FilterPopup = () => (
    <Popup
        data={[]}
        setData={() => {
            undefined
        }}
        setDistance={() => {
            undefined
        }}
        ClearAll={false}
    />
)
