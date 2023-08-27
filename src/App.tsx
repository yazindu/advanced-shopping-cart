import {Routes, Route} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {About} from "./pages/About.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    return (
        <ShoppingCartProvider>
            <NavBar/>
            <Button onClick={() => {
                setCount((count)=>count+1)
            }}>Increase</Button>
            <Container className={"mb-4"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/store"} element={<Store count={count}/>}/>
                    <Route path={"/about"} element={<About count={count}/>}/>
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App
