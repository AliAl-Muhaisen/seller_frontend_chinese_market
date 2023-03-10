import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import countries, { flag } from "@data/countries";
import { CountryType } from "types/types";
import Image from "next/image";

const FirstNameInput = (props: any) => {
  return (
    <TextField
      disabled={props.disabled}
      fullWidth
      required
      id="firstName"
      key="firstName"
      type="text"
      name={props.name}
      label="First Name"
      variant="standard"
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
      helperText={props.touched && props.error}
    />
  );
};

const LastNameInput = (props: any) => {
  return (
    <TextField
      fullWidth
      required
      id="lastName"
      key={"lastName"}
      type="text"
      name={props.name}
      label="Last Name"
      variant="standard"
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
      helperText={props.touched && props.error}
    />
  );
};

const EmailInput = (props: any) => {
  return (
    <TextField
      onClick={() => props.setTouched(true)}
      fullWidth
      required
      key={"email"}
      id={"email"}
      type={"email"}
      name={props.name}
      label={"Email"}
      variant={"filled"}
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
      helperText={props.touched && props.error}
    />
  );
};

const PasswordInput = (props: any) => {
  return (
    <TextField
      onClick={() => props.setTouched(true)}
      fullWidth
      required
      key={"password"}
      id={"password"}
      type={"password"}
      name={props.name}
      label={"Password"}
      variant={"filled"}
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
      helperText={props.touched && props.error}
    />
  );
};

const CountryInput = (props: any) => {
  // console.log("CountryInput", props);

  return (
    <Autocomplete
      key={"country"}
      id={"country"}
      options={countries}
      autoHighlight
      // isOptionEqualToValue={(option, value) => {
      //   console.log("option", option);
      //   console.log("value", value);

      //   return false;
      // }}
      onChange={(event: any, newValue: CountryType | any | null) => {
        props.setValue(newValue?.code || null);

        if (newValue?.code != undefined) {
          props.setTouched(false);
        } else {
          props.setTouched(true);
        }
      }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Box mr={1}>
            <Image
              width={20}
              height={15}
              src={flag(option.code)}
              alt={option.label + " flag"}
            />
          </Box>
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          onClick={() => props.setTouched(true)}
          error={props.touched && (props.error ? true : false)}
          helperText={props.touched && props.error!}
          value={props.value}
          onChange={props.onChange!}
          name={props.name}
          {...params}
          label="Choose a Country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          variant={"standard"}
        />
      )}
    />
  );
};

const PhoneNumberInput = (props: any) => {
  // console.log("phone", props);
  return (
    <TextField
      fullWidth
      required
      // typeof="number"
      key={"phoneNumber"}
      id={"phoneNumber"}
      type={"text"}
      name={props.name}
      label={"Phone Number"}
      variant={"standard"}
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur!}
      helperText={props.touched && props.error}
    />
  );
};

export {
  EmailInput,
  PasswordInput,
  FirstNameInput,
  LastNameInput,
  CountryInput,
  PhoneNumberInput,
};
