import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './CoverPage.css'

const CoverPage= () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="titulo">Arrumacos</h1>
                        <h2>Niños Felices</h2>
                        
                    </Col>
                    <Col>
                        < img  className="imagen" src="https://decortips.com/es/wp-content/uploads/2018/11/tienda-ropa-infantil.jpg" alt="portada" />
                    </Col>
                </Row>
            </Container>
   
              
        </div>
    )
}


export default CoverPage