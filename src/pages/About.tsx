import {Stack} from "react-bootstrap";


export const About = (prop: {count : number}) => {
    return (
        <>
            <h1>About</h1>
            <Stack direction={"vertical"} gap={3}>
                <h3>count {prop.count}</h3>
            </Stack>
        </>)
}