import { useState, useEffect } from "react";
import { Container, NavDropdown, Button, Badge, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ searchData, moviesList }: { searchData: any, moviesList?: number }) {

    const [activeKey, setActiveKey] = useState("home");
    const [searchText, setSearchText] = useState<string>("");
    const [curentPage, setCurrentPage] = useState<string>("");

    useEffect(() => {
        const comingSoonUrl = window.location.pathname.match(/^\/coming-soon/) ? "active" : "";
        const moviesInTheatersUrl = window.location.pathname.match(/^\/movies-in-theaters/) ? "active" : "";
        const topRatedIndianUrl = window.location.pathname.match(/^\/top-rated-indian/) ? "active" : "";
        const topRatedMoviesUrl = window.location.pathname.match(/^\/top-rated-movies/) ? "active" : "";
        const favouriteUrl = window.location.pathname.match(/^\/favourite/) ? "active" : "";

        setCurrentPage(
            comingSoonUrl ? "coming-soon" :
                moviesInTheatersUrl ? "movies-in-theaters" :
                    topRatedIndianUrl ? "top-rated-indian" :
                        topRatedMoviesUrl ? "top-rated-movies" :
                            favouriteUrl ? "favourite" : "home");
    }, [window.location.href]);

    useEffect(() => {
        setActiveKey(curentPage);
    }, [curentPage]);

    if (searchData) searchData(searchText);
    return (
        <Navbar bg="light" expand="lg" fixed="top" onSelect={(eventKey) => { setActiveKey(`${eventKey}`) }}>
            <Container fluid style={{ margin: '0 120px' }}>
                <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}>Movies on Tip</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav defaultActiveKey="home" className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link active={activeKey === 'home'} eventKey={'home'} as={Link} to={'home'}>Home</Nav.Link>
                        <Nav.Link active={activeKey === 'movies-in-theaters'} eventKey={'movies-in-theaters'} as={Link} to={'movies-in-theaters'}>Movies in Theaters</Nav.Link>
                        <Nav.Link active={activeKey === 'coming-soon'} eventKey={'coming-soon'} as={Link} to={'coming-soon'} >Coming Soon</Nav.Link>
                        <Nav.Link active={activeKey === 'top-rated-indian'} eventKey={'top-rated-indian'} as={Link} to={'top-rated-indian'}>Top Rated Indian</Nav.Link>
                        <Nav.Link active={activeKey === 'top-rated-movies'} eventKey={'top-rated-movies'} as={Link} to={'top-rated-movies'}>Top Rated Movies</Nav.Link>
                        <Nav.Link active={activeKey === 'favourite'} eventKey={'favourite'} as={Link} to={'favourite'}>Favourite</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;