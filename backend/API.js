const express = require('express');

const app = new express();
const port = process.env.PORT || 5000;


const spies = [
    {
        id: 1,
        firstName: "Rick",
        lastName: "Sanchez",
        specialty:[
            "Genius"
        ],
        gender: "male",
        location: "Earth C137",
        bio: "Can travel in multiple dimentions",
        confirmedKills: 10000000
    },
    {
        id: 2,
        firstName: "James",
        lastName: "Bond",
        specialty: [
            "combat",
            "gadgets",
            "charisma",
            "glorified dickhead"
        ],
        gender: "Male",
        location: "England",
        bio: "undercover agent for MI6",
        confirmedKills: "classified"
    }
]

app.get('/', (req, res) => {
    return res.send('Hello world! from API');
});

app.get('/spies', (req, res) => {
    return res.send(spies);
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});