import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ViewAll from '../components/ViewAll';
import AddPlayer from '../components/AddPlayer';
import PlayerStatus from '../components/PlayerStatus';
import {Router, navigate, Link} from '@reach/router';


const Main = (props)=>{

    const dayArr = [
        {date:"dayOneStatus", name:"Game One" },

        {date:"dayTwoStatus", name:"Game Two" },

        {date:"dayThreeStatus", name:"Game Three" }
        
    ]

    const [id, setId] = useState("");

    const [dayIndex, setDayIndex] = useState(0);

    const [day, setDay] = useState(dayArr);

    const[pageStyle, setPageStyle]=useState(3);


    const pageChanger = (e)=>{

        setPageStyle(e.target.id);

        console.log(pageStyle);
        
    }




    return(
        <div className="w-3/4 border mx-auto h-screen">

            <div className="flex ">
{               
                pageStyle == 1?
                <Link to="/player"><h2 value="1" id="1" className="mx-1 text-red-500 text-xl underline cursor-pointer" onClick={pageChanger}>Add to Roster <span className="text-black">|</span></h2></Link>
                :<Link to="/player"><h2 value="1" id="1" className="mx-1 text-xl cursor-pointer" onClick={pageChanger}>Add to Roster <span className="text-black">|</span></h2></Link>

}

{               
                pageStyle == 2?
                <Link to="/playerStatus"><h2 value="2" id="2" className="mx-1  text-red-500 text-xl underline cursor-pointer" onClick={pageChanger}>Manage Player Availability</h2></Link>
                :<Link to="/playerStatus"><h2 value="2" id="2" className="mx-1 text-xl cursor-pointer" onClick={pageChanger}>Manage Player Availability</h2></Link>

}

                


            </div>


            <div className="border-4">
                <div className="border flex">





{               
                pageStyle == 3?
                <Link to="/"><h2 value="3" id="3" className="mx-1 text-red-500 text-xl underline cursor-pointer" onClick={pageChanger}>List <span className="text-black">|</span></h2></Link>
                :<Link to="/"><h2 value="3" id="3" className="mx-1 text-lg cursor-pointer" onClick={pageChanger}>List <span className="text-black">|</span></h2></Link>
                

}
                   

{               
                pageStyle == 4?
                <Link to="/player"><h2  value="4" id="4"className="mx-1 text-red-500 text-xl underline cursor-pointer" onClick={pageChanger}>Add Player</h2></Link>
                :<Link to="/player"><h2  value="4" id="4"className="mx-1 text-lg cursor-pointer" onClick={pageChanger}>Add Player</h2></Link>


}


                </div>

                

                <Router>
                    <ViewAll default />
                    <AddPlayer path="/player"/>
                    
                    <PlayerStatus path="/playerStatus" id={id} setId={setId} day={day} setDay={setDay} dayIndex={dayIndex} setDayIndex={setDayIndex}/>
                </Router>

            </div>

        </div>
    )
}

export default Main;