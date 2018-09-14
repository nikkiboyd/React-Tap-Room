import React from 'react';
import PropTypes from 'prop-types';

function Terms(props){

  var notice = {
    fontSize: 14,
    color: '#DDDDDD',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
}

var button = {
    margin: 30
}

  return (
    <div style={notice}>
      <p style={notice}>By continuing, I agree to the Terms and Conditions and Privacy Policy of Ecliptic Brewing, LLC. I confirm that I have received the proper employee training and am subject to disciplinary action if information is not inputted as instructed by my supervisor.</p>
      <button style={button} onClick={props.onAddBrewConfirmation} className="btn btn-success">I agree!</button>
    </div>
  );
}

Terms.propTypes = {
    onAddBrewConfirmation: PropTypes.func
};

export default Terms;