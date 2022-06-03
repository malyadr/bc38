import { TextField, Autocomplete, Stack, Button, SvgIcon } from "@mui/material";
import React, { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import Work from '../../../../public/assets/icons/work.svg'
import Location from '../../../../public/assets/icons/location.svg';

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
        <Stack direction="row" sx={{border:'1px solid black', borderRadius:'32px', width:'843px', height:'56px', display:'flex', alignItems:'center'}}>
          <SvgIcon component={Work} />
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
        <SvgIcon component={Location} sx={{stroke:'grey', fill:'transparent'}}/>
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
        <Button  onClick={() => handleClick()} startIcon={<SearchIcon />}> </Button>
        </Stack>
        { filteredList.length !== 0 ?
          filteredList.map((e, index) => {
            return (
              <div key={`item-${index}`} style={{display:'flex', border:'1px solid black', justifyContent:'space-around'}}>
                <p>{e.skill}</p>
                <p>{e.location}</p>
                </div>
            )
          }) : <div> No Items matching search</div>
        }
    </>
  );
};

export default SearchBar;