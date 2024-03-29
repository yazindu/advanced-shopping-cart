import {Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

export const NavBar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                    onClick={openCart}
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256"
                              fill="none"/>
                        <circle cx="80" cy="216" r="14"/>
                        <circle cx="184" cy="216" r="14"/>
                        <path
                            d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                            fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                         style={{
                             color: "white",
                             width: "1.5rem",
                             height: "1.5rem",
                             position: "absolute",
                             bottom: 0,
                             right: 0,
                             transform: "translate(25%, 25%)"
                         }}
                    >{cartQuantity}
                    </div>
                </Button>)
                }
            </Container>
        </NavbarBS>
    )
}