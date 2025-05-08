import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




const MainNavbar = ({ isUser, logout }) => {
    console.log(isUser)
    return (

        <>
            <Navbar expand="lg" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="https://www.baraliresort.com/images/logo.png"
                            alt="Bootstrap"
                            width="60"
                            height="54"
                            className="d-inline-block align-text-top"
                        />
                        {' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">หน้าแรก</Nav.Link>
                            <Nav.Link href="#pricing">วิลล่า</Nav.Link>
                            <Nav.Link href="#pricing">โลเคชั่น</Nav.Link>
                            <Nav.Link href="#pricing">ข้อเสนอพิเศษ</Nav.Link>
                        </Nav>
                        <Nav>
                            {isUser ? (
                                <div className="d-flex align-items-center gap-3">
                                    <Navbar.Text className="text-light">
                                        <span className="fw-bold">{isUser.name} {isUser.lastname}</span>
                                    </Navbar.Text>
                                    <Button
                                        variant="outline-light"
                                        as={Link}
                                        onClick={logout}
                                        to="/"
                                        className="px-3"
                                    >
                                        ออกจากระบบ
                                    </Button>
                                </div>
                            ) : (
                                <div className="d-flex gap-2">
                                    <Button variant="outline-light" as={Link} to="/login">เข้าสู่ระบบ</Button>
                                    <Button variant="light" as={Link} to="/register">สมัครสมาชิก</Button>
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MainNavbar
