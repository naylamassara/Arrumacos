import { useState } from 'react'
import {Row, Container, Card, Button} from 'react-bootstrap'


    const Itemcount = ({titulo, precio}) => {
        const [qty, setQty] = useState(1);
    
        const Resta = () => {
            if(qty > 1) {
                setQty(qty - 1);
            }
        }
    
        const Suma = () => {
            alert(`Agregaste ${qty} productos al carrito`);
        }
    
        return (
            <div>
            <Container>
                <Row>

                    <Card style={{width: '21rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/46/5a/38/465a3834d6a8038d754ed4cff9b39a50.jpg" />
                        <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text>Remera Unicornio</Card.Text>
                            <Button disabled={qty === 1 ? 'disabled' : null } 
                            onClick={Resta}>-</Button>
                            <input style={{width: '2rem' }} type="text" value={qty} readOnly/>
                            <Button onClick={() => setQty(qty + 1)}>+</Button>
                
                            <p>${precio}</p>

                            <Button onClick={Suma}>¡Lo quiero ya!</Button>
                        </Card.Body>
                    </Card>
                    
                 </Row>
            </Container>
        </div>
        
              
    )
}
export default Itemcount;