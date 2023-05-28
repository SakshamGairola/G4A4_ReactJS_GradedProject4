import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Container, NavDropdown, Button, Badge, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';

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
        // <Navbar fixed="top" bg="light" variant="light" id="header" onSelect={(eventKey) => setActiveKey(`${eventKey}`)}>
        //     <Container>
        //         <Navbar.Brand href="/"><span>Movies On The Tip</span></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav defaultActiveKey="home" as="ul" classNameName="me-auto">
        //                 <Nav.Item as="li"><Nav.Link active={activeKey === "home"} eventKey="home" as={Link} to={"home"}>Home</Nav.Link></Nav.Item>
        //                 <Nav.Item as="li"><Nav.Link active={activeKey === "coming-soon"} eventKey="coming-soon" as={Link} to="coming-soon">Coming Soon</Nav.Link></Nav.Item>
        //                 <Nav.Item as="li"><Nav.Link active={activeKey === "movies-in-theaters"} eventKey="movies-in-theaters" as={Link} to="movies-in-theaters">Movies In Theaters</Nav.Link></Nav.Item>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item active={activeKey === "top-rated-indian"} eventKey="top-rated-indian" as={Link} to="top-rated-indian">Top Rated Indian</NavDropdown.Item>
        //                     <NavDropdown.Item active={activeKey === "top-rated-movies"} eventKey="top-rated-movies" as={Link} to="top-rated-movies">Top Rated Movies</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Form classNameName="d-flex">
        //                 <Button variant="outline-success btnic">
        //                     <Nav.Link active={activeKey === "add-to-cart"} eventKey="add-to-cart" as={Link} to="add-to-cart">
        //                         <FontAwesomeIcon icon={faCartShopping} />
        //                         {" "}<Badge pill bg="warning" text="dark" classNameName='badge-cart'>{moviesList}</Badge>Watchlist</Nav.Link>
        //                 </Button>&nbsp;&nbsp;
        //                 <Form.Control
        //                     type="search"
        //                     placeholder="Search"
        //                     classNameName="me-2"
        //                     aria-label="Search"
        //                     onChange={(e) => setSearchText(e.target.value)}
        //                 />
        //             </Form>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //             <li className="nav-item">
        //                 <a className="nav-link active" aria-current="page" href="#">Home</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Link</a>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                     Dropdown
        //                 </a>
        //                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                     <li><a className="dropdown-item" href="#">Action</a></li>
        //                     <li><a className="dropdown-item" href="#">Another action</a></li>
        //                     <li><hr className="dropdown-divider" /></li>
        //                     <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                 </ul>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
        //             </li>
        //         </ul>
        //         <form className="d-flex">
        //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //             <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
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