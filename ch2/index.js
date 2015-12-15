'use strict';

var program = require('commander');

program
  .version('0.0.1')
  .option('-l, --list [sort]', 'display todo list sorted (default : description)')
  .option('-c, --create <todo>', 'qdd the specified todo')
  .option('-d, --delete <id>', 'delete the specified todo')
  .option('-s, --store [json]', 'use the specified json as store', 'store.json')
  .parse(process.argv);

//var store = Store.load(path.join(__dirname, program.store));

//if (program.list) {
//  console.log(store.toString());
//} else if (program.create) {
//  var id = store.create(program.create);
//  console.log('task created with id ' + id);
//} else if (program.delete) {
//  store.delete(program.delete);
//  console.log('task with id ' + id + ' deleted');
//}
//
//store.save();


