
const User =require ('../model/userModel')

module.exports = {
  
   //Get----------------------------- 
    getUser:async(req,res)=>{
       try{
        const user = await User.find()
 res.json(user)
       } catch (error){
console.log(error.message)

       }
    } ,

    //Post-------------------------
    addUser: async (req,res) =>{
        const nom = req.body.nom
        const prenom = req.body.prenom
        try{
             user = new User({
                nom,
                prenom
            })
            await user.save()
            res.json(user)
        }catch (error) {
            console.log(error.message)
        }
    },

   //delete----------------------
    deleteUser : async(req,res)=>{
        
        try{
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user)
     } catch(error){
            console.log(error.message)
    } 
    },
    
    //update---------------------------
    updateUser: async(req,res)=>{
        try{
            const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true})
            res.json(user)
        }catch(error){
            console.log(error.message)
    } 
}
}