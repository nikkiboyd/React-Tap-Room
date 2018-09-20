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

render() {
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

    var overview =
        <div style={overview}>
            <h2 style={drinkName}>{this.props.name} by {this.props.brewery}</h2>
            <h3 style={description}><em>{this.props.description}</em></h3>
            <hr/>
            <h6>ABV: {this.props.abv}</h6>
            <h6>${this.props.price}.00</h6>
            <h6>{this.props.pints} of 124 pints remaining</h6>
            <button onClick={() => this.props.onEditDetails(this.props.id)} className="btn btn-warning">Edit Details</button>
          <EditPint onEditDetails={this.props.onEditDetails} pintId={this.props.id}/>
         </div>

    var editDetails =
        <div>
        <form>
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

    if(this.state.cardStatus = 'overview') {
        return (
            <div style={this.state}>
               {overview}
            </div>
            );
    } else {
        return (
            <div style={this.state}>
               {editDetails}
            </div>
            );
    }

    // return (
    //     <div style={this.state}>
    //        {overview}
    //     </div>
    //     );
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
