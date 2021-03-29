import axios from "axios";

async function setTask(task){
    return axios({
        method: "post",
        url: "/guildie/settask",
        data: task,
    })
    .then((res)=> {
        return res.data
    })
    .catch((err)=> {return err})
}

export const TaskAPI = {
    setTask,
  };