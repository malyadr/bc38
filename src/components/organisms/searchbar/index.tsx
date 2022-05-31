import { Grid, Box, TextField, SvgIcon } from "@mui/material";
import {default as work} from "../../../../public/assets/icons/work.svg";
import {default as locationval} from "../../../../public/assets/icons/map-pin.svg";
import {default as search} from "../../../../public/assets/icons/search.svg";
import Icon from "../../atoms/icon";
import theme from "../../../theme/customTheme";
import React from "react";

export default function SearchBar() {
    return (
        <div className="jobsearchcontainer">
            <Grid
                container
                sx={{
                    maxWidth: "843px",
                    zIndex: 2,
                    borderRadius: "32px",
                    backgroundColor: "#ffff",
                    padding: "0px 28px",
                    height: "56px",
                    alignItems: "center"
                }}
                data-testid="jobsearch"
            >
                <TextField
                    
                    variant="standard"
                    inputProps={{
                        "data-testid": "skills"
                    }}
                    InputProps={{
                        startAdornment: (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "4px",
                                    marginRight: "20px"
                                }}
                            >
                                <SvgIcon
                                   component={work}
                                   fill="yellow"
                                   stroke="white"
                                   sx={{ fill: 'transparent' }}
                />
                            </Box>
                        ),
                        disableUnderline: true,
                        sx: {
                            fontFamily: "Montserrat",
                            color: `${theme.palette.betaHigh.main}`,
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "22px"
                        }
                    }}
                    sx={{
                        width: "45%",
                        borderRight: `1px solid ${theme.palette.beta400.main}`
                    }}
                    placeholder="Enter your Skills"
                ></TextField>

                <TextField
                
                    variant="standard"
                    inputProps={{
                        "data-testid": "location"
                    }}
                    InputProps={{
                        startAdornment: (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "4px",
                                    marginRight: "20px"
                                }}
                            >
                                <SvgIcon
                                     component={locationval}
                                     fill="yellow"
                                     stroke="white"
                                     sx={{ fill: 'transparent' }}
                />
                            </Box>
                        ),
                        disableUnderline: true,
                        sx: {
                            fontFamily: "Montserrat",
                            color: `${theme.palette.betaHigh.main}`,
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "22px"
                        }
                    }}
                    sx={{ marginLeft: "27px", width: "45.8%" }}
                    placeholder={"Enter your location"}
                ></TextField>

                <Box
                    sx={{
                        height: "44px",
                        width: "44px",
                        backgroundColor: `${theme.palette.alpha400.main}`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        left: "3%"
                    }}
                >
                   <SvgIcon
                    component={search}
                    fill="yellow"
                    stroke="white"
                    sx={{ fill: 'transparent' }}
                />
                </Box>
            </Grid>
        </div>
    );
}
