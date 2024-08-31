import React from 'react';
import Box from '@mui/material/Box';

const BoxExample: React.FC = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
      }}
    >
      Boxコンポーネント
    </Box>
  );
};

export default BoxExample;

import { Button, Container, CssBaseline, Grid, Paper, Stack, Typography } from '@mui/material'
//import './App.css'


function App() {

  return (
    <>
        <CssBaseline />

        <Container maxWidth="lg">
          <h1>メインコンテンツ</h1>
          <p>ここにコンテンツが入ります。</p>
        </Container>

        <Container maxWidth="lg" sx={{ padding: 2}}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">ボタン1</Button>
            <Button variant="contained">ボタン2</Button>
            <Button variant="contained">ボタン3</Button>
          </Stack>
        </Container>

        

      
    </>
  )
}

export default App
