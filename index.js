import express from "express";

const app = express();

const players = [
    {
        id: 1,
        name: "Magnus Carlsen",
        rating: 2839
    },
    {
        id: 2,
        name: "Hikaru Nakamura",
        rating: 2802
    }
];

app.get("/", (req, res) => {
    res.send("Hello Backend");
});

app.get("/players", (req, res) => {
    res.send(players);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

