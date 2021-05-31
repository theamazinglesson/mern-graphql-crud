import React, { useState } from 'react';
import PlayerList from './PlayerList';
import "./Players.css";

const Players = () => {
    // const { playerList, setPlayerList } = useState(null);


    


    return (
        <div className="Players">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            {/* Add Players Start  */}
            <form className="form">
                <div className="field">
                    <input type="text" placeholder="Enter Player Name" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Enter Player Club" />
                </div>
                <div className="field">
                    <button className="btn">Submit</button>
                </div>
            </form>
            {/* add players ends  */}


            <PlayerList />


        </div>
    )
}

export default Players;
