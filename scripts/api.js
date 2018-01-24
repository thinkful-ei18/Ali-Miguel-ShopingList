'use strict';

const api = function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/AliMig';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback); 
  };
  const createItem = function (name,callback){
    console.log('123')
    const newItem ={
      name:name
    };
    
    $.ajax({
      url:`${BASE_URL}/items`,
      method:'POST',
      contentType:'application/json',
      data:JSON.stringify(newItem),
      success:callback,
    });
  };


  return {
    getItems,
    createItem
  };
  
}();