import axios from 'axios';

const KEY = 'AIzaSyD42WbsUDB5iGcvBMIbeF6352LhE_-pDtc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

        type: 'video'
    }
});