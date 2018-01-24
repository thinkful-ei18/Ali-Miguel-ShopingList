'use strict';
/* global api, shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  //initial get items
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();

    //update tester
    const item = store.items[1];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'aliandmiguel' });
    console.log('new name: ' + item.name);
  });

});

