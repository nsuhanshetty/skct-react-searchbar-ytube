
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
//const jp = require('jsonpath');
const jmespath = require('jmespath');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
        .then(response => {
            res.send(response.data);
        });
});

app.get('/search/:id', (req, res) => {
    //todo: request object to follow best practice
    var searchParam = req.params.id;
    //todo: Break the link into object 
    //todo: use secret for sensitive data 
    const vlink = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJxHxs-4-O7qmlWgBn8pvsQ&maxResults=5&q=' + searchParam + '&key=<apikey>'
    const jmesExpsn = "items[?id.kind== 'youtube#video'].{videoId:id.videoId,title:snippet.title,description:snippet.description,thumbnailUrl:snippet.thumbnails.default.url}";
    axios.get(vlink)
        .then(response => {
            var videoArray = jmespath.search(response.data, jmesExpsn);
            res.send(videoArray);
        })
        .catch(error => {
            console.log(error.response.data.error)
        });
});

app.listen(3003, () => {
    console.log('server started on port 3003');
});