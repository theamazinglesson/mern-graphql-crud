const { buildSchema } = require('graphql');
 
const schema = buildSchema(`

    type Player{
        _id:ID!
        name: String!
        club: String!
    }





    input PlayerInput{
        name: String!
        club: String!
    }



    type RootQuery{
        singlePlayer(playerId: ID!): Player!
        player: [Player!]!
    }

    type RootMutation{
        createPlayer(playerInput: PlayerInput): Player
        updatePlayer(playerId: ID! playerInput: PlayerInput): Player
        deletePlayer(playerId: ID!): Player
    }


    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);
 
module.exports = schema;