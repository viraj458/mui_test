import { Button, Typography } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import React from 'react';
import { margin } from '@mui/system';
import styled from '@emotion/styled';

function App() {

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "black",
    margin: 5,
    "&:hover":{
      backgroundColor: "lightblue"
    },
    "&:disabled":{
      backgroundColor:"grey",
      color:"white"
    }
  })

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='secondary' startIcon={<AccessibilityNewIcon/>}>Contained</Button>
      <Button variant="outlined" disableElevation>Outlined</Button>
      <Typography variant="h1">
      h1. Heading
      </Typography>
      <BlueButton>the</BlueButton>
      <BlueButton disabled>the</BlueButton>

    </div>
  );
}

export default App;
