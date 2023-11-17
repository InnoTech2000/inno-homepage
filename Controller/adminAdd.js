import Areas from "../Models/Area.js";
import Places from "../Models/Place.js";
import Services from "../Models/Service.js";
import NursingHome from "../Models/NursingHome.js";
import Genders from "../Models/Gender.js";
import Room from "../Models/Room.js";
import Dormitory from "../Models/Dormitory.js";


// ------------- Area ------------

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
    // console.log(saveArea);
   res.redirect('/addadmin/GetArea')

    } catch (error) {
     res.status(404).json(error)   
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


export const GetPutArea = async (req,res) => {
    try {
        const getdata = await Areas.findById(req.params.id);
        res.render('GetPutArea' , {area : getdata})
    } catch (error) {
        res.status(404).json(error)
    }
}


export const PutAreaForm = async (req,res) => {

    try {
        const updata = await Areas.findByIdAndUpdate(req.params.id,{
            area : req.body.InputPutArea
        })
        const saveupdata =await  updata.save()
        console.log(saveupdata)
        res.redirect("/addadmin/GetArea")
    } catch (error) {
        res.status(404).json(error)
    }
}

export const DelArea = async (req,res) => {
    await Areas.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}

// ------------ Place--------------

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
        // console.log(savePlaces);
        res.redirect('/addadmin/GetPlace')
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

export const GetPutPlace = async (req,res) => {
    try {
        const getAreadata = await Areas.find();
        const getdata = await Places.findById(req.params.id);
        res.render('GetPutPlace' , {
            place : getdata ,
            Areas : getAreadata
        
        })
    } catch (error) {
        res.status(404).json(error)
    }
}


export const PutPlaceForm = async (req,res) => {

    try {
        const updata = await Places.findByIdAndUpdate(req.params.id,{
            area : req.body.InputPutArea,
            place : req.body.InputPutPlace
        })
        const saveupdata =await  updata.save()
        console.log(saveupdata)
        res.redirect("/addadmin/GetPlace")
    } catch (error) {
        res.status(404).json(error)
    }
}



export const DelPlace = async (req,res) => {
    await Places.findByIdAndDelete(req.params.id)
    res.redirect('/home')
}


// --------------NH---------------

export const GetAddNursingHome = async (req,res) => {
    try {
        const GetPlaces = await Places.find()
        const GetServices = await Services.find()
        res.render('AddNursingHome', {
            places : GetPlaces,
            services : GetServices
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
        InputServiceOption,
        InputServiceOption1,
        InputServiceOption2,
        InputServiceOption3,
        InputMultiple,
        InputSingle,
        InputPublic,
        InputAddress,
        InputOpenHour,
        InputContactPerson,
        InputPhone,
        InputStreet

    } = req.body;
    try {
        console.log(req.body);
        const newNH = await new NursingHome({
            hospitalname : InputHospitalName ,
            place : InputPlace , 
            price : InputPrice , 
            serve : InputServiceOption ,
            serve1 : InputServiceOption1 ,
            serve2 : InputServiceOption2 ,
            serve3 : InputServiceOption3 ,
            multiple : InputMultiple ,
            single : InputSingle , 
            public : InputPublic , 
            address : InputAddress,
            openhour : InputOpenHour,
            contactperson : InputContactPerson,
            hospitalphone : InputPhone,
            street : InputStreet,

        })
        const saveNH = await newNH.save()
        // console.log(saveNH)
        res.redirect('/addadmin/GetNHBooking')
    } catch (error) {
        res.status('404').json(error)
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

export const GetPutNHBooking = async (req,res) => {
    try {
        const getplacesdata = await Places.find();
        const getservicesdata = await Services.find();
        const getdata = await NursingHome.findById(req.params.id);
        res.render('GetPutNHBooking.ejs',{
            nhs : getdata ,
            places : getplacesdata,
            services : getservicesdata
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

export const PutNursingHomeForm = async (req,res) => {
const {
    InputPutPlace,
    InputPutAddress,
    InputPutHospitalName,
    InputPutPrice,
    InputPutPhone,
    InputPutMultiple,
    InputPutSingle,
    InputPutPublic,
    InputPutContactPerson,
    InputPutOpenHour,
    InputPutStreet

} = req.body;
    
    
    try {
        const updata = await NursingHome.findByIdAndUpdate(req.params.id,{
            place : InputPutPlace,
            address : InputPutAddress,
            hospitalname : InputPutHospitalName,
            price : InputPutPrice,
            hospitalphone : InputPutPhone,
            multiple : InputPutMultiple,
            single : InputPutSingle,
            public : InputPutPublic,
            contactperson : InputPutContactPerson,
            openhour : InputPutOpenHour,
            street : InputPutStreet
        })
        
        const saveupdata = await updata.save();


         res.redirect('/addadmin/GetNHBooking')

    } catch (error) {
        console.log(error)
    }
}



export const DelNHBooking = async (req,res) => {
    await NursingHome.findByIdAndDelete(req.params.id)
    res.redirect('/addadmin/GetNHBooking')
}

// -----------Service -------------


export const GetAddService = async (req,res) => {
    try {
        const getdata = await Dormitory.find();
        res.render('AddService',{dormitories : getdata})
    } catch (error) {
        res.render('404', {error : error})
    }
}

export const PostServiceForm = async (req,res) => {
    const {InputService , InputServicePrice , InputDormitory } = req.body;
    try {
        const newService = await new Services({
        //   dormitory : InputDormitory ,
          service : InputService , 
        //   servicePrice : InputServicePrice
        })

        const saveService = await newService.save()
        console.log(saveService);
        res.redirect('/addadmin/GetService')


    } catch (error) {
        res.render('404')
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


export const GetPutService = async (req,res) =>{
    try {
        const getdata = await Services.findById(req.params.id)
        res.render('GetPutService', {service : getdata})
    } catch (error) {
        res.render('404');
    }
}

export const PutServiceForm = async (req,res) => {
    const  {InputPutService} = req.body
    try {
        const updata = await Services.findByIdAndUpdate(req.params.id,{
            service : InputPutService
        })
        const saveupdata = await updata.save();
        res.redirect('/addadmin/GetService')

    } catch (error) {
        
    }
}


export const DelService = async (req,res) => {
    await Services.findByIdAndDelete(req.params.id)
    res.redirect('/addadmin/GetService')
}

// ---------------Gender--------------

export const GetAddGender = async (req,res) => {
    res.render('AddGender')
}

export const PostGenderForm = async (req,res) => {
    const { InputGender } = req.body;
    try {
        const newGender = await new Genders({
            gender:InputGender
        })
        const saveGender = await newGender.save()
        console.log(saveGender)
        res.redirect('/addadmin/GetGender')
    } catch (error) {
        res.render('404')
    }
}

export const GetGender = async (req,res) => {
    try {
        const getdata = await Genders.find();
        res.render('GetGender.ejs',{genders:getdata})
    } catch (error) {
        res.status(404).json(error)
    }

}

export const GetPutGender = async (req,res) =>{
    try {
        const getdata = await Genders.findById(req.params.id)
        res.render('GetPutGender', {gender : getdata})
    } catch (error) {
        res.render('404');
    }
}

export const PutGenderForm = async (req,res) => {
    const  {InputPutGender} = req.body
    try {
        const updata = await Genders.findByIdAndUpdate(req.params.id,{
            gender : InputPutGender
        })
        const saveupdata = await updata.save();
        res.redirect('/addadmin/GetGender')

    } catch (error) {
        
    }
}


export const DelGender = async (req,res) => {
    await Genders.findByIdAndDelete(req.params.id)
    res.redirect('/addadmin/GetGender')
}

//---------Dormitory---------
export const GetAddDormitory = async (req,res) => {
    res.render('AddDormitory')
}

export const PostDormitoryForm = async (req,res) => {
    const { InputDormitory } = req.body;
    try {
        const newDormitory = await new Dormitory({
            dormitory : InputDormitory
        })

        const saveDormitory = await newDormitory.save();

        res.redirect('/addadmin/GetDormitory')

    } catch (error) {
        res.render('404')
    }


}

export const GetDormitory = async (req,res) => {
    try {
        const getdata = await Dormitory.find();
        res.render('GetDormitory',{dormitorices : getdata})
    } catch (error) {
        res.render('404')
    }
}

export const GetPutDormitory = async (req,res) =>{
    try {
        const getdata = await Dormitory.findById(req.params.id)
        res.render('GetPutDormitory', {dormitory : getdata})
    } catch (error) {
        res.render('404');
    }
}

export const PutDormitoryForm = async (req,res) => {
    const  {InputPutDormitory} = req.body
    try {
        const updata = await Dormitory.findByIdAndUpdate(req.params.id,{
            dormitory : InputPutDormitory
        })
        const saveupdata = await updata.save();
        res.redirect('/addadmin/GetDormitory')

    } catch (error) {
        
    }
}


export const DelDormitory = async (req,res) => {
    try {
        await Dormitory.findByIdAndDelete(req.params.id)
        res.redirect('/addadmin/GetDormitory')
    } catch (error) {
        res.render(404)
    }
}

//----------- Room ---------

// export const GetAddRoom = async (req,res) => {

//     res.render('AddRoom')

// }

// export const GetRoom = async (req,res) => {

//     try {
//         const getdata = await Room.find();
//         res.render('GetRoom', {rooms : getdata})
//     } catch (error) {
//         res.render('404')        
//     }

// }

// export const PostRoomForm = async (req,res) => {
//     const { InputMultiple , InputSingle , InputPublic } = req.body;
//     try {
//         const newRoom = await new Room ({
//             multiple : InputMultiple,
//             single : InputSingle,
//             public : InputPublic
//         })
        
//         const saveRoom = await newRoom.save()

//         res.redirect('/addadmin/GetRoom')


//     } catch (error) {
//         res.render('404')
//     }

// }
// export const GetPutRoom = async (req,res) => {

//     try {
//         const getdata = await Room.findById(req.params.id)
//         res.render('PutRoom', { rooms : getdata })
        
//     } catch (error) {
//         res.render('404')
//     }


// }


// export const PutRoomForm = async (req,res) => {
//     const {
//         InputPutMultiple,
//         InputPutSingle,
//         InputPutPublic
//     } = req.body;
//     try {
//         const putdata = await Room.findByIdAndUpdate({
//             $set : req.body
//         },{new : true})
        
//         res.redirect('/addadmin/GetRoom')


//     } catch (error) {
//         res.render('404')        
//     }

// }


// ----- function ------


export const SearchNHBooking = async (req,res) =>{
    const {nameNH} = req.body;
    req.query.keyHN = nameNH
    try {
        const getdata = await NursingHome.find({
            "$or":[
                {place : new RegExp('^' +req.query.keyHN + '.*') },
                 {   street :  new RegExp('^' +req.query.keyHN + '.*') },
                  {  address :  new RegExp('^' +req.query.keyHN + '.*') },
                  {  contactperson :  new RegExp('^' +req.query.keyHN + '.*') },
                   { hospitalname :  new RegExp('^' +req.query.keyHN + '.*') },
                   { hospitalphone :  new RegExp('^' +req.query.keyHN + '.*') }
               
            ]
        });


        res.render('SearchNH',{NHs:getdata})


    } catch (error) {
        console.log(error)
    }
}


export const GetSearchNH = async (req ,res) => {
    res.render('GetSearchNH')
}