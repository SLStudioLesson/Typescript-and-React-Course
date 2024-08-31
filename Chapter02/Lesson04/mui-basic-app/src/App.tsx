import { Button, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";

function App() {
  const items = [
    { id: 1, name: 'タスク1', description: 'タスク1の詳細説明' },
    { id: 2, name: 'タスク2', description: 'タスク2の詳細説明' },
    { id: 3, name: 'タスク3', description: 'タスク3の詳細説明' },
  ];

  return (
    <>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">{item.name}</Typography>}
                secondary={item.description}
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="primary">
                  編集
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}

export default App
