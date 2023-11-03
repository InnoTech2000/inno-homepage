import express from 'express';
import {  GetAuth, GetBase, GetHome } from '../Controller/base.js';
const Router = express.Router();
import { isUser } from '../config/auth.js';

Router.get('/',GetBase)
Router.get('/Auth',GetAuth)
Router.get('/home',isUser,GetHome)


export default Router