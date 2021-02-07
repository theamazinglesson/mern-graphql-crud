const Player = require('../../models/Player');


const playerInfo = [{
    _id: 123,
    name: "Lionel Messi",
    club: "barcelona"
},
{
    _id: 456,
    name: "Cristiano Ronaldo",
    club: "barcelona"
},

];


module.exports = {
    // singlePlayer: Player!
    singlePlayer: async (args, req) => {

        try {
            console.log(args);

            const players = await Player.findById({ _id: args.playerId });

            return players;

        } catch (error) {
            console.error(error);
        }
    },

    player: async (args, req) => {


        try {
            console.log("Player resolvers");

            const players = await Player.find();
            console.log(players);
            return players;

        } catch (error) {
            console.error(error);
        }
    },




    createPlayer: async (args, req) => {
        try {
            console.log("Creating player");
            console.log(args.playerInput);

            const newPlayer = {
                name: args.playerInput.name,
                club: args.playerInput.club
            }
            const savePlayer = await new Player(newPlayer);

            return await savePlayer.save();

        } catch (error) {
            console.error(error);
        }
    },



    updatePlayer: async (args, req) => {
        try {
            console.log("Update player hit");
            console.log(args.playerId);
            // if(args.playerId == playerInfo[0]._id){
            //     console.log("id matched");
            //     const updateedPlayer={
            //         _id: 123,
            //         name: "Kilyon Mbappe",
            //         club: "PSG"
            //     };
            //     return updateedPlayer;
            // }

            const updateedPlayer = await Player.findByIdAndUpdate({ _id: args.playerId }, {
                name: args.playerInput.name,
                club: args.playerInput.club
            }, { new: true, useFindAndModify: false });

            return updateedPlayer;
        } catch (error) {
            console.error(error);
        }
    },


    // deletePlayer(playerId: ID!): Player
    deletePlayer: async (args, req) => {
        try {
            const deletedPlayer = await Player.findByIdAndRemove({ _id: args.playerId });
            console.log("Deleted player ", deletedPlayer);
            return deletedPlayer;
        } catch (error) {
            console.error(error);
        }
    }
}