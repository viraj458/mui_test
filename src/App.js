import React from 'react';
import { Button, styled, Typography } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';


function App() {

  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.primary.light
  }))

  return (
    <div>
      <Button variant="text" >Text</Button>
      <Button variant="contained" color='secondary' startIcon={<AccessibilityNewIcon/>}>Contained</Button>
      <Button variant="outlined" disableElevation>Outlined</Button>
      <Typography variant="h1">
       h1. Heading
      </Typography>
      <BlueButton>Hello</BlueButton>

    </div>
  );
}

export default App;
