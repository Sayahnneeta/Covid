$(document).ready(function()
{
   var state= "Assam";
   $.getUpdate=function(state)
   {
     $.getJSON("https://api.covid19india.org/data.json",function(data){
      console.log(data);
    })
     
   }
})

