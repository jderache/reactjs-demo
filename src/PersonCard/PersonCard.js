import React from 'react';
import './PersonCard.css';

const PersonCard = ({ person, onDelete }) => {
    return (
        <div>
            <img src={person.picture.large} alt='' />
            <div>
                <p>{person.name.first}</p>
                <p><strong>{person.name.last}</strong></p>
                <p>{new Date(person.dob.date).toLocaleDateString()}</p>
                <p><strong>{person.gender === 'female' ? 'Femme' : 'Homme'}</strong></p>
            </div>
            <button onClick={onDelete (person.login.uuid)} title='Supprimer la carte'>X</button>
        </div>
    )
};

export default PersonCard;