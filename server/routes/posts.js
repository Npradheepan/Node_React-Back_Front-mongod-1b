import express from 'express';


// Local Controller Modul Importting 
import {getPosts, createPost} from '../controllers/posts.js'

//Routting veriable
const router = express.Router();

//http://localhost:5000/post 
router.get('/', getPosts )
router.post('/', createPost )
//Routting export to main index
export default router;