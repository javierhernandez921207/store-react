import logo from './logo.svg';
import './App.css';
import AplicationBar from './Components/AplicationBar';
import AplicationModal from './Components/AplicationModal';
import AplicationTable from './Components/AplicationTable';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const productState = useSelector(state => state.products)
  console.log(productState);
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
  const [products, setProducts] = useState(rows);

  const addProduct = (product) => {
    setProducts([
      ...products,
      product
    ])
  }

  return (
    <div className="App">
      <AplicationBar></AplicationBar>
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <AplicationModal addProduct={addProduct} ></AplicationModal>
        </Grid>
        <AplicationTable products={products}></AplicationTable>
      </Container>
    </div>
  );
}

export default App;
