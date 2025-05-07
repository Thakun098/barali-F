import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const MainNavbar = ({ isUser = "" }) => {
    console.log(isUser)
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Barali Resort</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">หน้าแรก</Nav.Link>
                            <Nav.Link href="#pricing">วิลล่า</Nav.Link>
                            <Nav.Link href="#pricing">โลเคชั่น</Nav.Link>
                            <Nav.Link href="#pricing">ข้อเสนอพิเศษ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                signin as<a href="#login">Mark</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MainNavbar
