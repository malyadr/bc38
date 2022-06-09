import { TextField, Autocomplete, Stack, Button, SvgIcon, Box, Divider } from "@mui/material";
import React, { useState } from "react";
import Work from '../../../../public/assets/icons/work.svg'
import Location from '../../../../public/assets/icons/location.svg';
import SearchIcon from '../../../../public/assets/icons/search.svg';
import Icon from "../../atoms/icon";

const options = [
  {skill:"ux", location:"Hyderabad"},
 {skill:"ui", location:"Hyderabad"},
  {skill:"frontend", location:"Mumbai"},
  {skill:"ux", location:"Mumbai"},
  {skill:"backend", location:"Mumbai"},

]
interface OptionType {
  skill:string;
  location:string;
}
const skillsList=["ux", "ui", "backend", "frontend"]

const locationList=["Hyderabad", "Mumbai"]

const SearchBar = () => {
  const [skills, setSkills] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [filteredList, setOptions] = useState<OptionType[]>(options);

  const handleClick = () => {
    let a = options;
    if (skills !== "") {
       a = a.filter(a => a.skill === skills);
    }
    if (location !== "") {
      a = a.filter(a => a.location === location);
    }
    setOptions(a);
  }
  return (
    <>
        <Stack direction="row" sx={{ bgcolor:'gammaWhite.main', borderRadius:'32px', width:'843px', height:'56px', display:'flex', alignItems:'center'}}>
          <Icon src="work" sx={{pl:'28px'}}/>
        <Autocomplete
          autoHighlight
          autoSelect
          filterSelectedOptions
          freeSolo
          clearOnBlur
          onChange={(event, value) => setSkills(value ? value : "")}
          id="combo-box-demo2"
          options={skillsList}
          sx={{ width: 408 }}
          renderInput={(params) => <TextField {...params} placeholder="Search Skills" sx={{'.MuiOutlinedInput-root': {'& fieldset': {border:'none'}, '&:hover fieldset': {border:'none'}}}} />}
          value={skills}
        />
        <Divider orientation="vertical" variant="middle" sx={{height:'80%'}}/>
        <Icon src="location1" sx={{pl:'28px', stroke:'grey', fill:'transparent', alignSelf:'center'}}/>
         <Autocomplete
        autoHighlight
        autoSelect
        filterSelectedOptions
          onChange={(event, value) => setLocation(value ? value : "")}
          freeSolo
          id="combo-box-demo1"
          options={locationList}
          sx={{ width: 408 }}
          
          renderInput={(params) => 
          <TextField {...params} id="standard-search" placeholder="Location" sx={{'.MuiOutlinedInput-root': {'& fieldset': {border:'none'}, '&:hover fieldset': {border:'none'}}}} />}
          value={location} 
        />
        <Button variant="contained" color="alpha300" onClick={() => handleClick()}  sx={{ minWidth:'44px', maxWidth:'44px', height:'44px', borderRadius:'50%', position:'relative', right:'6px'}}>
          <SvgIcon component={SearchIcon} sx={{fill:'transparent'}}/>
        </Button>
        </Stack>
         </>
  );
};

export default SearchBar;