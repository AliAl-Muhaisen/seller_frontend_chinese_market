import {
  Typography,
  Button,
  IconButton,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Box,
  MenuItem,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Switch,
  Autocomplete,
  Rating,
  Grid,
  Paper,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Drawer,
  Toolbar,
  Menu,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Breadcrumbs,
  Avatar,
  AvatarGroup,
  Badge,
  Link as LinkMui,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Chip,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Snackbar,
  Skeleton,
  styled,
} from "@mui/material";
// import theme from "@/lib/mui/theme/theme";
import { NavigateNextOutlined } from "@mui/icons-material";
import Head from "next/head";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import FormatUnderlineIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  CatchingPokemon,
  ExpandMore,
  ContentCopy,
  ContentPaste,
  Mail,
  Share,
  Delete,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Test: NextPage = () => {
  const session = useSession();
  // session.data={jwt:"sda"}
  // console.log("session", session.data);
  // console.log("loading", session.status);
  const [formats, setFormats] = useState<string | null>(null);
  const [stval, setStval] = useState("");
  const [radio, setRadio] = useState("");
  const [checked, setChecked] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [rate, setRate] = useState<number | null>(null);
  const [country, setCountry] = useState<string[]>([]);
  console.log(formats);
  console.log("country", country);
  console.log("check", checked);
  console.log("rate", rate);

  const handleFormateChange = (
    _event: React.MouseEvent<HTMLElement>,
    updateFormats: string | null
  ) => {
    setFormats(updateFormats);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  let skills = ["10", "2", "3"];
  return (
    <>
      <Head>
        <title>Test page</title>
      </Head>
      <MyAppBar />

      <Skeleton variant="text" />
      <Skeleton variant="circular" width={50} height={50} />

      <Button
        key={"1"}
        variant="contained"
        color="warning"
        onClick={() => setSnackbar(true)}
      >
        SnackBar
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar}
        message="Form Submitted successfully!"
        autoHideDuration={4000}
        onClose={(event, reason?: string) => {
          if (reason === "clickaway") {
            return;
          }
          setSnackbar(false);
        }}
      />

      <Stack spacing={2} direction={"row"} my={3}>
        <Chip label="Chip" color="secondary" size="small" variant="filled" />
        <Chip
          label="Chip"
          color="error"
          size="medium"
          variant="outlined"
          avatar={<Avatar></Avatar>}
          // icon={<Mail />}
        />
        <Chip
          label="Chip"
          color="warning"
          size="medium"
          variant="filled"
          icon={<Mail />}
        />
        <Chip
          label="Delete"
          color="error"
          size="medium"
          variant="filled"
          icon={<Delete />}
        />
      </Stack>
      <MyTable />
      <Box
        my={1}
        sx={{
          width: "400px",
          bgcolor: " #ef5",
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="item 1" secondary="Secondary Text" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="item 2" secondary="Secondary Text" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="item 3" secondary="Secondary Text" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              about="about"
              primary="item 4"
              secondary="Secondary Text"
            />
          </ListItem>
        </List>
      </Box>

      <Box mt={3} sx={{ position: "static" }}>
        <Stack spacing={2} direction="row">
          <Badge badgeContent={100} color="primary">
            <Mail color="secondary" />
          </Badge>
          <Badge badgeContent={100} color="primary" variant="dot">
            <Mail color="success" />
          </Badge>
        </Stack>
      </Box>

      <Stack spacing={2}>
        <Stack spacing={1} direction="row">
          <AvatarGroup
            max={4}
            sx={{
              width: 480,
              height: 48,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "error.light",
              }}
            >
              Ali
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "darkred",
              }}
            >
              Jamal
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "error.dark",
              }}
            >
              Word
            </Avatar>
            <Avatar>1</Avatar>
          </AvatarGroup>
        </Stack>
      </Stack>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="300px" textAlign={"center"} role="presentation">
          Side Panel
        </Box>
      </Drawer>

      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNextOutlined />}
        itemsBeforeCollapse={3}
      >
        <LinkMui underline="hover">home</LinkMui>
        <LinkMui underline="hover">search</LinkMui>
        <LinkMui underline="hover">product</LinkMui>
        <LinkMui underline="hover">clock</LinkMui>
        <Typography>rolex</Typography>
      </Breadcrumbs>

      <Grid container justifyContent={"center"} justifyItems={"center"}>
        <Grid item xs={6}>
          <Box my={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component={"h1"}>
                  Accordion
                </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id="p1"
                    aria-controls="content"
                  >
                    <Typography>Accordion 1sfgsdfg</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati, in aspernatur delectus dolore ab voluptatibus ea
                    quos unde, quisquam autem eveniet ratione cum corporis
                    similique voluptates reiciendis laborum? Soluta, at. Velit
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Box>
          <Paper elevation={5}>
            <Grid
              container
              my={4}
              spacing={2}
              justifyContent={"center"}
              justifyItems={"end"}
            >
              <Grid item xs={12} md={6}>
                <Box bgcolor={"primary.light"} p={2}>
                  Item 1
                </Box>
              </Grid>
              <Grid item>
                <Box bgcolor={"primary.light"} p={2}>
                  Item 2
                </Box>
              </Grid>
              <Grid item>
                <Box bgcolor={"primary.light"} p={2}>
                  Item 3
                </Box>
              </Grid>
            </Grid>

            <Stack spacing={2} justifyContent={"center"}>
              <Autocomplete
                options={skills}
                renderInput={(params) => (
                  <TextField
                    variant="filled"
                    SelectProps={{
                      multiple: true,
                    }}
                    {...params}
                    label="skills"
                  />
                )}
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        <Stack spacing={4}>
          {/* defaultValue={2} defaultChecked={true} */}
          <Rating
            value={rate}
            precision={0.5}
            size={"medium"}
            // color={"error"}
            icon={<FavoriteIcon color="error" fontFamily="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontFamily="inherit" />}
            onChange={(
              _event: React.ChangeEvent<{}>,
              newValue: number | null
            ) => {
              setRate(newValue);
            }}
          />
        </Stack>
      </Box>

      <Box>
        <FormControlLabel
          label={`Dark Mode ${checked}`}
          control={<Switch checked={!!checked} onChange={handleCheck} />}
        />
      </Box>
      <Box>
        <Box>
          <FormControlLabel label="asdfg" control={<Checkbox />} />
        </Box>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>test {radio}</FormLabel>
          <RadioGroup
            name="test"
            row
            value={radio}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRadio(event.target.value);
            }}
          >
            <FormControlLabel control={<Radio />} label="0-2" value={"0-2"} />
            <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
            <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box width="250px" marginY={5}>
        <TextField
          onChange={(event) => {
            console.log("event.target.value", event.target.value);

            setCountry(
              typeof event.target.value === "string"
                ? event.target.value.split(",")
                : event.target.value
            );
          }}
          label="select country"
          select
          value={country}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </TextField>
      </Box>
      <Typography variant="h1" gutterBottom component={"h6"}>
        hiiiiiiiiii
      </Typography>
      <Typography variant="body2">hiiiiiiiiii</Typography>
      <Typography variant="body1">hiiiiiiiiii</Typography>
      <Typography variant="subtitle1">hiiiiiiiiii</Typography>
      <Typography variant="subtitle2">hiiiiiiiiii</Typography>
      <Typography>hiiiiiiiiii</Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<ScheduleSendOutlinedIcon />}
      >
        Button
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="medium"
        startIcon={<ScheduleSendOutlinedIcon />}
      >
        Button
      </Button>
      <Button
        variant="text"
        color="success"
        size="small"
        startIcon={<ScheduleSendOutlinedIcon />}
      >
        Button
      </Button>
      <IconButton color="error" title="send">
        <ScheduleSendOutlinedIcon />
      </IconButton>
      {/* 
      <Stack spacing={2} direction={"row"} boxShadow={12}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          startIcon={<ScheduleSendOutlinedIcon />}
        >
          Button
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<ScheduleSendOutlinedIcon />}
        >
          <Button
            variant="contained"
            color="success"
            size="medium"
            startIcon={<ScheduleSendOutlinedIcon />}
          ></Button>
          <Button
            variant="contained"
            color="info"
            size="medium"
            startIcon={<ScheduleSendOutlinedIcon />}
          ></Button>
          <Button
            variant="contained"
            color="error"
            size="medium"
            startIcon={<ScheduleSendOutlinedIcon />}
          ></Button>
          Button
        </Button>
        <Button
          variant="text"
          color="success"
          size="small"
          startIcon={<ScheduleSendOutlinedIcon />}
        >
          Button
        </Button>
      </Stack>
      <ButtonGroup variant="text" orientation="vertical" size="small">
        <Button
          color="info"
          size="medium"
          startIcon={<ScheduleSendOutlinedIcon />}
        ></Button>
        <Button
          color="info"
          size="medium"
          startIcon={<ScheduleSendOutlinedIcon />}
        ></Button>
        <Button
          color="info"
          size="medium"
          startIcon={<ScheduleSendOutlinedIcon />}
        ></Button>
      </ButtonGroup>
      <ToggleButtonGroup></ToggleButtonGroup> */}

      <Stack direction={"row"}>
        <ToggleButtonGroup
          size="small"
          color="secondary"
          value={formats}
          onChange={handleFormateChange}
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatUnderlineIcon></FormatUnderlineIcon>
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatUnderlineIcon />
          </ToggleButton>
          <ToggleButton value={"underline"}>
            <FormatUnderlineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack spacing={4}>
        <Stack spacing={2} direction={"row"}>
          <TextField label="name" variant="outlined" />
          <TextField
            label="password"
            type={"password"}
            variant="filled"
            error
            helperText="required"
          />
          <TextField
            label="amount"
            variant="standard"
            required
            color="secondary"
          />
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <TextField label="name" variant="outlined" />

          <TextField
            label="amount"
            variant="standard"
            required
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment color="info" position="start">
                  $
                </InputAdornment>
              ),
              color: "success",
              margin: "dense",
            }}
          />
          <TextField
            value={stval}
            onChange={(e) => setStval(e.target.value)}
            label="amount"
            variant="standard"
            required
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment color="info" position="end">
                  $
                </InputAdornment>
              ),
              color: "warning",
              margin: "dense",
            }}
            helperText={stval}
            error={!stval}
          />
        </Stack>
      </Stack>
      <SpeedDial
        ariaLabel="test"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<ContentCopy />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<ContentPaste />} tooltipTitle="Paste" />
        {/* <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" /> */}
      </SpeedDial>
    </>
  );
};
export default Test;

const MyAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handelMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // const StyledAppBar = styled(AppBar)(({ theme }) => ({
  //   // backgroundColor: theme.palette?.ali,
  //   color: theme.palette.ali,
  // }));
  return (
    <AppBar position="static" color='ali'>
      <Container color="ali">
        <Toolbar>
          <IconButton size="large">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component={"h1"} sx={{ flexGrow: 1 }}>
            Pockemon
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{ flexGrow: 1 }}>
            <Button color="inherit">Sign in</Button>
            <Button color="inherit">login</Button>
            <Button color="inherit" id="m1r" onClick={handelMenu}>
              about
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit">Sign in</Button>
            <Button color="inherit">login</Button>
            <Button color="inherit" id="m1r" onClick={handelMenu}>
              about
            </Button>
          </Stack>
          <Menu id="m1" anchorEl={anchorEl} open={open}>
            <MenuItem>test 1</MenuItem>
            <MenuItem>test 2</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const MyTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>EMail</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data: DataTableType) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.first_name}</TableCell>
              <TableCell>{data.last_name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.ip_address}</TableCell>
            </TableRow>
            // <Typography key={data.id}>{data.id}</Typography>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Bibby",
    last_name: "Batrim",
    email: "bbatrim0@webnode.com",
    gender: "Female",
    ip_address: "58.54.255.128",
  },
  {
    id: 2,
    first_name: "Barthel",
    last_name: "Wakeman",
    email: "bwakeman1@google.es",
    gender: "Male",
    ip_address: "226.5.96.27",
  },
  {
    id: 3,
    first_name: "Ardyce",
    last_name: "Shawell",
    email: "ashawell2@biglobe.ne.jp",
    gender: "Female",
    ip_address: "56.56.128.185",
  },
  {
    id: 4,
    first_name: "Cordelia",
    last_name: "Huyton",
    email: "chuyton3@storify.com",
    gender: "Non-binary",
    ip_address: "190.110.88.44",
  },
  {
    id: 5,
    first_name: "Bil",
    last_name: "Hovenden",
    email: "bhovenden4@nytimes.com",
    gender: "Male",
    ip_address: "61.184.88.37",
  },
  {
    id: 6,
    first_name: "Wiatt",
    last_name: "Garstang",
    email: "wgarstang5@spiegel.de",
    gender: "Male",
    ip_address: "35.218.54.121",
  },
  {
    id: 7,
    first_name: "Gardener",
    last_name: "Powland",
    email: "gpowland6@cafepress.com",
    gender: "Male",
    ip_address: "177.218.16.174",
  },
  {
    id: 8,
    first_name: "Janela",
    last_name: "Belden",
    email: "jbelden7@skyrock.com",
    gender: "Female",
    ip_address: "119.30.152.220",
  },
  {
    id: 9,
    first_name: "Bernetta",
    last_name: "Geane",
    email: "bgeane8@wix.com",
    gender: "Female",
    ip_address: "104.68.190.124",
  },
  {
    id: 10,
    first_name: "Reider",
    last_name: "Bastide",
    email: "rbastide9@jiathis.com",
    gender: "Male",
    ip_address: "213.231.252.84",
  },
];
interface DataTableType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
