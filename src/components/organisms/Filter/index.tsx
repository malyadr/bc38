import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { Grid, Stack, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import { Button1 } from '../../molecules/Button'
import {
    APPLY,
    CLEAR_ALL,
    DISTANCE,
    DISTANCE_VALUES,
    EXP_LEVEL,
    EXP_LEVEL_VALUES,
    GREEN_COMMUTE,
    GREEN_COMMUTE_VALUES,
    JOB_DISTANCE,
    JOB_DISTANCE_VALUES,
    POSTED_DATE,
    POSTED_DATE_VALUES,
    TRANSPORT,
    TRANSPORT_MODES,
} from '../../../constants/constants'
import Icon from '../../atoms/Icon'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '560px',
    height: '464px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'gammaWhite.main',
    boxShadow: 24,
    borderRadius: 2,
    p: '16px 16px 32px 32px',
}
let checkedValue = [] as string[]

interface FilterProps {
    setData: React.Dispatch<React.SetStateAction<string[]>>
    setDistance: React.Dispatch<React.SetStateAction<string[]>>
    ClearAll: boolean
}

const Filter = ({ setData, setDistance, ClearAll }: FilterProps) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [selectedValue, setSelectedValue] = React.useState('yes')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value)
        const { value, checked } = event.target

        if (checked) {
            if (checkedValue.includes('yes') && value == 'no') {
                const index = checkedValue.indexOf('yes')
                checkedValue.splice(index, 1)
            } else if (checkedValue.includes('no') && value == 'yes') {
                const index = checkedValue.indexOf('no')
                checkedValue.splice(index, 1)
            }
            checkedValue.push(value)
        }
    }

    const defaultChecked = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]

    
    const [checkedState, setCheckedState] = React.useState(defaultChecked)
    const [_allCheckedValue, setAllCheckedValue] = React.useState<any[]>([])

    const clearAll = () => {
        setCheckedState(defaultChecked)
        setSelectedValue('yes')
        checkedValue = []
        setAllCheckedValue([])
        setDistance([])
    }
    React.useEffect(() => {
        clearAll()
    }, [ClearAll])
    
    const distance: string[] = []
    for (let i = 0; i < 4; i++) {
        if (checkedState[i]) {
            distance.push(DISTANCE_VALUES[i])
        }
    }
    const apply = () => {
        setAllCheckedValue(checkedValue)
        setData(checkedValue)
        setDistance(distance)
        setOpen(false)
    }

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        position: number
    ) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
        const { value, checked } = event.target
        if (checked) {
            checkedValue.push(value)
        } else {
            const index = checkedValue.indexOf(value)

            checkedValue.splice(index, 1)
        }
    }

    return (
        <>
            <Button
                startIcon={
                    <Icon src="filter" sx={{ width: '24px', height: '24px' }} />
                }
                onClick={handleOpen}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '32px',
                    textTransform: 'capitalize',
                    width: {
                        sm: '100px',
                        md: '100px',
                        lg: '137x',
                    },
                    marginLeft: '20px',
                    height: '57px',
                    bgcolor: 'gammaWhite.main',
                }}
                color="betaHigh"
                variant="text"
            >
                Filter
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack direction="row" sx={style}>
                    <Stack
                        direction="column"
                        sx={{
                            gap: '30px',
                            padding: '7px 21.5px',
                        }}
                    >
                        <Stack>
                            <Typography
                                variant="body1"
                                color="betaHigh.main"
                                sx={{ pb: '12px' }}
                            >
                                {DISTANCE}
                            </Typography>
                            {DISTANCE_VALUES.map((j, index) => {
                                return (
                                    <Typography
                                        variant="body2"
                                        color="betaMedium.main"
                                        sx={{
                                            marginBottom: '8px',
                                            gap: '12px',
                                            display: 'flex',
                                        }}
                                        key={index}
                                    >
                                        <Checkbox
                                            sx={{
                                                position: 'relative',
                                                right: '2px',
                                                p: '0px',
                                                color: 'beta400.main',
                                                '&.Mui-checked': {
                                                    color: 'alpha400.main',
                                                },
                                            }}
                                            checked={checkedState[index]}
                                            onChange={(event) =>
                                                handleOnChange(event, index)
                                            }
                                            value={j}
                                        />
                                        {j}
                                    </Typography>
                                )
                            })}
                        </Stack>
                        <Stack>
                            <Typography
                                variant="body1"
                                color="betaHigh.main"
                                sx={{ pb: '12px' }}
                            >
                                {JOB_DISTANCE}
                            </Typography>
                            {JOB_DISTANCE_VALUES.map((j, index) => {
                                return (
                                    <Typography
                                        variant="body2"
                                        color="betaMedium.main"
                                        sx={{
                                            marginBottom: '8px',
                                            gap: '12px',
                                            display: 'flex',
                                        }}
                                        key={index}
                                    >
                                        <Checkbox
                                            sx={{
                                                position: 'relative',
                                                right: '2px',
                                                p: '0px',
                                                color: 'beta400.main',
                                                '&.Mui-checked': {
                                                    color: 'alpha400.main',
                                                },
                                            }}
                                            checked={checkedState[index + 10]}
                                            onChange={(event) =>
                                                handleOnChange(
                                                    event,
                                                    index + 10
                                                )
                                            }
                                            value={j}
                                        />
                                        {j}
                                    </Typography>
                                )
                            })}
                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        sx={{
                            padding: '7px 21.5px',
                            gap: '30px',
                        }}
                    >
                        <Stack sx={{}}>
                            <Typography
                                variant="body1"
                                color="betaHigh.main"
                                sx={{ pb: '12px', width: '150px' }}
                            >
                                {POSTED_DATE}
                            </Typography>
                            {POSTED_DATE_VALUES.map((j, index) => {
                                return (
                                    <Typography
                                        variant="body2"
                                        color="betaMedium.main"
                                        sx={{
                                            marginBottom: '8px',
                                            gap: '10px',
                                            display: 'flex',
                                            width: 'fit-content',
                                        }}
                                        key={index}
                                    >
                                        <Checkbox
                                            sx={{
                                                position: 'relative',
                                                right: '2px',
                                                p: '0px',
                                                color: 'beta400.main',
                                                '&.Mui-checked': {
                                                    color: 'alpha400.main',
                                                },
                                            }}
                                            checked={checkedState[index + 4]}
                                            onChange={(event) =>
                                                handleOnChange(event, index + 4)
                                            }
                                            value={j}
                                        />
                                        {j}
                                    </Typography>
                                )
                            })}
                        </Stack>

                        <Stack>
                            <Typography
                                variant="body1"
                                color="betaHigh.main"
                                sx={{ pb: '12px' }}
                            >
                                {EXP_LEVEL}
                            </Typography>
                            {EXP_LEVEL_VALUES.map((j, index) => {
                                return (
                                    <Typography
                                        variant="body2"
                                        color="betaMedium.main"
                                        sx={{
                                            marginBottom: '8px',
                                            gap: '12px',
                                            display: 'flex',
                                        }}
                                        key={index}
                                    >
                                        <Checkbox
                                            sx={{
                                                position: 'relative',
                                                right: '2px',
                                                p: '0px',
                                                color: 'beta400.main',
                                                '&.Mui-checked': {
                                                    color: 'alpha400.main',
                                                },
                                            }}
                                            checked={checkedState[index + 14]}
                                            onChange={(event) =>
                                                handleOnChange(
                                                    event,
                                                    index + 14
                                                )
                                            }
                                            value={j}
                                        />
                                        {j}
                                    </Typography>
                                )
                            })}
                        </Stack>
                    </Stack>

                    <Stack
                        direction="column"
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Stack sx={{ p: '7px 21.5px' }}>
                            <FormControl sx={{ padding: '0px' }}>
                                <Typography
                                    variant="body1"
                                    color="betaHigh.main"
                                    sx={{ pb: '12px' }}
                                >
                                    {GREEN_COMMUTE}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="betaMedium.main"
                                    sx={{
                                        pb: '8px',
                                        gap: '12px',
                                        display: 'flex',
                                    }}
                                >
                                    <Radio
                                        checked={selectedValue === 'yes'}
                                        onChange={(event) =>
                                            handleChange(event)
                                        }
                                        value="yes"
                                        name="radio-buttons"
                                        sx={{
                                            color: 'beta400.main',
                                            p: '0px',

                                            '&.Mui-checked': {
                                                color: 'alpha400.main',
                                            },
                                        }}
                                    />
                                    {GREEN_COMMUTE_VALUES[0]}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="betaMedium.main"
                                    sx={{
                                        pb: '8px',
                                        gap: '12px',
                                        display: 'flex',
                                    }}
                                >
                                    <Radio
                                        checked={selectedValue === 'no'}
                                        onChange={(event) =>
                                            handleChange(event)
                                        }
                                        value="no"
                                        name="radio-buttons"
                                        sx={{
                                            color: 'beta400.main',
                                            p: '0px',
                                            '&.Mui-checked': {
                                                color: 'alpha400.main',
                                            },
                                        }}
                                    />
                                    {GREEN_COMMUTE_VALUES[1]}
                                </Typography>
                            </FormControl>
                        </Stack>
                        <Stack
                            sx={{
                                position: 'relative',
                                top: '30px',
                                px: '21.5px',
                            }}
                        >
                            <Typography
                                variant="body1"
                                color="betaHigh.main"
                                sx={{ pb: '12px' }}
                            >
                                {TRANSPORT}
                            </Typography>
                            {TRANSPORT_MODES.map((j, index) => {
                                return (
                                    <Typography
                                        variant="body2"
                                        color="betaMedium.main"
                                        // sx={{
                                        //     pb: '8px',
                                        //     width: 'fit-content',
                                        // }}
                                        sx={{
                                            marginBottom: '8px',
                                            gap: '12px',
                                            display: 'flex',
                                        }}
                                        key={index}
                                    >
                                        <Checkbox
                                            sx={{
                                                position: 'relative',
                                                right: '2px',
                                                p: '0px',
                                                color: 'beta400.main',
                                                borderRadius: '4px',
                                                '&.Mui-checked': {
                                                    color: 'alpha400.main',
                                                },
                                            }}
                                            checked={checkedState[index + 18]}
                                            onChange={(event) =>
                                                handleOnChange(
                                                    event,
                                                    index + 18
                                                )
                                            }
                                            value={j}
                                        />
                                        {j}
                                    </Typography>
                                )
                            })}
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                padding: '0px',
                                width: '100%',
                            }}
                        >
                            <Button1
                                TextColor="alpha300.main"
                                variant="caption1"
                                buttonVariant="text"
                                buttonColor="alpha300"
                                styles={{ borderRadius: '8px', height: '30px' }}
                                onClick={clearAll}
                            >
                                {CLEAR_ALL}
                            </Button1>
                            <Button1
                                TextColor="gammaWhite.main"
                                variant="caption1"
                                buttonVariant="contained"
                                buttonColor="alpha400"
                                styles={{
                                    borderRadius: '8px',
                                    height: '30px',
                                    width: '101px',
                                }}
                                onClick={apply}
                            >
                                {APPLY}
                            </Button1>
                        </Stack>
                    </Stack>
                </Stack>
            </Modal>
        </>
    )
}

export default Filter
