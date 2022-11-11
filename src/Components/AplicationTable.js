import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'price', headerName: 'Price', type: "number", width: 100 },
  { field: 'cost', headerName: 'Cost', type: 'number', width: 100 },
  { field: 'units', headerName: 'Units', type: 'number', width: 100 },  
  { field: 'description', headerName: 'Description', width: 400, sortable: false,}  
];

const rows = [
  { id: 1, name: 'Product 1', price: 5, cost: 2, units: 10, description: 'Test Description...' },
  { id: 2, name: 'Product 2', price: 6, cost: 3, units: 10, description: 'Test Description...' },
  { id: 3, name: 'Product 3', price: 10, cost: 5, units: 10, description: 'Test Description...' },
  { id: 4, name: 'Product 4', price: 20, cost: 5, units: 10, description: 'Test Description...' },
  { id: 5, name: 'Product 5', price: 4.5, cost: 4, units: 10, description: 'Test Description...' },
  { id: 6, name: 'Product 6', price: 1, cost: 0.5, units: 10, description: 'Test Description...' },
  { id: 7, name: 'Product 7', price: 5, cost: 2.5, units: 10, description: 'Test Description...' },
  { id: 8, name: 'Product 8', price: 200, cost: 100, units: 10, description: 'Test Description...' },
  { id: 9, name: 'Product 9', price: 5.6, cost: 2, units: 10, description: 'Test Description...' },
]
export default function DataTable() {
  return (
    <div style={{ height: 600, width: '100%', marginTop: 10}}>
    
      <DataGrid         
        rows={rows}
        columns={columns}
        pcostSize={10}
        rowsPerPcostOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}