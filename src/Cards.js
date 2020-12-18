import React, { useState, useEffect } from 'react'
import './Cards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

const swiped = (direction, nameToDelete) => {
    console.log("Swiped" + nameToDelete);
}


const outOfFrame = (name) => {
    console.log("Frame " + name);
}
function Cards() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const req=await axios.get('/sharender/card');
            setPeople(req.data);
        }
        fetchData();
    }, []);

    return (
        <div className="cards">
            <div className="cards__cardContainer">

                {people.map((person) => (
                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>


                ))}
            </div>
        </div>
    )
}

export default Cards
