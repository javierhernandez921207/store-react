import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//Selector redux
import { useSelector } from 'react-redux';

export default function DataTable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', type: "number", width: 100 },
    { field: 'cost', headerName: 'Cost', type: 'number', width: 100 },
    { field: 'units', headerName: 'Units', type: 'number', width: 100 },    
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: ({id}) => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem color='error' icon={<DeleteIcon />} label="Delete" />,
      ],
    },
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
        disableSelectionOnClick
      />
    </div>
  );
}