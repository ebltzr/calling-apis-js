
axios.post('https://slack.com/api/chat.postMessage', {
    'channel': 'task-notifications',
    'text': 'Hello class!'
}, {
    headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${process.env.SLACK_TOKEN}`,
    }
})
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error.response.data);
});


// axios.post (
    // 1
    URL,
    // 2. This object below contains the request body
    {

    
    }
    // 3. object htat contains a bunch of "congfig" stuff... containing a key called "headers"
    {
        // this is where the headers go
        headers: {

        }

    }
// ) .then((response) => {})
// .catch((error) => {});
// .then(() => {} ) 
// .catch(() => {});

// .then and .catch have anonymous functions


// const axios = require('axios');
// require('dotenv').config();

// How to access SLACK_TOKEN from .env
// console.log(process.env.xoxb-5224451274278-5228150843077-ZWxRH9ybKShS9I6mxwe2QMGy);