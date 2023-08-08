import { BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'




function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        {/* <div className="navBar"> */}
        <Container>
          {/* <ul> */}
          <Nav defaultActiveKey="/" variant="tabs" fill>

            <Nav.Item>
              <Link to='/'>
                <Nav.Link href="/">
                Home
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/about'>
                <Nav.Link href="/about" eventKey="aboutPage">
                About Us
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/packages'>
                <Nav.Link href="/packages" eventKey="packagesPage">
                Our Packages
                </Nav.Link>
              </Link>
            </Nav.Item>

          </Nav>
            
          {/* </ul> */}
        </Container>
          

        {/* </div> */}

      </header>
     

      <div className='display'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages packages={packages}/>} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;





