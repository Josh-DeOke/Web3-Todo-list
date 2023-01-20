const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("ToDoList Smartcontract ", function () {

  let toDoList;
  const numOfTasks = 5;
  let totalTasks;
  
  this.beforeEach(async () => {

    const ToDoList = await ethers.getContractFactory("ToDoList");
    toDoList = await ToDoList.deploy();

    totalTasks = [];

    for(let i = 0; i < numOfTasks; i++) {
      let Task = {
        'task': 'Task number: - ' + i,
        'isDone': false
      };

      await toDoList.addTask(Task.task);
      totalTasks.push(Task);
    }
  })

  it("Task is added successfully", async () => {

    let Task = {
      'task': 'New Task',
      'isDone': false
    };

    expect(await toDoList.addTask(Task.task));
  });

  it("Task is read successfully", async () => {
    let taskIndex = 0;

    for(let i = 0; i < numOfTasks; i++) {
      taskIndex = i;
      };

    expect(await toDoList.readTask(taskIndex));

  });

  it("Task is updated successfully", async () => {
    let taskIndex = 0;
    let taskStatus = false;

    for(let i = 0; i < numOfTasks; i++) {
      taskIndex = i;
      taskStatus = true;
      };

    expect(await toDoList.updateTask(taskIndex, taskStatus));

  });

  it("Task is deleted successfully", async () => {

    const taskIndex = 0;
    expect(await toDoList.deleteTask(taskIndex));

  });

  it("Correct task count is shown", async () => {

    expect(await toDoList.getTaskCount()).to.equal(numOfTasks);

  });

})