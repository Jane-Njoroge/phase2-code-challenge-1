import React, { useState } from 'react';

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card eight wide column">
      <div className="image" onClick={() => setShowDetails(!showDetails)}>
        <img src={hog.image} alt={hog.name} />
      </div>

  <div className="content">
    <h3 className="header">{hog.name}</h3>
  </div>

  {showDetails && (
    <div className="extra content">
      <p><strong>Specialty:</strong> {hog.specialty}</p>
      <p><strong>Weight:</strong> {hog.weight}</p>
      <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
      <p><strong>Highest Medal:</strong> {hog['highest medal achieved']}</p>
    </div>
  )}

  <div className="extra content">
    <button className="ui button" onClick={() => onHide(hog.name)}>
      Hide Hog
    </button>
  </div>
</div>
  );
}

export default HogTile;

