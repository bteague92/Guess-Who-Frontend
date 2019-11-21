<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    
    
`;

const CardBody = styled.div`
   
`;

const CardText = styled.p`
    font-size: 40px;
    color: rgb(220, 255, 92);
`;


export default function UserCard(props) {
  return (

      <Card>
        <CardBody>
          <ul>
            <li><CardText >{props.name}</CardText></li>
          </ul>   
        </CardBody>
      </Card> 

  );
};
=======
// import React from "react";
// import { Card, Col, CardBody, CardText } from "reactstrap";

// export default function UserCard(props) {
//   return (
//     <Col xs='6' lg='4'>
//       <Card height='100%' body outline color='success' className='text-left'>
//         <CardBody className='myCard' height='100%'>
//           <CardText >{props.name}</CardText>
//         </CardBody>
//       </Card>
//     </Col>
//   );
// };
>>>>>>> 2c9b9a996d424d6558e9cdbe41074ebc2707e3ce
