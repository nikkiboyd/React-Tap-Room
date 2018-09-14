import React from 'react';
import PropTypes from 'prop-types';

function EditBrewForm(props){
    
    let _name = null;
    let _brewery = null;
    let _description = null;
    let _price = null;
    let _abv = null;
    let _pints = null;

    function handleEditDetails(currentBrew) {  
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value, id: currentBrew});
        _name.value = '';
        _brewery.value = '';
        _description.value = '';
        _price.value = '';
        _abv.value = '';
        _pints.value = '';
    }

    var form = {
        padding: 50,
        backgroundColor: '#333842',
        maxWidth: 900,
        margin: 'auto',
        textAlign: 'center',
        color: '#DDDDDD',
        borderRadius: 10
    }

    var title = {
        fontSize: 30,
        color: '#DDDDDD',
        textAlign: 'center'
    }

    var beerPic = {
        width: '5%',
        paddingRight: 15
    }

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

EditBrewForm.propTypes = {
    currentBrew: PropTypes.object,
    onEditDetails: PropTypes.func,
  };


export default EditBrewForm;