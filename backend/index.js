const express=require('express');
const app= express();
const {createTodo,updateTodo} = require('./types');
const {Todos} = require("./db");

app.use(express.json());

app.get("/todos",async (req,res)=>{
    
    const todos = await Todos.find({});
    res.status(200).json(todos);

});

app.post("/todo",async (req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
    await Todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "Todo created"
    })

});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(todoId);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid todo Id"
        })
    }

    await Todos.updateOne({
        _id: updatePayload.Id
    },{
        completed: true
    });

    res.status(200).json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000);