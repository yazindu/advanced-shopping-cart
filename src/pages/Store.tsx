import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";
import {StoreItem} from "../components/StoreItem.tsx";
export const Store = (props : {count : number}) => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item =>
                    <Col key={item.id}><StoreItem {...item} count={props.count} /></Col>
                )}
            </Row>
        </>
    )
}