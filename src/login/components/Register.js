import React from 'react';
import pageLogo from '../../shared/logo/png-dark.png'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
  color: theme.palette.text.secondary,
}));

function Register (){
   return ( 
    <Container maxWidth="sm">
    <Stack spacing={2}>
      <Item>
        <div className="image">
          <img src={pageLogo} alt="e-kantin :)" />
        </div>
      </Item>

      <Item>
        <div>
          <TextField id="email" label="Email" variant="outlined"/>
        </div>
      </Item>

      <Item>
        <div>
        <Box>
          <TextField id="Password" label="Password" variant="outlined" type="password" />
          <TextField id="conPassword" label="Conform Password" variant="outlined" type="password" />
        </Box>  
        </div>
      </Item>

      <Item>
        <div>
          <Button variant="contained">Register</Button>
        </div>
      </Item>

      <Item>
        <div>
          <h2>if you have an account,</h2>

          <h2>login here</h2>
        </div>
      </Item>
    </Stack>
  </Container>
   );
}

export default Register;


