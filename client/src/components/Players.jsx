import React from 'react';
import "./Players.css";

const Players = () => {
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



            {/* Players list  */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Club</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lionel Messi</td>
                        <td>FC Barcelona</td>
                        <td><button className="btn">Edit</button><button className="btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Lionel Messi</td>
                        <td>FC Barcelona</td>
                        <td><button className="btn">Edit</button><button className="btn">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Players;
