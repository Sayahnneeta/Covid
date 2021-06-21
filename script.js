$(document).ready(function ()
{
    let state='Assam';
    $('.buttons').on('click', function (event)    
    {
        event.preventDefault();
       //  console.log($('.searchBox').val());
        if ($('.searchBox').val() != ""){
           state = $('.searchBox').val();
           let v=state;
           let v2=v.charAt(0).toUpperCase() + v.slice(1);
             console.log(v2);
           // console.log($('.searchBox').val());
           localStorage.setItem('v2',$('.searchBox').val());
        }
        location.href = '/api.html';
     });
    
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
//                    var x=date;
//                   var x2=x.replaceAll('/'," ");
//                   if(x2=" ")
//                   {
//                     x2-1;            
//                   }
//                   //  var x2=x.split("")
                   
                   console.log(x2);
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
         
  
                  // let j=state;
                  // $.state=function()
                  // {
                    //       for(j=0;j<state.length;j++)
                    //           {
                      //               if(state[j]>=97 && state[j]<=122) //small
                      //                   {
                        //                        state[0]=state[j]-32;
                        //                    }
                        
                        //               else if(state[j]>=65 && state[j]<=90)
                        //                    {
                          //                        state[0]==state[j];
                          //                       state[j]=state[j]+32;
                          //                    }
                          //               return state;
                          //             console.log(state);
                          //           }  
                          //   }
                          
                          
                          
                          
                          //  let v=$('.searchBox').val()
                          //  let v2=v.charAt(0).toUpperCase() + v.slice(1);
                          //  console.log(v2);
