import axios from 'axios';

const KEY = 'AIzaSyD8qyeSizcJ2SxKnw5VdXFZpab-SrwEGnQ';
// AIzaSyD8qyeSizcJ2SxKnw5VdXFZpab-SrwEGnQ

export default axios.create({
  baseURL: 'GET https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', maxResults: 5, key: KEY }
});
