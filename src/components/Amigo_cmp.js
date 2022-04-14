import React from 'react'; 
import {Button, Card} from 'react-bootstrap';

const Amigo_cmp = (props) => {
    return (
    <>
    <Card style={ { width: '300px' , margin: '5px'} } >
        {/* <Card.Img variant="top" src="/logo192.png" /> */}
        <Card.Body>
            <Card.Title >{props.lastName}, {props.firstName}</Card.Title>
            <Card.Text>
            Age: {props.age} <br></br>
            Hair color: {props.hairColor}
            </Card.Text>
        </Card.Body>
    </Card>
    </>

    ) 
}

export default Amigo_cmp; 