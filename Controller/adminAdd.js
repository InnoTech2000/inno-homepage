import Areas from "../Models/Area.js";
import Places from "../Models/Place.js";
import Services from "../Models/Service.js";
import NursingHome from "../Models/NursingHome.js";


export const GetAddArea = (req,res) => {
    res.render('AddArea')
}


export const PostAreaForm = async (req,res) => {
    const { InputArea } = req.body;

    try {
    const newArea = await new Areas({
        area : InputArea
    })

    const saveArea = await newArea.save()
    console.log(saveArea);
   res.redirect('/addadmin/GetArea')

    } catch (error) {
     res.status(404).json(error)   
    }

}

export const GetAddPlace = async (req,res) => {
    try {
        const GetAreas = await Areas.find()
        res.render('AddPlace' , {Areas : GetAreas})
    } catch (error) {
        console.log(error)
        res.render('404')

    }
}


export const PostPlaceForm = async (req,res) => {
    const { InputArea , InputPlace  } = req.body;
    try {
        const newPlaces = await new Places({
            area : InputArea , 
            place : InputPlace
        })
        const savePlaces = await newPlaces.save()
        console.log(savePlaces);
        res.redirect('/addadmin/GetPlace')
    } catch (error) {
        res.status(404).json(error)
    }
}

export const GetAddNursingHome = async (req,res) => {
    try {
        const GetPlaces = await Places.find()
        const GetServices = await Services.find()
        res.render('AddNursingHome', {
            Places : GetPlaces,
            Services : GetServices
        })
    } catch (error) {
        res.render('404')
    }
}

export const PostNursingHomeForm = async (req,res) => {
    const { 
        InputPlace,
        InputHospitalName,
        InputPrice,
        InputServeOption,
        InputServeOption1,
        InputServeOption2,
        InputServeOption3,
    } = req.body;
    try {
        console.log(req.body);
        const newNH = await new NursingHome({
            hospitalname : InputHospitalName ,
            place : InputPlace , 
            price : InputPrice , 
            serve1 : InputServeOption , 
            serve1 : InputServeOption1 , 
            serve2 : InputServeOption2 , 
            serve4 : InputServeOption3 , 
        })
        const saveNH = await newNH.save()
        console.log(saveNH)
        res.redirect('/addadmin/GetNHBooking')
    } catch (error) {
        res.status('404').json(error)
    }
}


export const GetAddService = async (req,res) => {
    res.render('AddService')
}

export const PostServiceForm = async (req,res) => {
    const {InputService} = req.body;
    try {
        const newService = await new Services({
          service : InputService
        })

        const saveService = await newService.save()
        console.log(saveService);
        res.redirect('/addadmin/GetService')


    } catch (error) {
        res.render('404')
    }
}


export const GetArea = async (req,res) => {
    try {
        const getdata = await Areas.find();
        res.render('GetArea.ejs',{areas:getdata})
    } catch (error) {
        res.status(404).json(error)
    }

}

export const GetNHBooking = async (req,res) => {
    try {
        const getdata = await NursingHome.find();
        res.render('GetNHBooking.ejs',{NHs:getdata})
    } catch (error) {
        res.status(404).json(error)
    }
}

export const GetPlace = async (req,res) =>{
    try {
        const getdata = await Places.find();
        res.render('GetPlace.ejs',{places:getdata})
    } catch (error) {
        res.status(404).json(error)
    }

}

export const GetService = async (req,res) => {
    try {
        const getdata = await Services.find();
        res.render('GetService.ejs', {services:getdata})
    } catch (error) {
        res.status(404).json(error)
    }
}

export const DelArea = async (req,res) => {
    await Areas.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}

export const DelService = async (req,res) => {
    await Services.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}

export const DelPlace = async (req,res) => {
    await Places.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}

export const DelNHBooking = async (req,res) => {
    await NursingHome.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}