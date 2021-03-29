import React from "react";
import { TaskAPI } from "./TaskAPI";

function SetTaskButton(props) {
  const option = props.option;
  const taskType = props.taskType;
  const guildie = props.guildie;
  console.log(guildie);
  function submitTask(e) {
    e.preventDefault();
    console.log(option);
    const load = {
      task: {
        [taskType]: option._id,
        taskType: taskType,
      },
      guildie: guildie,
    };
    
    TaskAPI.setTask(load)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  let button;
  taskType
    ? (button = (
        <button onClick={submitTask} taskType={taskType}>
          {option.name}
        </button>
      ))
    : (button = <div>no taskType provided</div>);

  return button;
}

export default SetTaskButton;

// <SetButtonTask option={plade to do thing} taskType="goTo" guildie="" />
