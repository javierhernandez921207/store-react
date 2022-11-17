import './App.css';
import AplicationBar2 from './Components/AplicationBar2';
import Container from '@mui/material/Container';
import ProductTable from "./Components/Product/ProductTable";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        <ProductTable></ProductTable>
      </Container>
    </div>
  );
}

export default App;
