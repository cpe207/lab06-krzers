// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try{
    const todo_res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

    try{
      const id = todo_res.data.userId;
      const person_res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      const return_obj = {
        "owner" : `${person_res.data.name}`,
        "title" : `${todo_res.data.title}` ,
        "completed": todo_res.data.completed,
      };
      return return_obj;
    }

    catch(err){
      return "INVALID TODO ID";
    }
  }
  
  catch(err){
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;