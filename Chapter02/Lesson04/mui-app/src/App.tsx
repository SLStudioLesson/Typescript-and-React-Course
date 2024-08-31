import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
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
  CircularProgress,
  Button,
  TextField
} from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';

const drawerWidth = 240;

const Dashboard = () => (
  <Typography>
    ダッシュボードのコンテンツです。ここには概要情報が表示されます。
  </Typography>
);

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {
        setLoading(false);
      })
    
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>ユーザー名</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>詳細</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button component={Link} to={'/users/'+user.id} variant="contained" color="primary">
                    詳細
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // //const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(response=>response.json())
      .then(data=>{
        setUser(data);
      })
      .catch((error) => {
        console.log("ユーザー取得でエラーが発生しました: ", error);
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [id]); // idが依存関係になるので追加

  const handleChangeName = (e) => {
    setUser((prevUser) => {
      return {...prevUser, name: e.target.value};
    });
  }


  // const handleSave = () => {
  //   // 保存処理を実装（ここではコンソールに出力するだけ）
  //   console.log('User data saved:', user);
  //   //navigate('/'); // 保存後にユーザー一覧に戻る
  // };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      {user && (
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
          <TextField label="名前" name="name" value={user.name} onChange={handleChangeName} variant="outlined" />
          <TextField label="ユーザー名" name="username" value={user.username} variant="outlined" />
          <TextField label="メール" name="email" value={user.email} variant="outlined" />
          <Button variant="contained" color="primary">保存</Button>
        </Box>
      )}
    </Box>
  );
};

const Settings = () => {

  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'SLスタジオ',
        username: 'SL',
        email: 'sls@slstudio.jp',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => error)
  }

  return (
    <>
      <Typography>テスト</Typography>
      <Button onClick={handleClick}>POSTのテスト</Button>
    </>
  );
}

const Reports = () => (
  <Typography>
    レポートのコンテンツです。様々なレポートを確認できます。
  </Typography>
);

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              管理画面
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
              <ListItemButton component={Link} to="/">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="ダッシュボード" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/user-management">
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="ユーザー管理" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/settings">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="設定" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/reports">
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="レポート" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App
