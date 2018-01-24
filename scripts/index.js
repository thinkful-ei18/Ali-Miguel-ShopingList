'use strict';
/* global api, shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  //initial get items
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();


    
  });

});

