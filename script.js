  
   $(document).ready(function ()
   {
       let state='Assam';
       $('.buttons').on('click', function (event)    
       {
           event.preventDefault();
           console.log($('.searchBox').val());
           if ($('.searchBox').val() != ""){
              state = $('.searchBox').val();
              console.log($('.searchBox').val());
              localStorage.setItem('state',$('.searchBox').val());
           }
           location.href = '/api.html';
        });
        // getState(state);
        getState(localStorage.getItem('state'));

     });
          getState = function(state)
         {
             let user_input =state;
             let date;
             let total;
             let active;
             let deaths;
             let recovered;
             var url = "https://api.covid19india.org/data.json"
              var data2 = '';
               $.get(url, function (data2) 
                {
                  console.log(data2)
                    let i = data2.statewise;
                     for(i = 1; i<38; i++)
                      {
                        if(user_input == data2.statewise[i].state)
                          {
                            date=  data2.statewise[i].lastupdatedtime;
                            total= data2.statewise[i].confirmed;
                            active = data2.statewise[i].active;
                            deaths=data2.statewise[i].deaths;
                            recovered=data2.statewise[i].recovered;
                            break;
                          }
                      }
                   console.log(state);
                    data2 = `
                     <td>${data2.statewise[i].state}</td>
                     <td>${data2.statewise[i].lastupdatedtime}</td>
                     <td>${data2.statewise[i].confirmed}</td>
                     <td>${data2.statewise[i].active}</td>
                     <td>${data2.statewise[i].deaths}</td>
                     <td>${data2.statewise[i].recovered}</td>
                      `
                   $("#data2").html(data2)

                  });
                  function refreshData2()
                    {
                      clearData2()
                      getState(state)
                    }
                    function clearData2() 
                     {
                        $("#data2").empty()
                     }
            
            }
            
     
 
    // let j=user_input;
    // $.user_input=function()
    // {
    //       for(let j=0;j<user_input.length;j++)
    //           {
    //               if(user_input[j]>=97 && user_input[j]<=122) //small
    //                   {
    //                        user_input[0]=user_input[j]-32;
    //                    }
          
    //               else if(user_input[j]>=65 && user_input[j]<=90)
    //                    {
    //                        user_input[0]==user_input[j];
    //                       user_input[j]=user_input[j]+32;
    //                    }
    //               return user_input;
    //             console.log(user_input);
    //           }  
    //   }
      
               