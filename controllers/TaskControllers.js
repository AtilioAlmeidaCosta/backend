const TaskModel = require("../models/TaskModel");
module.exports.getTasks=async(req,res)=>{
    const task= await TaskModel.find();
    res.send(task);
}

module.exports.saveTask=(req,res)=>{
    const{task}=req.body;
    TaskModel.create({task})
    .then((data)=>{
        console.log("Criado com sucesso");
        res.status(201).send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.send({error:err, msg: "Alguma coisa está errada"});
    });
}

module.exports.updateTask=(req,res)=>{
    const {id}=req.params;
    const{task}=req.body;
    TaskModel.findByIdAndUpdate(id,{task}).then(()=> res.send("Atualizado com sucesso"))
    .catch((err)=>{
        console.log(err);
        res.send({error:err, msg: "Alguma coisa está errada"});
    });
}
module.exports.deleteTask=(req,res)=>{
    const {id}=req.params;
    TaskModel.findByIdAndDelete(id).then(()=> res.send("Deletado com sucesso"))
    .catch((err)=>{
        console.log(err);
        res.send({error:err, msg: "Alguma coisa está errada"});
    });
}