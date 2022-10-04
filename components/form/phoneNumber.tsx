import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  TextField,
} from "@mui/material";
import countries, { flag, countriesLabel } from "@data/countries";
import Image from "next/image";
import { ChangeEventHandler, ReactNode, SyntheticEvent, useState } from "react";
import { CountryType, CountryComponent } from "types/types";
import { useField, FieldAttributes } from "formik";
const PhoneNumber: React.FC<FieldAttributes<{}>> = ( props ) => {
  // props: { value: CountryType; onChange: any }
  const [field, meta] = useField<{}>('country');
  // console.log("field", field);
  // console.log("meta", meta.error);
  return (
    <>
      <Autocomplete
        autoHighlight
        id="country"
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a Country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
            variant={"standard"}
          />
        )}
        options={countriesLabel}
      />
    </>
  );
};

export default PhoneNumber;

{
  /* <Autocomplete
id="phoneNumber"
value={p}
onChange={(event: any, newValue: string) => {
  sp(newValue);
 

  console.log("newValue", newValue);
  console.log("p------------------", p);
}}
autoHighlight
options={countries}
getOptionLabel={(option) => option.label}
loading
loadingText={<div>Loading</div>}
// renderOption={(props, option,index) => (
//   <Box
//     component="li"
//     sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
//     {...props}
//   >
//     <Box pr={1}>
//       <Image
//         alt={`${option.code} flag`}
//         src={flag(option.code)}
//         width={20}
//         height={15}
//       />
//     </Box>
//     {option.label} ({option.code}) +{option.phone}
//   </Box>
// )}
renderInput={(params) => {
  {
    console.log("params", params.inputProps.value);
  }
  return (
    <TextField
      variant="standard"
      label="Choose a country"
      {...params}
      value={params.inputProps.value}
      inputProps={{
        ...params.inputProps,
        autoComplete: "new-password", // disable autocomplete and autofill
      }}
    />
  );
}}s
/> */
}
{
  /* <Autocomplete
id="country-select-demo"
sx={{ width: 300 }}
options={countries}
autoHighlight
getOptionLabel={(option) => option.label}
renderOption={(props, option) => (
  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
    <img
      loading="lazy"
      width="20"
      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
      alt=""
    />
    {option.label} ({option.code}) +{option.phone}
  </Box>
)}
renderInput={(params) => (
  <TextField
    {...params}
    label="Choose a country"
    inputProps={{
      ...params.inputProps,
      autoComplete: 'new-password', // disable autocomplete and autofill
    }}
  />
)}
/> */
}
