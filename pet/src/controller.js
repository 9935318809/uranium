const petModel = require("./model");

const isValid = function (value){
    if (typeof value ==='undefined'|| value === null) return false
    if (typeof value === 'string' && value.trim().length === 0)return false
    return true;
  }

  const isValidRequestBody = function(requestBody){
    return Object.keys(requestBody).lenght != 0
  }

//   const isValidObjectId = function (Id) {
//     return mongoose.isValidObjectId(Id)          
// }

const petregistration = async function(req, res){
    try{
      const requestBody = req.body;
      if(!isValidRequestBody(requestBody)){
        res.status(400).send({status: false, massage: 'Invalid request parameters. please provid pet details'})
        return
      }
      //Extract params
      const {name, type, breed,age} = requestBody;  //Object destructing
  
      // validation starts
      if(!isValid(name)){
        res.status(400).send({status: false, message: 'Pet name is required'})
        return
      }
      
      if(!isValid(type)){
        res.status(400).send({status: false, message: 'Type is required'})
        return
      }
      if(!isValid(breed)){
        res.status(400).send({status: false, message: 'breed is required'})
        return
      }
      if(!isValid(age)){
        res.status(400).send({status: false, message: 'Age is required'})
        return
      }
  
      if((!(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(age)))){
        res.status(400).send({status: false, message: 'please provide valid age'})
        return
      }
     
      // Validation ends
  
      const petData = {name, type, breed,age}
      const pet_information = await petModel.create(petData);
      
      res.status(201).send({status: true, message: `pet information created successfully`, data:pet_information });
  
    }catch(error){
      console.log(error)
      res.status(500).send({msg: false, data: error.message})
    }
  }
//******************************************************************************************************************************** */

  const getPet = async function (req,res){
    try{
      const queryParams = req.query
      
      if (isValidRequestBody(queryParams)) {
        const { name, type, breed,age } = queryParams
      }
      const findPet = await petModel.find(queryParams)
      res.status(200).send({status:true, message:"petList",data:findPet})
    }catch(error){
      console.log(error)
      res.status(500).send({msg:false,data:error.message})
    }
  }
 //******************************************************************************************************************************* */
 
 const getPetById = async function(req,res){
  try{
  const petId = req.params.petId
  console.log(petId)

  const get_pet = await petModel.findById({_id : petId})
  if(!get_pet)
  return res.status(400).send({status:false,message:"no pet found"})

  return res.status(200).send({status:true,message:"success",data:get_pet})
  }catch(error){
    console.log(error)
     res.status(500).send({msg:false, data:error.message})
  }
 }
//******************************************************************************************************************************* */

const updatePetById= async function(req,res){
  try{
    const petId = req.params.petId
        const requestUpdateBody = req.body
        const { name, type, breed,age } = requestUpdateBody

        const petToBeUpdated = await petModel.findOne({ _id: petId })
        if (!petToBeUpdated) return res.status(404).send({ status: false, massage: "This pet does not exist " })

  const updatedPets = await petModel.findOneAndUpdate({ _id: petId },{ name:name, type: type, breed: breed, age: age },{ new: true })
        res.status(200).send({ status: true, message: "update successfully", data: updatedPets })

  }catch(error){
    console.log(error)
    res.status(500).send({status:false, data:error.message})
  }
}


//**************************************************************************************************************************,******* */

const DeletePet= async function(req,res){
  try{
    const petId = req.params.petId

    const deletepet = await petModel.findByIdAndRemove({_id:petId})
    res.status(200).send({status:true,message:"pet is deleted",data:deletepet}) 
        

  }catch(error){
    console.log(error)
    res.status(500).send({status:false, data:error.message})
  }
}
module.exports = {petregistration,getPet,getPetById,updatePetById,DeletePet};