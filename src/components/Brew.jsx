import React from "react";
import PropTypes from "prop-types";
import BrewList from './BrewList';
import { Link } from 'react-router-dom';

class Brew extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cardStatus: 'overview'
    };
    this.cardOverview = this.cardOverview.bind(this);
    this.cardEditDetails = this.cardEditDetails.bind(this);
}

cardOverview() {
    this.setState({cardStatus: 'overview'});
}

cardEditDetails() {
    this.setState({cardStatus: 'editDetails'});
}

render(props) {
    var overview = {
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
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value, id: id});
        console.log('button activated for keg with name' + props.name);
    }

    return (
        <div style={overview}>
            <h2 style={drinkName}>{this.props.name} by {this.props.brewery}</h2>
            <h3 style={description}><em>{this.props.description}</em></h3>
            <hr/>
            <h6>ABV: {this.props.abv}</h6> 
            <h6>${this.props.price}.00</h6> 
            <h6>{this.props.pints} of 124 pints remaining</h6> 
            <button onClick={() =>handleEditDetails(this.props.id)} className="btn btn-warning">Edit Details</button>
            {/* <SellPint/> */}
            {/* <EditPint/> */}
        </div>
    );
    }
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