import axios from 'axios';

const KEY = 'AIzaSyAgLht65ffiarNqOXpwZtwW45-z8NLdu4M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
