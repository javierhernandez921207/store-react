import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

//Selector redux
import { useSelector } from 'react-redux';

export default function DataTable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', type: "number", width: 100 },
    { field: 'cost', headerName: 'Cost', type: 'number', width: 100 },
    { field: 'units', headerName: 'Units', type: 'number', width: 100 },
    { field: 'description', headerName: 'Description', width: 400, sortable: false, }
  ];
  
  const productState = useSelector(state => state.products)
  console.log(productState);
  return (
    <div style={{ height: 600, width: '100%', marginTop: 10 }}>

      <DataGrid
        rows={productState}
        columns={columns}
        pcostSize={10}
        rowsPerPcostOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}