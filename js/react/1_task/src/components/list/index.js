import React from "react";
import { Row, Col , Button, ButtonGroup } from 'reactstrap';
import Item from './item';

export default function List(props) {
    let {items} = props;
    return <Row className={"items"}>
        <Col lg={12}>
            {
                items.map(item=><Item info={item} key={item.id} />)
            }
        </Col>
    </Row>
}