// DataTable.tsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: '名前', width: 150 },
  { field: 'age', headerName: '年齢', type: 'number', width: 110 },
];

const rows = [
  { id: 1, name: '田中', age: 35 },
  { id: 2, name: '佐藤', age: 42 },
  { id: 3, name: '鈴木', age: 29 },
];

const DataTable: React.FC = () => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default DataTable;