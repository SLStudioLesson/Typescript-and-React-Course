import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Drawer, List, ListItem, 
  ListItemIcon, ListItemText, CssBaseline, Box, 
  Divider, ListItemButton, 
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Card,
  CardContent,
  Button,

} from '@mui/material';
import { Assignment } from '@mui/icons-material';


const drawerWidth = 240;

const Dashboard = () => (
  <>
    <h1>ダッシュボード</h1>
    <Typography>
      ダッシュボードのコンテンツです。ここには概要情報が表示されます。
    </Typography>
  </>

);

const Exam = () => {

  return (
    <>
      <h1>試験</h1>
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
          <Typography variant='h6'>実装1. データ取得と表示</Typography>
            <Typography>
              以下のテーブルはブログの投稿タイトルと著者IDをJSXに直接記述しているものである。<br/>
              次のURLからHTTP通信を行い、取得したデータのタイトルと著者IDを表示せよ。
              <code>https://jsonplaceholder.typicode.com/posts</code><br/>
          </Typography>
        </CardContent>
      </Card>
      
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
        <Typography variant='h6'>実装2. 詳細ページの実装</Typography>
          <Typography>
            詳細ページへ投稿IDを渡し、詳細画面の実装指示を実現せよ<br/>
          </Typography>
        </CardContent>
      </Card>
      

      <Typography variant='h6'>投稿一覧</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>詳細</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1">
              <TableCell>ブログタイトル１</TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <Button component={Link} to={'/posts/'} variant="contained" color="primary">
                  詳細
                </Button>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>ブログタイトル２</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <Button component={Link} to={'/posts/'} variant="contained" color="primary">
                  詳細
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const PostDetail = () => {

  return (
    <Box>
      <h1>試験</h1>
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
        <Typography variant='h6'>実装3. 詳細ページの実装</Typography>
        <Typography>
          次のURLからHTTP通信を行い、取得したデータのタイトルと本文を表示せよ。
          <code>https://jsonplaceholder.typicode.com/post/1</code><br/>
          末尾の「１」は実際には前画面から渡された投稿IDを指定すること。
        </Typography>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        投稿詳細
      </Typography>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          label="タイトル"
          value="ここにタイトルが入る"
          name="name"
          variant="outlined"
        />
        <TextField
          label="本文"
          name="username"
          value="ここに本文が入る"
          variant="outlined"
          multiline
          rows={4} // 初期行数を指定して高さを調整
        />
      </Box>

    </Box>
  );
};


function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Lv2 試験
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/exam">
                <ListItemIcon><Assignment /></ListItemIcon>
                <ListItemText primary="試験" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/posts" element={<PostDetail />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App
