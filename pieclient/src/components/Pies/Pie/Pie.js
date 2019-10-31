import React from 'react';
import './Pie.css';
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie= (props) => {
    console.log(props);
    return(
        <CardBody>
            <CardTitle>{props.tryPie.nameOfPie}</CardTitle>
            <CardText>{props.tryPie.crust}</CardText>
            <CardText>{props.tryPie.timeToBake} minutes </CardText>
            <CardText>{props.tryPie.baseOfPie}</CardText>
            <CardText>{props.tryPie.servings} Servings </CardText>
            <CardText>{props.tryPie.rating} out of 5!</CardText>

        </CardBody>
    )
}

export default Pie;