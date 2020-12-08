import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export const ItemListContainer = (props) => {
    return (
        <Container >
            <Row>
                <h1>Lista de productos</h1>
            </Row>
            <Row>
                <p style={{color:'blueviolet'}}>{props.greeting}</p>
            </Row>
            
        </Container>
    )
}

export default ItemListContainer
