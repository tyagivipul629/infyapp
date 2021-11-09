import React, { Component } from 'react';
import CardBody from './CardBody';
import "./styles/card.css";


export default class Hotels extends Component {
    constructor(props){
        super(props);
        this.state={
            hotels: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/hotels',{
            method: 'GET'
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            this.setState({
                hotels: [...this.state.hotels,...res]
            })
        })
    }
    render() {
        console.log(this.state);
        return (
            
                
                <div className="hero">
                    <div className="cardList">{ this.state.hotels.map(createCard) }</div>
                </div>
                

        );
    }



}

function createCard(hotelLits) {
    return (
        <CardBody
            key={ hotelLits.id }
            hotelName={ hotelLits.hotelName }
            city={ hotelLits.city }
            amenities={ hotelLits.amenities }
            address={ hotelLits.address }
            phone={ hotelLits.phoneNo }
        />
    );
}
