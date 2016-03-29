#!/usr/bin/env node
'use strict';

program
  .version('0.0.1')
  .option('-l, --list [sort]', 'display todo list sorted (default : description)', 'description')
  .option('-c, --create <todo>', 'add the specified todo')
  .option('-d, --delete <id>', 'delete the specified todo')
  .option('-s, --store [json]', 'use the specified json as store', 'store.json')
  .parse(process.argv);

// var store = Store.load(program.store);
//
// if (program.list) {
//  console.log(store.toString(program.list));
// } else if (program.create) {
//  var id = store.create(program.create);
//  console.log('task created with id ' + id);
// } else if (program.delete) {
//  store.delete(program.delete);
//  console.log('task with id ' + program.delete + ' deleted');
// }
//
// store.save();
