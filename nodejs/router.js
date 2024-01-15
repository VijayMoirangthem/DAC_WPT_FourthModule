const router = require('express').Router();

const Table = require('./Table');


router.get("/Student" , async function getAll(req , res){
const Student = await Table.findAll();
res.send(Student); 
});


router.get("/Student:id" , async function getID(req , res){
const id = req.params.id;
const Student = await Table.findByPk(id);
res.send(Student);
});


router.post("/Student" , async function insertValue(req , res){
    const data = req.body;
    const newCreated = await Table.create(data);
    res.json(newCreated);
});

router.delete("/Student:id" , function deleteValue(req , res){
    try{
    const id = req.params.id;
    const Student = Table.destroy({where : {StudID:id}});
    res.send(Student);
    }
    catch(error){

    }
});


router.put("/Student" , async function updateValue(req , res){
    const data = req.body;
    const updateObject = {...data};
    delete updateObject.StudID;
    const UpdatedCount = await Table.update(updateObject , {where : {StudID : data.StudID}});
    res.json(UpdatedCount);
});


module.exports = router;