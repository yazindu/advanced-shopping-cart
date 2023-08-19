import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {About} from "./pages/About.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";

function App() {

    return (
        <ShoppingCartProvider>
            <NavBar/>
            <Container className={"mb-4"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/store"} element={<Store/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App
