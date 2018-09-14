import React from 'react';
import PropTypes from 'prop-types';

function Terms(props){
  return (
    <div>
      <p>By continuing, I agree to the Terms and Conditions and Privacy Policy of Ecliptic Brewing, LLC. I confirm that I have received the proper employee training and am subject to disciplinary action if information is not inputted as instructed by my supervisor.</p>
      <button onClick={props.onAddBrewConfirmation}>I agree</button>
    </div>
  );
}

Terms.propTypes = {
    onAddBrewConfirmation: PropTypes.func
};

export default Terms;