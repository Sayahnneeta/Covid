$(document).ready(function ()
 {
    var state = "Assam";
    $.getState(state)
    $('.buttons').on('click', function (event) 
    {
        event.preventDefault();
        console.log($('.searchBox').val());
            if ($('.searchBox').val() != "")
           state = $('.searchBox').val();
        $.getState(state);
    });
});
    $.getState = function(state)
    {
       init2() 
        let user_input = "Assam";
        let date;
        let total;
        let active;
        let deaths;
        let recovered;
     function init2() 
      {
        var url = "https://api.covid19india.org/data.json"
        var data2 = '';
         $.get(url, function (data2) 
          {
             console.log(data2)
              let i = data2.statewise;
              for(i = 0; i<38; i++){
               if(user_input == data2.statewise[i].state){
                 active = data2.statewise[i].active;
                  break;
              }
          }
          console.log(active);
           data2 = `
               <td>${data2.statewise[i].state}</td>
               <td>${data2.statewise[i].lastupdatedtime}</td>
               <td>${data2.statewise[i].confirmed}</td>
               <td>${data2.statewise[i].active}</td>
               <td>${data2.statewise[i].deaths}</td>
               <td>${data2.statewise[i].recovered}</td>
              `
           $("#data2").html(data2)
       })
       function refreshData2() {
        clearData2()
        init2()
  
    }
    function clearData2() {
        $("#data2").empty()
    }
  }
}