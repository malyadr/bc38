import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import GroupFilter from '../../../../public/assets/icons/GroupFilter.svg'
import { Box, Grid, SvgIcon, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import { Button1 } from '../../molecules/button'
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
import { Chips } from '../../molecules/chips'
import theme from '../../../theme/customTheme'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '546px',
    height: '500px',
    bgcolor: 'gammaWhite.main',
    boxShadow: 24,
    borderRadius: 2,
    p: '20px',
}
let checkedValue = [] as string[]

const Filter = () => {
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
            // setAllCheckedValue(checkedValue)
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
    const [allCheckedValue, setAllCheckedValue] = React.useState<any[]>([])

    const clearAll = () => {
        setCheckedState(defaultChecked)
        setSelectedValue('yes')
        checkedValue = []
        setAllCheckedValue([])
        handleClose()
    }

    const apply = () => {
        setAllCheckedValue(checkedValue)
        console.log(allCheckedValue)
        handleClose()
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
            // setAllCheckedValue(checkedValue)
        } else {
            const index = checkedValue.indexOf(value)

            checkedValue.splice(index, 1)
            // setAllCheckedValue(checkedValue)
        }
    }

    return (
        <>
            <Button
                startIcon={<SvgIcon component={GroupFilter} />}
                onClick={handleOpen}
                sx={{
                    borderRadius: 5,
                    textTransform: 'capitalize',
                    width: '137px',
                    height: '57px',
                }}
                color="betaHigh"
            >
                Filter
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container sx={style}>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh.main">
                            {DISTANCE}
                        </Typography>

                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[0]}
                                onChange={(event) => handleOnChange(event, 0)}
                                value={DISTANCE_VALUES[0]}
                            />
                            {DISTANCE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[1]}
                                onChange={(event) => handleOnChange(event, 1)}
                                value={DISTANCE_VALUES[1]}
                            />
                            {DISTANCE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[2]}
                                onChange={(event) => handleOnChange(event, 2)}
                                value={DISTANCE_VALUES[2]}
                            />
                            {DISTANCE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[3]}
                                onChange={(event) => handleOnChange(event, 3)}
                                value={DISTANCE_VALUES[3]}
                            />
                            {DISTANCE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh.main">
                            {POSTED_DATE}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[4]}
                                onChange={(event) => handleOnChange(event, 4)}
                                value={POSTED_DATE_VALUES[0]}
                            />{' '}
                            {POSTED_DATE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[5]}
                                onChange={(event) => handleOnChange(event, 5)}
                                value={POSTED_DATE_VALUES[1]}
                            />{' '}
                            {POSTED_DATE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[6]}
                                onChange={(event) => handleOnChange(event, 6)}
                                value={POSTED_DATE_VALUES[2]}
                            />{' '}
                            {POSTED_DATE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[7]}
                                onChange={(event) => handleOnChange(event, 7)}
                                value={POSTED_DATE_VALUES[3]}
                            />{' '}
                            {POSTED_DATE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl>
                            <Typography variant="body1" color="betaHigh.main">
                                {GREEN_COMMUTE}
                            </Typography>

                            <Typography variant="body2" color="betaMedium.main">
                                <Radio
                                    checked={selectedValue === 'yes'}
                                    onChange={(event) => handleChange(event)}
                                    value="yes"
                                    name="radio-buttons"
                                    sx={{
                                        color: 'beta400.main',
                                        '&.Mui-checked': {
                                            color: 'alpha400.main',
                                        },
                                    }}
                                />
                                {GREEN_COMMUTE_VALUES[0]}
                            </Typography>
                            <Typography variant="body2" color="betaMedium.main">
                                <Radio
                                    checked={selectedValue === 'no'}
                                    onChange={(event) => handleChange(event)}
                                    value="no"
                                    name="radio-buttons"
                                    sx={{
                                        color: 'beta400.main',
                                        '&.Mui-checked': {
                                            color: 'alpha400.main',
                                        },
                                    }}
                                />
                                {GREEN_COMMUTE_VALUES[1]}
                            </Typography>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh.main">
                            {JOB_DISTANCE}
                        </Typography>

                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[8]}
                                onChange={(event) => handleOnChange(event, 8)}
                                value={JOB_DISTANCE_VALUES[0]}
                            />{' '}
                            {JOB_DISTANCE_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[9]}
                                onChange={(event) => handleOnChange(event, 9)}
                                value={JOB_DISTANCE_VALUES[1]}
                            />{' '}
                            {JOB_DISTANCE_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[10]}
                                onChange={(event) => handleOnChange(event, 10)}
                                value={JOB_DISTANCE_VALUES[2]}
                            />{' '}
                            {JOB_DISTANCE_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[11]}
                                onChange={(event) => handleOnChange(event, 11)}
                                value={JOB_DISTANCE_VALUES[3]}
                            />{' '}
                            {JOB_DISTANCE_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh.main">
                            {EXP_LEVEL}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[12]}
                                onChange={(event) => handleOnChange(event, 12)}
                                value={EXP_LEVEL_VALUES[0]}
                            />{' '}
                            {EXP_LEVEL_VALUES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[13]}
                                onChange={(event) => handleOnChange(event, 13)}
                                value={EXP_LEVEL_VALUES[1]}
                            />{' '}
                            {EXP_LEVEL_VALUES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[14]}
                                onChange={(event) => handleOnChange(event, 14)}
                                value={EXP_LEVEL_VALUES[2]}
                            />{' '}
                            {EXP_LEVEL_VALUES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[15]}
                                onChange={(event) => handleOnChange(event, 15)}
                                value={EXP_LEVEL_VALUES[3]}
                            />{' '}
                            {EXP_LEVEL_VALUES[3]}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="betaHigh.main">
                            {TRANSPORT}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[16]}
                                onChange={(event) => handleOnChange(event, 16)}
                                value={TRANSPORT_MODES[0]}
                            />{' '}
                            {TRANSPORT_MODES[0]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[17]}
                                onChange={(event) => handleOnChange(event, 17)}
                                value={TRANSPORT_MODES[1]}
                            />{' '}
                            {TRANSPORT_MODES[1]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[18]}
                                onChange={(event) => handleOnChange(event, 18)}
                                value={TRANSPORT_MODES[2]}
                            />{' '}
                            {TRANSPORT_MODES[2]}
                        </Typography>
                        <Typography variant="body2" color="betaMedium.main">
                            <Checkbox
                                sx={{
                                    color: 'beta400.main',
                                    '&.Mui-checked': {
                                        color: 'alpha400.main',
                                    },
                                }}
                                checked={checkedState[19]}
                                onChange={(event) => handleOnChange(event, 19)}
                                value={TRANSPORT_MODES[3]}
                            />{' '}
                            {TRANSPORT_MODES[3]}
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        justifyContent="flex-end"
                        sx={{ marginTop: '39px' }}
                    >
                        <Button1
                            TextColor="alpha300.main"
                            variant="caption1"
                            buttonVariant="text"
                            buttonColor="alpha300"
                            styles={{ borderRadius: '8px' }}
                            onClick={clearAll}
                        >
                            {CLEAR_ALL}
                        </Button1>
                        <Button1
                            TextColor="gammaWhite.main"
                            variant="caption1"
                            buttonVariant="contained"
                            buttonColor="alpha400"
                            styles={{ borderRadius: '8px' }}
                            onClick={apply}
                        >
                            {APPLY}
                        </Button1>
                    </Grid>
                </Grid>
            </Modal>
            <Box sx={{ display: 'flex' }}>
                {allCheckedValue &&
                    allCheckedValue.map((d: any) => (
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
                                for (
                                    let i = 0;
                                    i < allCheckedValue.length;
                                    i++
                                ) {
                                    if (allCheckedValue[i] != d) {
                                        Filterdata.push(allCheckedValue[i])
                                    }
                                }
                                setCheckedState(Filterdata)
                                setAllCheckedValue(Filterdata)
                            }}
                        ></Chips>
                    ))}
                {allCheckedValue.length != 0 && (
                    <Button1
                        variant="body1"
                        TextColor={'alpha300.main'}
                        buttonVariant={'text'}
                        buttonColor={'alpha300'}
                        styles={null}
                        onClick={clearAll}
                    >
                        {CLEAR_ALL}
                    </Button1>
                )}
            </Box>
        </>
    )
}

export default Filter
