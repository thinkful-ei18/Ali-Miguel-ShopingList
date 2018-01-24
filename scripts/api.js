'use strict';

const api = function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/AliMig';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, data => console.log(data)); 
  };


  return {
    getItems,
  };
  
}();