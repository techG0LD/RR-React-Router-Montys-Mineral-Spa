import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

export default function About () {
    return (

      

<Card style={{ width: '70vw', margin: '50px auto' }} border='dark'>

<Card.Body>
  <Card.Title>About Us</Card.Title>
  <Card.Text>
    When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown. 
  </Card.Text>
  <Card.Text>
    As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired. 
  </Card.Text>
  <Card.Text>
    Monty decided to travel around the world to find peace and happiness
  </Card.Text>
  <Card.Text>
    Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others
  </Card.Text>
  
</Card.Body>
<Card.Img variant="bottom" src="hotsprings.jpg" alt="hotsprings"/>
</Card>



// {/* <Container>
//     <Card border="info" >
//         <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
//         <Card.Body>
//             <Card.Text>
//                 When returning from a spritual journey through the Earth, ....
//             </Card.Text>
//             <Card.Text>
//                 As the heir of the industrious McMansions fortune, Monty ....
//             </Card.Text>
//             <Card.Text>
//                 Monty decided to travel around the ...
//             </Card.Text>
//             <Card.Text>
//                 Upon his return, he dedicated about 1% ...
//             </Card.Text>
//         </Card.Body>
//         <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="hotsprings.jpg" />
//     </Card>
// </Container> */}

    )
}