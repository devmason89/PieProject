import React, {useState, useEffect} from 'react';
import './Pies.css';
import {Card} from 'reactstrap';
import Pie from './Pie/Pie';

const Pies = () => {

    const[pies, setPies] = useState([]);

    // const pumpkinPie = {
    //     nameOfPie: 'Pumpkin',
    //     baseOfPie: 'Pumpkin Puree',
    //     crust: 'Pastry',
    //     timeToBake:50,
    //     servings:8,
    //     rating: 4.2
    // }

    const tryPies = [
        {
            nameOfPie: 'Pumpkin',
            baseOfPie: 'Pumpkin puree',
            crust: 'Pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4.2
        },
        {
            nameOfPie: 'Apple',
            baseOfPie: 'Jam',
            crust: 'Graham cracker',
            timeToBake: 30,
            servings: 6,
            rating: 4.0
        },
        {
            nameOfPie: 'Chocolate',
            baseOfPie: 'Pudding',
            crust: 'Pastry',
            timeToBake: 20,
            servings: 8,
            rating: 5.0
        }
    ]

    return(
        <div className="mainDiv">
            {
                tryPies.map((pie, index) => {
                    return(
                <Card className="cardName" key={index}>
                    <Pie tryPie= {pie} />
                </Card>
                    )
                })
        
            }
        </div>

    )
}

export default Pies;

//mapping over all of my pies, and creating a card for each pie that I have.
//using a key bc likes to iterate
//pie represents each pie iteration. represents a single object