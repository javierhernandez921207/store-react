import './App.css';
import AplicationBar from './Components/AplicationBar';
import AplicationModal from './Components/AplicationModal';
import AplicationTable from './Components/AplicationTable';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
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
          <AplicationModal ></AplicationModal>
        </Grid>
        <AplicationTable></AplicationTable>
      </Container>
    </div>
  );
}

export default App;
