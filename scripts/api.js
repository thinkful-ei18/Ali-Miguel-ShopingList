'use strict';

const api = function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/AliMig';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, data => console.log(data)); 
  };
  const createItem = function (name,callback){
    const newItem ={
      name:name
    };
    
    $.ajax({
<<<<<<< HEAD
      url:`${BASE_URL}/items`,
=======
      url: `${BASE_URL}/items`,
>>>>>>> refs/remotes/origin/api
      method:'POST',
      contentType:'application/json',
      data:JSON.stringify(newItem),
      success:callback
    });
  };


  return {
    getItems,
    createItem
  };
  
}();