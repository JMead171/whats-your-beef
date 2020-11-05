import React from 'react';

import { CardView } from 'react-card-with-image';
import steak from '../../assets/tomahawk.jpg'
import crab from '../../assets/crab.jpg';

const Favorites = () => {

    const items = [
        {
            id: 1,
            header: 'Tomahawk Steak',
            image: steak
        },
        {
            id: 2,
            header: 'Alaskan King Crab Legs',
            image: crab
        }
    ];

    return(
        <div className="favorites-container">
            <h1 className="favorite-title"> Our Favorites </h1>
        <div className="flex-row">   
        <CardView
        items={items}
        activeColor='#090'
        imageHeight='640px'
        imageWidth='640px'
        />
        </div>
        
        </div>
    )
};

export default Favorites;