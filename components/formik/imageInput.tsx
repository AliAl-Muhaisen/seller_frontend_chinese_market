import * as React from "react";
// import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

const ImageInput = (props: any) => {
  const [image, setImage] = useState<string | null>(null);

  const handleOnChange = (event: any) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setImage(onLoadEvent.target.result);
      props.setValue(onLoadEvent.target.result);
      // setUploadData(undefined);
    };
    if (event.target.files[0] != null || event.target.files[0] != undefined) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={12}
          px={0.5}
          my={0.5}
          justifyContent={"space-around"}
          display={"flex"}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                component="label"
                aria-label="upload picture"
                color="purple"
                sx={{
                  borderBottom: "1px solid",
                  borderLeft: "1px solid",
                  borderColor: "secondary",
                }}
              >
                <input
                  id={"image"}
                  key={"image"}
                  hidden
                  accept="image/*"
                  type="file"
                  name={props.name}
                  //   value={props.value}
                  onChange={handleOnChange}
                />
                <PhotoCamera sx={{ fontSize: 40 }} />
              </IconButton>
            }
          >
            <Avatar
              alt="profile image"
              src={image ? image : "/static/images/avatar2.png"}
              sx={{
                width: 150,
                height: 150,
                border: "1px solid",
                borderColor: props.touched && props.error! ? "red" : "#a39b8b",
              }}
            />
          </Badge>
        </Grid>
        <Grid
          item
          xs={12}
          px={0.5}
          mb={0.5}
          mt={1}
          justifyContent={"space-around"}
          display={"flex"}
        >
          <Typography variant="body2" color="error" display="flex">
            {props.touched && props.error!}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageInput;
