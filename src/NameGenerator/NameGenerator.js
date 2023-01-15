import './NameGenerator.css'
import React from 'react';
import { useState } from "react";
import PersonCard from '../PersonCard/PersonCard';


const NameGenerator = () => {

    const [persons, setPersons] = useState([]);
    const [dataType, setDataType] = useState(0);
    const addNewPerson = async () => {
        const response = await fetch("https://randomuser.me/api/");
        const result = await response.json();

        const newPerson = result.results[0];

        setPersons(persons.concat([newPerson]));
        console.log({ persons });
    };

    const deletePerson = (id) => () => {
        // console.log('delete person' + id);
        setPersons(persons.filter(person => person.login.uuid !== id));
    };


    return (
        <>
            <h1>NameGenerator</h1>
            <select onChange={(e) => setDataType(parseInt(e.target.value))}>
                <option value='0'>Liste de cartes</option>
                <option value='1'>Tableau</option>
                <option value='2'>CSV</option>
            </select>

            <button onClick={addNewPerson}>Nouvelle ligne</button>

            {
                dataType === 0 ? (
                    <div className='Card-grid'>
                        {persons.map((person) => {
                            return <PersonCard key={person.login.uuid} person={person} onDelete={deletePerson} />
                        })}
                    </div>
                ) : ('')
            }
            {
                dataType === 1 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Prénom</th>
                                <th>Nom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person) => {
                                return (
                                    <tr key={person.login.uuid}>
                                        <td>{person.name.first}</td>
                                        <td>{person.name.last}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : ('')
            }

            {
                dataType === 2 ? (
                    <div>
                        <p>Le format CSV ci-dessous.</p>
                        <br/>
                        <p><b>Nom; Prénom; Date de naissance; Genre</b></p>
                        {persons.map((person) => {
                            return (
                                <p key={person.login.uuid}>{person.name.last},{person.name.first},{new Date(person.dob.date).toLocaleDateString()},{person.gender === 'female' ? 'Femme' : 'Homme'}</p>
                            );
                        })}
                    </div>
                ) : ('')
            }


        </>
    );
};
export default NameGenerator;