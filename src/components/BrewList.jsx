import React from "react";
import Brew from "./Brew";
import FilterBy from "./FilterBy";
import PropTypes from 'prop-types';

function BrewList(props) {

  var flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

    return (
      <div>
        <FilterBy/>
        <div style={flexContainer}>
            {props.brewList.map((brew, index) =>
            <Brew name={brew.name}
            brewery={brew.brewery}
            description={brew.description}
            abv={brew.abv}
            price={brew.price}
            pints={brew.pints}
            key={index}
            onEditDetails={props.onEditDetails}/>
            )}
        </div>
      </div>
    );
}

BrewList.propTypes = {
  brewList: PropTypes.array,
  onEditDetails: PropTypes.func
};

export default BrewList;
