import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) => <ListGroup.Item>{eachPackage}</ListGroup.Item>)
 
    return (
        
            <Card style={{ width: '70vw', margin: '50px auto' }} border='dark'>

                <Card.Body>
                <Card.Title>Our Packages</Card.Title>
                    <Container>
                        <ListGroup>
                                {displayPackages}
                        </ListGroup>
                    </Container>
    
                </Card.Body>

            </Card>
      
    )
}