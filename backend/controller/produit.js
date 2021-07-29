


const Produits = require('../model/produitModel')
module.exports={

    //getProduct---------------------------------------
    getProduit:async(req,res)=>{
        try{
         const produit = await Produits.find()
  res.json(produit)
        } catch (error){
 console.log(error.message)
 
        }
     } ,

     //Postproduct-------------------------
    addProduit: async (req,res) =>{
        const nom = req.body.nom
        const reference = req.body.reference
        const prix = req.body.prix
        try{
             produit = new Produits({
                nom,
                reference,
                prix
            })
            await produit.save()
            res.json(produit)
        }catch (error) {
            console.log(error.message)
        }
    },
//deleteproduit----------------------
    deleteProduit : async(req,res)=>{
        
        try{
        const produit = await Produits.findByIdAndDelete(req.params.id)
        res.json(produit)
     } catch(error){
            console.log(error.message)
    } 
    },
//update---------------------------
updateProduit: async(req,res)=>{
    try{
        const produit = await Produits.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.json(produit)
    }catch(error){
        console.log(error.message)
} 
}
}


