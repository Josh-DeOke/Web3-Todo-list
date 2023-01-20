// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract ToDoList {
    // create task
    struct Task {
        string task;
        bool isDone;
    }

    // mapping to store the list of tasks with associated addresses
    mapping(address => Task[]) private users;

    // function to add tasks
    function addTask(string calldata _task) external {
        users[msg.sender].push(Task({
            task:_task,
            isDone:false
        }));   
    }

    // funtion to read created tasks
    function readTask(uint _taskIndex) external view returns(Task memory) {
        Task storage task = users[msg.sender][_taskIndex];
        return task;
    }

    // function to update the status of a given task
    function updateTask(uint _taskIndex, bool _status) external{
        users[msg.sender][_taskIndex].isDone = _status;
    }

    // function to to delete tasks
    function deleteTask(uint _taskIndex) external {
        delete users[msg.sender][_taskIndex];
    }

    // function to view task count
    function getTaskCount() external view returns(uint) {
        return users[msg.sender].length;
    }
}

