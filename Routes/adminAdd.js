import express from "express";
import { 
    DelArea,
    DelDormitory,
    DelGender,
    DelNHBooking,
    DelPlace,
    DelService,
    GetAddArea , 
    GetAddDormitory, 
    GetAddGender, 
    GetAddNursingHome, 
    GetAddPlace , 

    GetAddService, 
    GetArea, 
    GetDormitory, 
    GetGender, 
    GetNHBooking, 
    GetPlace, 

    GetPutArea, 

    GetPutDormitory, 

    GetPutGender, 

    GetPutNHBooking, 

    GetPutPlace, 

    GetPutService, 

    GetSearchNH, 

    GetService, 
    PostAreaForm ,
    PostDormitoryForm,
    PostGenderForm,
    PostNursingHomeForm,
    PostPlaceForm, 

    PostServiceForm,
    PutAreaForm,
    PutDormitoryForm,
    PutGenderForm,
    PutNursingHomeForm,
    PutPlaceForm,
    PutServiceForm,
    SearchNHBooking,

} from "../Controller/adminAdd.js";

import { 
    GetClientBook,
    GetAddClientBook,
    GetPutClientBook,
    PostClientBookForm,
    PutClientBookForm,
    DelClientBook,

} from "../Controller/ClientBook.js"

import { GetSearch, SearchF } from "../Controller/search.js";


const Router = express.Router();


Router.get('/GetAddArea',GetAddArea);
Router.get('/GetAddPlace',GetAddPlace);
Router.get('/GetAddNursingHome',GetAddNursingHome);
Router.get('/GetAddService',GetAddService);
Router.get('/GetAddGender',GetAddGender);
Router.get('/GetAddDormitory',GetAddDormitory);
Router.get('/GetAddClientBook',GetAddClientBook);


Router.get('/GetArea',GetArea);
Router.get('/GetPlace',GetPlace);
Router.get('/GetService',GetService);
Router.get('/GetNHBooking',GetNHBooking);
Router.get('/GetGender',GetGender);
Router.get('/GetDormitory',GetDormitory);
Router.get('/GetClientBook',GetClientBook);


Router.get('/GetPutNHBooking/:id', GetPutNHBooking);
Router.get('/GetPutClientBook/:id', GetPutClientBook);
Router.get('/GetPutArea/:id', GetPutArea);
Router.get('/GetPutService/:id',GetPutService);
Router.get('/GetPutGender/:id',GetPutGender);
Router.get('/GetPutDormitory/:id',GetPutDormitory);
Router.get('/GetPutPlace/:id', GetPutPlace);


Router.post('/PostAreaForm',PostAreaForm);
Router.post('/PostPlaceForm',PostPlaceForm);
Router.post('/PostNursingHomeForm',PostNursingHomeForm);
Router.post('/PostServiceForm',PostServiceForm);
Router.post('/PostGenderForm',PostGenderForm);
Router.post('/PostDormitoryForm',PostDormitoryForm);
Router.post('/PostClientBookForm',PostClientBookForm);


Router.put('/PutNursingHomeForm/:id',PutNursingHomeForm);
Router.put('/PutClientBookForm/:id',PutClientBookForm);
Router.put('/PutAreaForm/:id',PutAreaForm);
Router.put('/PutServiceForm/:id',PutServiceForm);
Router.put('/PutGenderForm/:id',PutGenderForm);
Router.put('/PutDormitoryForm/:id',PutDormitoryForm);
Router.put('/PutPlaceForm/:id',PutPlaceForm);

Router.delete('/DelArea/:id',DelArea);
Router.delete('/DelService/:id',DelService);
Router.delete('/DelPlace/:id',DelPlace);
Router.delete('/DelNHBooking/:id',DelNHBooking);
Router.delete('/DelGender/:id',DelGender);
Router.delete('/DelDormitory/:id',DelDormitory);
Router.delete('/DelClientBook/:id',DelClientBook);

//------ function ------
//Router.get('/Search',SearchF);
Router.get('/GetSearch',GetSearch);
 Router.post('/Search/:key',SearchF);


Router.get('/GetSearchNH',GetSearchNH);
Router.post('/SearchNHBooking/:keyHN',SearchNHBooking)



export default Router