'use strict';

var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

var Todo = require('./todo');
var TodoList = require('./todo_list');

console.log();
console.log('Let’s make a todo list...');

var todoList = new TodoList();
start();

function start() {
  console.log();
  prompt.question('What do you want to do ? Create a task, mark a task as Done, List all tasks, Quit >', function (answer) {
    switch (answer.toLowerCase()) {
      case 'c':
        create();
        break;
      case 'd':
        markAsDone();
        break;
      case 'l':
        list();
        break;
      case 'q':
        quit();
        break;
      default:
        console.log();
        console.log('Sorry, I didn’t understand... (c, d, l, q)');
        start();
    }
  });
}

function create() {
  console.log();
  prompt.question('What is the description of the task ?', function (answer) {
    var id = todoList.create(new Todo(answer));
    console.log('new task created with id ' + id);
    list();
  });
}

function list() {
  console.log();
  console.log('Here is your todo list..');
  console.log(todoList.toString());
  start();
}

function markAsDone() {
  console.log();
  prompt.question('Which task have you done (give the id) ? ', function (answer) {
    todoList.markAsDone(answer);
    console.log('task with id ' + id + ' has been marked as done');
    list();
  });
}

function quit() {
  console.log();
  console.log('’Hope to see you soon !');
  process.exit(0);
}