import express from 'express';
import upload from '../controllers/urlController.js';
import getShortenedId from '../controllers/getans.js';
const route = express.Router();

route.post('/upload',upload);
route.get('/:shortedURL', getShortenedId)

export default route;
