import React,{useState} from 'react';


const PlayerList = props => {
    const [allPlayers, setAllAplayers] = useState(null);
    // FETCHING ALL PLAYERS FROM DATABASE 
    // player: [Player!]!
    // type Player{
    //     _id:ID!
    //     name: String!
    //     club: String!
    // }    
    const reqBody = {
        query: `
            query{
                player{
                    _id
                    name
                    club
                }
            }
            `,
        // variables: {

        // }
    };

    fetch('http://localhost:4000/graphql', {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res=>{
            if (res.status !== 200 && res.status!== 201) {
                throw new Error("Error");
            }
            return res.json();
        })
        .then(resData=>{
            // console.log(resData.data);
            // setAllAplayers(resData.data);
            const allPlayer = resData.data.player.map(player=>{
                return (
                    <tr>
                        <td>Lionel Messi</td>
                        <td>FC Barcelona</td>
                        <td><button className="btn">Edit</button><button className="btn">Delete</button></td>
                    </tr>
                );
            });
            // setAllAplayers(allPlayer);
        });
        // console.log(allPlayer);
        
        

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Club</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {allPlayer} */}
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

export default PlayerList;
