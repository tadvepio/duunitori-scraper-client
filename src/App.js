import React, {useState} from 'react';
import axios from 'axios';
import { Container, Button, Navbar, Nav, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] =useState(false);

  const getInfo = () => {
    setLoading(true);
      axios.get('https://duunitori-scraper.herokuapp.com/developer')
      .then(res=>{
        setData(res.data);
        console.log("Done")
        setLoading(false);
      })
      setLoading(false);
    }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Duunitori scraper for developers</Navbar.Brand>
        </Container>
      </Navbar>
        <main>
          <Container className="justify-content-center">
        {loading ? <div>Loading</div> :
        <div className="d-flex justify-content-center me-auto">
        <Button className="p2" onClick={getInfo}>Get stuff</Button></div>}
        <Table className='striped bordered hover'><tr><th>Role</th><th>Company</th></tr>
        <tbody>
        {data ?  data.results.map(item => <tr><td>{item.Role}</td><td>{item.Company}</td> </tr>):<div>Meh</div> }
        </tbody>
        </Table>
        </Container>
      </main>
    </div>
  );
}

export default App;
