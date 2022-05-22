import { useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField
} from '@mui/material';
import { styled } from '@mui/system';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useMoralis, useMoralisFile } from 'react-moralis';
import { toast, ToastContainer } from 'react-toastify';


const states = [
  {
    value: 'individual',
    label: 'Individual'
  },
  {
    value: 'componey',
    label: 'Componey'
  },
  {
    value: 'both',
    label: 'Both'
  }
];

const Input = styled('input')({
  display: 'none',
});


export const ProfileDetails = (props) => {
  const { setUserData, user, Moralis } = useMoralis();
  const { saveFile, moralisFile } = useMoralisFile()
  const [avatar, setAvatar] = useState('');

  const [values, setValues] = useState({
    username: user && user.attributes.username,
    email: user && user.attributes.email,
    bio: user && user.attributes.bio,
    skills: user && user.attributes.skills,
    purpose: user && user.attributes.purpose
  });

  async function onChangeAvatar(e) {
    const file = e.target.files[0]; 
    let fileIpfs = await saveFile("trustified", file, { saveIPFS: true }); 
    user.set("Avatar", fileIpfs);
    await user.save();
    const moralisFile = new Moralis.File('Avatar', file);
    setAvatar(moralisFile);
    // setAvatar(user.attributes.Avatar._url);

  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => { 

    if (user) {
      await setUserData({
        username: values.username,
        Avatar: avatar,
        email: values.email,
        bio: values.bio,
        skills: values.skills,
        purpose: values.purpose
      })
    }
    toast.success("Successfully update the profile!"); 
  }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <ToastContainer />
      <Stack direction="row" spacing={3} style={{ justifyContent: 'center', display: 'flex' }} >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" onChange={onChangeAvatar} />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          }
        >
          <Avatar sx={{ width: 100, height: 100 }} src={avatar ? avatar : "/images/log.png"} />
        </Badge>

      </Stack>
      <Card   >
        <CardContent>

          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="@username"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                onChange={handleChange}
                type="text"
                value={values.bio}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Skills"
                name="skills"
                onChange={handleChange}
                required
                type="text"
                value={values.skills}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Purpose of "
                name="purpose"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.purpose}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
