import React from 'react';

function NewBrew(){

    var form = {
        padding: 50,
        backgroundColor: '#333842',
        maxWidth: 900,
        margin: 'auto'
    }

    var title = {
        fontSize: 30,
        color: '#DDDDDD',
        textAlign: 'center'
    }

  return (
    <div>
        <div>
            <h1 style={title}>Add a new brew</h1>
        </div>
        <form style={form}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Name:</label>
                    <input placeholder="Drop Top Amber Ale"></input>
                    </div>
                    <div className="form-group col-md-6">
                    <label>Brand:</label>
                    <input placeholder="Widmer Brothers"></input>
                    </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>Price:</label><br/>
                    <input placeholder="$6.00 per pint" type="number"></input>
                </div>
                <div className="form-group col-md-4">
                    <label>Alcohol Content:</label>
                    <input placeholder="5.3" type="number"></input>
                </div>
                <div className="form-group col-md-4">
                    <label>Pints Available:</label>
                    <input value="124" type="number"></input>
                </div>  
            </div>
            <button class="btn">Add Keg</button>
        </form>
    </div>
  );
}

export default NewBrew;
