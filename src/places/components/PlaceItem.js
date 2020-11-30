import React, {useState} from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Model from '../../shared/components/UIElements/Model'

const PlaceItem = (props) => {

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return(
        <React.Fragment>
            <Model show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__model-content" footerClass="place-item__model-actions" footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                <div className="map-container">
                    <h2>The Map</h2>
                </div>
            </Model>
            <li className="place-item">
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__action'>
                        <Button inverse onClick={openMapHandler}>View on map</Button>
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;