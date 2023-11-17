import NursingHome from "../Models/NursingHome.js";
import Client from "../Models/Client.js";


export const GetSearch = async (req,res) => {
            try{
    
            res.render('GetSearch')
    
        } catch (error) {
            res.render('404')
        }
    
}


export const SearchF = async (req,res)=>{
    const {name} = req.body;
    req.query.key = name
    console.log(req.query.key)
    try  {
        const data = await Client.find({
            "$or":[
              { name : new RegExp('^' +req.query.key + '.*')},
                {phone : new RegExp('^' + req.query.key + '.*')},
            {hospital : new RegExp('^' + req.query.key + '.*')}
            ]
        })




        res.render('SearchF',{datas : data});

    } catch (error) {
        console.log(error)
    }
   
}