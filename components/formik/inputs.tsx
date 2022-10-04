import { TextField, Autocomplete, Box } from "@mui/material";
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
      name="firstName"
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
      name="lastName"
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
      fullWidth
      required
      key={"email"}
      id={"email"}
      type={"email"}
      name={"email"}
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
      fullWidth
      required
      key={"password"}
      id={"password"}
      type={"password"}
      name={"password"}
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
  console.log("CountryInput", props);

  return (
    <Autocomplete
      key={"country"}
      id={"country"}
      options={countries}
      autoHighlight
      onChange={(event: any, newValue: CountryType | any | null) => {
        props.setValue(newValue?.code || null);
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
          error={props.touched && (props.error ? true : false)}
          helperText={props.touched && props.error!}
          value={props.value}
          onChange={props.onChange!}
          name={"country"}
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
  return (
    <TextField
      fullWidth
      required
      typeof="number"
      key={"phoneNumber"}
      id={"phoneNumber"}
      type={"phoneNumber"}
      name={"phoneNumber"}
      label={"Phone Number"}
      variant={"standard"}
      value={props.value}
      error={props.touched && (props.error ? true : false)}
      onChange={props.onChange!}
      onBlur={props.onBlur}
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
