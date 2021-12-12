import React from "react";
import { Link } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import pageLogo from "../../shared/logo/png-dark.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Login() {
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
            <TextField id="email" label="Email" variant="outlined" />

            <TextField id="Password" label="Password" variant="outlined" type="password" />
          </div>
        </Item>

        <Item>
          <div>
            <Button variant="contained">Login</Button>
          </div>
        </Item>

        <Item>
          <div>
            <h2>if you don't have an account,</h2>

            <h2>register here</h2>
          </div>
        </Item>
      </Stack>
    </Container>
  );
}

export default Login;
