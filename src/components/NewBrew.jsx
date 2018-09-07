import React from 'react';

function NewBrew(){
  return (
<div class="stack">
  <div class="newKeg card">
   <h1>Add a new brew</h1>
   <div>
   <label>Name:</label>
   <input placeholder="Drop Top Amber Ale"></input>
  </div>
  <div>
   <label>Brand:</label>
   <input placeholder="Widmer Brothers"></input>
  </div>
  <div>
   <label>Price:</label>
   <input placeholder="$6.00 per pint" type="number"></input>
  </div>
  <div>
   <label>Alcohol Content:</label>
   <input placeholder="5.3" type="number"></input>
  </div>
  <div>
   <label>Pints Available:</label>
   <input value="124" type="number"></input>
  </div>
    <button class="btn btn-dark">Add Keg</button>
  </div>
</div>
  );
}

export default NewBrew;
