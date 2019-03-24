import * as React from 'react';

// style
import './Card.scss';

const Card = () => (
  <div className="card">
    <img src="https://res.cloudinary.com/annmary/image/upload/v1553360397/loulou-restaurant-paris-06_fpt8gb.jpg" alt="card-image" />
    <div className="card__views">
      <span className="card__views--comment">
        <i class="fa fa-comments fa-2x mr-2"></i> 
        <span>1, 342 Comments</span>
      </span>
      <span className="card__views--rating ml-2"> 
        <i class="fa fa-star mr-2"></i>3.6
      </span>
    </div>
    <div className="card__content m-3">
      <div className="card__tag-section">
        <span className="card__tag mr-3">
          Manager: James Borden
        </span>
        <span className="card__tag">
          Call: (813)260-1222
        </span>
      </div>
      <h1 className="card__title pt-3">
        Hard Rock Café & Grill
      </h1>
      <p className="card__subtitle">
        150 Old Park Ln, Mayfair, London W1K 1QZ
      </p>
    </div>
  </div>
)

export default Card;
