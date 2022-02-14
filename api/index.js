// Importing express module
const express = require("express")
const app = express()

const NBA = require("nba");
// Handling GET / request
app.get("/", (req, res, next) => {
    res.send("This is the express server")
})

// Handling GET /hello request
app.get("/hello", (req, res) => {
    res.send("This is the hello response");
})
app.get("/player", async (req, res) => {
    //const player = await NBA.findPlayer('Stephen Curry');
    let player;
    // TODO: try, catch
    const playerId = req.param('id');
    if(playerId){
        console.log(playerId);
        const pInfo = await NBA.stats.playerInfo({ PlayerID: playerId});
        res.send(pInfo);
        return;
    }
    else if(req.param('name')){
        console.log(req.param('name'));
        player = await NBA.findPlayer(req.param('name'));
    }
    else{
        res.send({});
        return;
    }
    console.log("player BEGIN");
    console.log(player);
    console.log("player END");
    const pInfo = await NBA.stats.playerInfo({ PlayerID: player.playerId });
    console.log("info:")
    console.log(pInfo);
    console.log("infoEND")
    res.send(pInfo);
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})
