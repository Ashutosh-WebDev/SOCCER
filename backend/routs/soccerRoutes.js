import{
    addNewPlayer,
    getPlayers,
    getPlayerWithId,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers'

const routes=(app)=>{
    app.route('/players')
    .get(getPlayers) //GET endpoint
    .post(addNewPlayer)//POST endpoint


    app.route('/player/:PlayerId')
    .get(getPlayerWithId) //get specific player
    .put(updatePlayer) //update a specific player
    .delete(deletePlayer) //deleted a specific player
}

export default routes