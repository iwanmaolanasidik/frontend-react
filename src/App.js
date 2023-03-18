import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"
import React from "react"
import {Routes, Route, Link} from "react-router-dom"

//component or page
import Home from './pages/Home'
import IndexPost from './pages/posts/Index'
import CreatePost from './pages/posts/Create'
import EditPost from './pages/posts/Edit'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import ToggleDark from "./components/ToggleDark"
import { ThemeContext, themes } from "./context/ThemeContext"

function App() {
  const [darkMode, setDarkMode]=React.useState(true);

  return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand to="/">REACT</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/posts" className="nav-link">Posts</Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/posts" Component={IndexPost}/>
          <Route exact path="/posts/create" Component={CreatePost}/>
          <Route exact path="/post/edit/:id" Component={EditPost}/>
        </Routes>

        <Container>
        <ThemeContext.Consumer>
          {({changeTheme}) => (
            <ToggleDark
            toggleDark={()=>{
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
            />
          )}
        </ThemeContext.Consumer>        
        </Container>
      </div>
  );
}

export default App;


// tutorial https://levelup.gitconnected.com/dark-mode-in-react-533faaee3c6e