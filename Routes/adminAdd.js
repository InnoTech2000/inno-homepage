import express from "express";
import { 
    DelArea,
    DelNHBooking,
    DelPlace,
    DelService,
    GetAddArea , 
    GetAddNursingHome, 
    GetAddPlace , 
    GetAddService, 
    GetArea, 
    GetNHBooking, 
    GetPlace, 
    GetService, 
    PostAreaForm ,
    PostNursingHomeForm,
    PostPlaceForm, 
    PostServiceForm} from "../Controller/adminAdd.js";

const Router = express.Router();


Router.get('/GetAddArea',GetAddArea);
Router.get('/GetAddPlace',GetAddPlace);
Router.get('/GetAddNursingHome',GetAddNursingHome);
Router.get('/GetAddService',GetAddService);

Router.get('/GetArea',GetArea);
Router.get('/GetPlace',GetPlace);
Router.get('/GetService',GetService);
Router.get('/GetNHBooking',GetNHBooking);

Router.post('/PostAreaForm',PostAreaForm);
Router.post('/PostPlaceForm',PostPlaceForm);
Router.post('/PostNursingHomeForm',PostNursingHomeForm);
Router.post('/PostServiceForm',PostServiceForm);


Router.delete('/DelArea/:id',DelArea);
Router.delete('/DelService/:id',DelService);
Router.delete('/DelPlace/:id',DelPlace);
Router.delete('/DelNHBooking/:id',DelNHBooking);



export default Router