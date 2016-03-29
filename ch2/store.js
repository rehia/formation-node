'use strict';

function Store(innerStore, file) {
  this.innerStore = innerStore || {};
  this.file = file;
}

function newId() {
  // var date = new Date().toISOString();
  // return crypto.createHash('sha1').update(date).digest('hex').substr(0, 7);
}

function loadJSONFile(file) {
  // var finalFile = path.join(__dirname, file);
  // return new Store(JSON.parse(fs.readFileSync(finalFile, 'utf8')), file);
}

function saveToJSONFile(object, file) {
  // var finalFile = path.join(__dirname, file);
  // fs.writeFileSync(finalFile, JSON.stringify(object, null, 2), 'utf8');
}

function createTodo(store, todo) {
  // todo.id = newId();
  // store[todo.id] = todo;
  // return todo.id;
}

function deleteTodo(store, id) {
  // delete store[id];
}

function sortList(store, sort) {
  // return _.sortBy(_.values(store), sort);
}

function formatLine(id, description, done) {
  // return '# ' + id + ' # ' + done + ' # ' + description + ' #';
}

function formatTodo(todo) {
  // return formatLine(todo.id, todo.description, !!todo.done);
}

function Todo(description) {
  this.description = description;
}

Store.load;

Store.prototype.toString = function (sort) {

};

Store.prototype.save = function save() {

};

Store.prototype.create = function create(description) {

};

Store.prototype.delete = function del(id) {
  
};

module.exports = Store;