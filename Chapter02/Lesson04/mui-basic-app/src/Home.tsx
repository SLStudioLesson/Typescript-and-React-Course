// Home.tsx
import React from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        MUIを使った基本的なページ
      </Typography>
      
      <TextField
        label="名前"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      
      <Button variant="contained" color="primary" fullWidth>
        送信
      </Button>

      <Card variant="outlined" style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            カードタイトル
          </Typography>
          <Typography variant="body2">
            これはMUIのカードコンポーネントの例です。
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;