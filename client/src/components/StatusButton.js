import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const StatusButton = (props) => {

    const {player, day, dayIndex, setDay, setDayIndex, index} = props;

    const [playerStatus, setPlayerStatus] = 
    useState(["dayOneStatus", "dayTwoStatus", "dayThreeStatus" ]);
        


    //how can i access this object's keys progammically without using the name [1, etc]

    //if not that way, hwo can i concat to add my 
    // "player status" string to person."string that matches key here"
     


    const editStatus = (e)=>{
        



        setDayIndex(dayIndex);

        // console.log(player.day);

        // let newPlayer = {...player, status:e.target.value}
        // // player.status = e.target.value;


        // console.log(playerStatus[dayIndex]);

        

        // // let newPlayer = {...player, newStat};
       

        // console.log(playerStatus);
        // // console.log("newStat : " + newStat);
        // // console.log( "player[newStat] : " + player[newStat]);
        // // console.log("newPlayer : "  + newPlayer);

        // console.log(player[playerStatus]);



        
        
      
       


//  let newPlayer = {...player, playerStatus};
//         console.log(newPlayer.playerStatus);
//         console.log(playerStatus[dayIndex]);
//         console.log(newPlayer);
//         console.log(`player.${playerStatus[dayIndex]}`);

//         JSON.stringify(`player.${playerStatus[dayIndex]}`)

        

        // player.concat(playerStatus[dayIndex])
        // {`${player}.${dayOneStatus[dayIndex]}`}

        // if( dayIndex == 0){
        //     player.dayOneStatus = e.target.value;
        //     console.log(dayIndex);
        // }
        // else if (dayIndex == 1 ){
        //     player.dayTwoStatus = e.target.value;
        //     console.log(dayIndex);
        // }
        // else if (dayIndex == 2 ){
        //     player.dayThreeStatus = e.target.value;
        //     console.log(dayIndex);
        // }

        // if( dayIndex == 0){
        //     player[playerStatus[dayIndex]] = e.target.value;
        //     console.log(dayIndex);
        // }
        // else if (dayIndex == 1 ){
        //     player[playerStatus[dayIndex]] = e.target.value;
        //     console.log(dayIndex);
        // }
        // else if (dayIndex == 2 ){
        //     player[playerStatus[dayIndex]] = e.target.value;
        //     console.log(dayIndex);
        // }
        
        

        setDayIndex([dayIndex]);

        player[playerStatus[dayIndex]] = e.target.value;


        
        axios.put('http://localhost:8000/api/player/' + player._id , player)
            .then((response)=>{
                console.log(response.data.name);
                console.log(player);
                console.log(dayIndex);
            })
            .catch((err)=>{
                console.log(err);
            })
    }


    return (
        <div>

        {/* <button     
            onClick={editStatus}
            name="Playing"
            value="Playing" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Playing
        </button>

        <button     
            onClick={editStatus}
            name="Not Playing"
            value="Not Playing" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Not Playing
        </button>

        <button     
            onClick={editStatus}
            name="Undecided"
            value="Undecided" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Undecided
        </button> */}



{
    player[playerStatus[dayIndex]] == "Playing" ?
         <button     
            onClick={editStatus}
            name="Playing"
            value="Playing" 
            className=" bg-green-200 p-2 mt-2 mx-1 
            border-4 border-black w-26 rounded" >
            Playing
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Playing"
            value="Playing" 
            className="p-2 mt-2 mx-1  border-black w-26 rounded" >
            Playing
        </button>
}


{
    player[playerStatus[dayIndex]] == "Not Playing" ?
         <button     
            onClick={editStatus}
            name="Not Playing"
            value="Not Playing" 
            className=" bg-red-200 p-2 mt-2 mx-1 
            border-4 border-black w-26 rounded" >
            Not Playing
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Not Playing"
            value="Not Playing" 
            className="p-2 mt-2 mx-1 border-black w-26 rounded" >
            Not Playing
        </button>

}


{
    player[playerStatus[dayIndex]]  == "Undecided" ?
         <button     
            onClick={editStatus}
            name="Undecided"
            value="Undecided" 
            className=" bg-yellow-200 p-2 mt-2 mx-1 
            border-4 border-black w-26 rounded" >
            Undecided
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Undecided"
            value="Undecided" 
            className="p-2 mt-2 mx-1 border-black w-26 rounded" >
            Undecided
        </button>
} 






{/* 
{
    dayIndex == 0 && player.dayOneStatus == "Playing" ?
         <button     
            onClick={editStatus}
            name="Playing"
            value="Playing" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Playing
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Playing"
            value="Playing" 
            className="p-2 mt-2 mx-1  border-black w-20 rounded" >
            Playing
        </button>
}


{
    dayIndex == 0 && player.dayOneStatus  == "Not Playing" ?
         <button     
            onClick={editStatus}
            name="Not Playing"
            value="Not Playing" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Not Playing
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Not Playing"
            value="Not Playing" 
            className="p-2 mt-2 mx-1 border-black w-20 rounded" >
            Not Playing
        </button>

}


{
    dayIndex == 0 && player.dayOneStatus  == "Undecided" ?
         <button     
            onClick={editStatus}
            name="Undecided"
            value="Undecided" 
            className="p-2 mt-2 mx-1 
            border-4 border-black w-20 rounded" >
            Undecided
        </button>
        : 
        <button     
            onClick={editStatus}
            name="Undecided"
            value="Undecided" 
            className="p-2 mt-2 mx-1 border-black w-20 rounded" >
            Undecided
        </button>
}  */}


        </div>
    )
}
export default StatusButton;




    //1. func with 3 diff states. Each state = className for playing status. classname not playing, etc.
    //Look at obj and determine class


    //2. pass in stat string as parameter. passes in "classes" string. Call function with player.status as parameter.


    // Make status
    // an array of
    // strings.
    

    // Make state in player status
    
    // Single string
    // in array for
    // day state