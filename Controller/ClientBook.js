import NursingHome from '../Models/NursingHome.js';
import Client from '../Models/Client.js';

export const GetClientBook = async (req,res) => {
    try {

        const getdata = await Client.find();

        res.render('GetClientBook' , {Clients : getdata})
        
    } catch (error) {
        res.render('404')
    }
    
}

export const GetAddClientBook = async (req,res) => {

    
    try {

const getNHsdata = await NursingHome.find();

        console.log(getNHsdata)
        res.render('AddClientBook', { NHs : getNHsdata })
    } catch (error) {
        res.render('404')
    }


    
}

export const PostClientBookForm = async (req,res) => {
    const {
        Inputname,
        Inputphone,
        Inputhospital,


    } = req.body;

    try {

        const newClientBook = new Client({
            name : Inputname,
            phone : Inputphone,
            hospital : Inputhospital,

        })

        const saveClientBook = newClientBook.save()

        console.log(saveClientBook)


    res.redirect('/addadmin/GetClientBook')
} catch (error) {
    res.render('404')
}

}

export const DelClientBook = async (req,res) => {
    try {
        await Client.findByIdAndDelete(req.params.id)

        res.redirect('/addadmin/GetClientBook')
    } catch (error) {
       res.render('404') 
    }

}

export const GetPutClientBook = async (req,res) => {
try {
    const getdata = await Client.findById(req.params.id);
    const getNHsdata = await NursingHome.find();


   res.render('GetPutClientBook',{
    client : getdata,
    NHs : getNHsdata

}) 
} catch (error) {
    res.render('404')
}

    
}

export const PutClientBookForm = async (req , res) => {
    const {Inputname , Inputphone ,Inputhospital} = req.body;
    try {
        const updata = await Client.findByIdAndUpdate(req.params.id,{
            name : Inputname,
            phone : Inputphone,
            hospital : Inputhospital
        })
        const saveupdata = await updata.save()

        res.redirect('/addadmin/GetClientBook')

    } catch (error) {
        res.render('404');
    }

}