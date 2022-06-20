import * as React from 'react'
import { Box } from '@mui/material'
import { Button1 } from '../../molecules/Button'
import { Chips } from '../../molecules/Chips'
import theme from '../../../theme/customTheme'
import { CLEAR_ALL } from '../../../constants/constants'

interface DisplayChipsProps {
    data: string[]
    setData: React.Dispatch<React.SetStateAction<string[]>>
    setDistance: React.Dispatch<React.SetStateAction<string[]>>
    distance: string[]
}

const DisplayChips = ({
    data,
    setData,
    setDistance,
    distance,
}: DisplayChipsProps) => {
    return (
        <Box sx={{ display: 'flex', marginBottom: '15px' }}>
            {data &&
                data.map((d: string) => (
                    <Chips
                        key={1}
                        text={d}
                        variant={'caption2'}
                        styles={{
                            backgroundColor: theme.palette.gammaWhite.main,
                            width: '121px',
                            height: '32px',
                            borderRadius: '8px',
                            marginTop: '12px',
                            marginBottom: '8px',
                            marginRight: '5px',
                        }}
                        onDelete={() => {
                            const Filterdata = []
                            const distances = []
                            for (const val of data) {
                                if (val != d) {
                                    Filterdata.push(val)
                                }
                            }
                            for (const val of distance) {
                                if (val != d) {
                                    distances.push(val)
                                }
                            }
                            setData(Filterdata)
                            setDistance(distances)
                        }}
                    ></Chips>
                ))}
            {data.length != 0 && (
                <Button1
                    variant="body1"
                    TextColor={'alpha300.main'}
                    buttonVariant={'text'}
                    buttonColor={'alpha300'}
                    styles={null}
                    onClick={() => {
                        setData([])
                        setDistance([])
                    }}
                >
                    {CLEAR_ALL}
                </Button1>
            )}
        </Box>
    )
}

export default DisplayChips
