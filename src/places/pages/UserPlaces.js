import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    { 
        id: 'p1', 
        title: 'Eiffel Tower',
        description: 'One of the most higher ower made with iron', 
        imageUrl: 'https://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5902947920099eda52c5ac82/5a01f46bd63352b3be374974/1554667940303/?format=1500w',
        address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
        creator: 'u1',
        location: {
            lat: 48.8584,
            lng: 2.2945   
        }
    },
    { 
        id: 'p2', 
        title: 'Eiffel Tower',
        description: 'One of the most higher ower made with iron', 
        imageUrl: 'https://unsplash.com/photos/UzagqG756OU',
        address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
        creator: 'u2',
        location: {
            lat: 48.8584,
            lng: 2.2945   
        }
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) =>place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;

