'use strict';
/* global api, shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
<<<<<<< HEAD
=======
});

store.items.push(Item.create('apples'));


api.createItem('pears', (newItem) => {
>>>>>>> c412837fdca114495fc2c3de1f0b4f766dd21d53
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

