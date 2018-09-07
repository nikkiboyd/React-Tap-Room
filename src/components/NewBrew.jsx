import React from 'react';

function NewBrew(){

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


  return (
    <div>
        <div>
            <h1 style={title}>
                <img style={beerPic} src="https://cdn.shopify.com/s/files/1/1061/1924/files/Beer_Emoji.png?9898922749706957214"></img>
                Add a new brew...
            </h1>
            <hr/>
        </div>
        <form style={form}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Name:</label><br/>
                    <input className="form-control" placeholder="Drop Top Amber Ale"></input>
                    </div>
                    <div className="form-group col-md-6">
                    <label>Brand:</label><br/>
                    <input className="form-control" placeholder="Widmer Brothers"></input>
                    </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>Price:</label><br/>
                    <input className="form-control" placeholder="$6.00 per pint" type="number"></input>
                </div>
                <div className="form-group col-md-4">
                    <label>Alcohol Content:</label>
                    <input className="form-control" placeholder="5.3" type="number"></input>
                </div>
                <div className="form-group col-md-4">
                    <label>Pints Available:</label>
                    <input className="form-control" value="124" type="number"></input>
                </div>  
            </div>
            <button className="btn btn-success">Add Keg</button>
        </form>
    </div>
  );
}

export default NewBrew;
