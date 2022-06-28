import React, { SetStateAction } from 'react'
import Popup from '.'

export default {
    title: 'Organisms/Filter',
    component: Popup,
}

export const FilterPopup = () => (
    <Popup
        setData={function (value: SetStateAction<string[]>): void {
            throw new Error('Function not implemented.')
        } }
        setDistance={function (value: SetStateAction<string[]>): void {
            throw new Error('Function not implemented.')
        } } ClearAll={false}    />
)
