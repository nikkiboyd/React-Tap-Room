import React from "react";
import PropTypes from "prop-types";
import BrewList from './BrewList';
import { Link } from 'react-router-dom';


function Brew(props) {

    var card = {
        padding: 20,
        margin: 20,
        maxWidth: 300,
        minWidth: 300,
        backgroundColor: '#333842',
        fontFamily: 'sans-serif',
        paddingTop: '50px',
        flexDirection: 'row',
        textAlign: 'center',
        borderRadius: 10,
        color: '#BBBBBB'
      }

    var description = {
        fontSize: 18,
        color: '#DDDDDD'
    }

    var drinkName = {
        fontSize: 20,
        color: '#DDDDDD'
    }

    var button = {
        margin: 5
    }

    function handleEditDetails(id) {
        console.log('button activated for keg with name' + props.name);
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value, id: id});
        
        return(
            <div>
            <div>
                <h1 style={title}>
                    <img style={beerPic} src="https://cdn.shopify.com/s/files/1/1061/1924/files/Beer_Emoji.png?9898922749706957214"></img>
                    Edit a brew...
                </h1>
                <hr/>
            </div>
            <form onSubmit={handleEditDetails} style={form}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Name:</label><br/>
                        <input 
                            required
                            className="form-control" 
                            placeholder="Drop Top Amber Ale"
                            ref={(input) => {_name = input;}}/>
                        </div>
                        <div className="form-group col-md-4">
                        <label>Brewery:</label><br/>
                        <input 
                            required
                            className="form-control" 
                            placeholder="Widmer Brothers"
                            ref={(input) => {_brewery = input;}}/>
                        </div>
                        <div className="form-group col-md-4">
                        <label>Description:</label><br/>
                        <input 
                            required
                            className="form-control" 
                            placeholder="Honey malt and milk sugar"
                            ref={(input) => {_description = input;}}/>
                        </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Price:</label><br/>
                        <input 
                            required
                            className="form-control" 
                            placeholder="$6.00 per pint" 
                            ref={(input) => {_price = input;}}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Alcohol Content:</label>
                        <input 
                            required
                            className="form-control" 
                            placeholder="5.3" 
                            ref={(input) => {_abv = input;}}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Pints Available:</label>
                        <input 
                            required
                            className="form-control" 
                            placeholder="124"
                            ref={(input) => {_pints = input;}}/>
                    </div>  
                </div>
                <button className="btn btn-success" type="submit">Add Keg</button>
            </form>
        </div>
        );
    }

    return (
        <div style={card}>
            <h2 style={drinkName}>{props.name} by {props.brewery}</h2>
            <h3 style={description}><em>{props.description}</em></h3>
            <hr/>
            <h6>ABV: {props.abv}</h6> 
            <h6>${props.price}.00</h6> 
            <h6>{props.pints} of 124 pints remaining</h6> 
            <button onClick={() =>handleEditDetails(props.id)} className="btn btn-warning">Edit Details</button>
            {/* <SellPint/> */}
            {/* <EditPint/> */}
        </div>
    );
}

Brew.propTypes = {
    name: PropTypes.string,
    brewery: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    pints: PropTypes.string,
    id: PropTypes.string,
    onEditDetails: PropTypes.func
};

export default Brew;