import express from 'express';
import { GetLogin, GetRegister, Logout, PostLogin, PostRegister } from '../Controller/auth.js';
const Router = express.Router();

Router.get('/login',GetLogin)
Router.get('/register',GetRegister)
Router.get('/logout',Logout)

Router.post('/login',PostLogin)
Router.post('/register',PostRegister)


export default Router