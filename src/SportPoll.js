import test from "./test-assignment";
import React from 'react'

class SportPoll extends React.Component{

    /**
     *
     * @returns {*}
     */
    // Execution point for sport poll view;
    // The render is inherit from React Component for rendering Element
    render(){

        return this.view();
    }


    // The view function is function that display event object
    view(){
        return (<div>
            <div className="bar"><span className="title">Event </span><span id="teams_place_holder"> </span> <span id="score"> </span><div className="vote"><input id="vote" type="button" value="Vote"/></div></div>
            <div>
                <div className='sport_event'>

                    <table id="event_items">
                        <tbody>
                        <tr>
                            <th>
                                Away
                            </th>
                            <th>
                                Home
                            </th>

                            <th>
                                Name
                            </th>


                            <th>
                                Group
                            </th>
                            <th>
                                Sport
                            </th>
                            <th>
                                State
                            </th>
                            <th>
                                Country
                            </th>
                            <th>
                                Created date
                            </th>
                            <th>
                                ID
                            </th>
                        </tr>
                        </tbody>



                    </table>
                </div>
            </div>
        </div>);
    }

    // The Event table data function query for Event data.
    eventTableData(val){
        let eventItems=document.querySelector("#event_items");
        eventItems.innerHTML+=`
          <tr>
          <td title="click to select Away" class="team">
             ${val.awayName}
          </td>
          <td title="click to select Home" class = "team" >
             ${val.group}
         
              </td>
              
               <td class = "group" >
                   ${val.homeName}
              </td>
               
               <td class = "name" >
               ${val.name}
              </td>
               <td class = "sport_type" >
               ${val.sport}
              </td>
               <td class = "state" >
               ${val.state}
              </td>
               <td class = "home_name" >
               ${val.country}
              </td>
               <td class = "create_date" >
              ${val.createdAt}
              </td>
              <td class = "id" >
                 ${val.id}
              </td>
             
          </tr>
      
          `
    }

    //The execute database engine function query and prepare statement for the eventTableData function;

    executeDBEngine(){
        let eventList=JSON.parse(JSON.stringify(test));

        let shuffle=Math.floor(Math.random() * Math.floor(5));
        var state=[];
        let index=1;

        for(let val of eventList){


            if(shuffle.valueOf()===0 && val.sport==="FOOTBALL"){
                this.eventTableData(val);
                state[index]=val.state;
                ++index;


            }else  if(shuffle.valueOf()===1 && val.sport==="SNOOKER"){
                this.eventTableData(val);
                state[index]=val.state;
                ++index;


            } else  if(shuffle.valueOf()===2 && val.sport==="HANDBALL"){
                this.eventTableData(val);
                state[index]=val.state;
                ++index;


            }else if(shuffle.valueOf()===3 && val.sport==="ICE_HOCKEY"){
                this.eventTableData(val);
                state[index]=val.state;
                ++index;


            }else if(shuffle.valueOf()===4 && val.sport==="TENNIS"){
                this.eventTableData(val);
                state[index]=val.state;
                ++index;

            }





        }

        this.voteEngine(state);
    }

    //The vote engine determines the poll winner or draw
    voteEngine(state){
        let team=document.querySelectorAll(".team");
        let teamCss="background-color:green; color:white";
        let vote=document.querySelector("#vote");
        let winner=document.querySelector("#teams_place_holder");
        let score=document.querySelector("#score");
        var awayEngine;
        var homeEngine;
        let count=0;


        team.forEach(function (el,key) {

            el.addEventListener("click",function (ev) {
                el.style.cssText=teamCss;
                ev.preventDefault();
                ev.stopImmediatePropagation();
                awayEngine=Math.floor(Math.random() * Math.floor(5));
                homeEngine=Math.floor(Math.random() * Math.floor(5));
                const rows = document.querySelectorAll('tr');
                const rowsArray = Array.from(rows);
                const rowIndex = rowsArray.findIndex(row => row.contains(ev.target));


                if(state[rowIndex]==="FINISHED"){

                    el.style.cssText="background-color:white color:black";
                    alert("The poll has already finished, choose another team" )
                } else if(key===0){
                    count+=1;
                    return false;

                }else {

                    count+=1;
                    return false;
                }

            });



        });

        vote.addEventListener("click",function (e) {
            if(count<=1){
                alert("needed two team to vote");
                return false;
            }else {
                if(awayEngine>homeEngine){
                    winner.textContent="Away Team";
                    score.textContent="Wins";
                    count=0;
                }else  if(homeEngine>awayEngine) {
                    winner.textContent="Home Team";
                    score.textContent="Wins";
                    count=0;

                }else {
                    winner.textContent="Team";
                    score.textContent="Draw";
                    count=0;
                }

            }
            team.forEach(function (el) {

                el.style.cssText="background-color:white; color:black";
            });

            e.stopImmediatePropagation();
            e.preventDefault();
        });





    }
    componentDidMount() {
        this.executeDBEngine();


    }


}
export default SportPoll
