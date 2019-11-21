import React from "react";
import styled from "styled-components";

const Card = styled.div`
    
    
`;

const CardBody = styled.div`
   
`;

const CardText = styled.p`
    font-size: 20px;
    color: rgb(220, 255, 92);
`;


export default function UserCard(props) {
  return (

      <Card>
        <CardBody>
          <ul>
            <li>
                <CardText >{props.name}</CardText>
                <CardText >Score: {props.score}</CardText>
            </li>
          </ul>   
        </CardBody>
      </Card> 

  );
};
