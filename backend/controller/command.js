

const command = require('../model/commandModel')
module.exports={

    //getcommand---------------------------------------
    getCommand:async(req,res)=>{
        try{
         const command = await Command.find()
  res.json(command)
        } catch (error){
 console.log(error.message)
 
        }
     } ,

     //Postproduct-------------------------
    addCommand: async (req,res) =>{
        const nom=req.body.nom
        const reference=req.body.reference
        const prix=req.body.prix
        try{
             produit = new Command({
                nom,
                reference,
                prix
            })
            await command.save()
            res.json(command)
        }catch (error) {
            console.log(error.message)
        }
    },
//deletecommand----------------------
    deleteCommand : async(req,res)=>{
        
        try{
        const command = await Command.findByIdAndDelete(req.params.id)
        res.json(command)
     } catch(error){
            console.log(error.message)
    } 
    },
//update---------------------------
updateCommand: async(req,res)=>{
    try{
        const command = await Command.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json(command)
    }catch(error){
        console.log(error.message)
} 
}
}


