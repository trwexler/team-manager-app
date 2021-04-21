import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ViewAll from '../components/ViewAll';
import AddPlayer from '../components/AddPlayer';
import PlayerStatus from '../components/PlayerStatus';
import {Router, navigate, Link} from '@reach/router';


const Main = (props)=>{



    return(
        <div className="w-3/4 border mx-auto">

            <div className="flex">
                <h2 onClick={(e)=>navigate('/player')}>Manage Players</h2>
                <h2>Manage Player Status</h2>
            </div>


            <div className="border-4">
                <div className="border flex">
                    <h2 onClick={(e)=>navigate('/')}>List</h2>
                    <h2 onClick={(e)=>navigate('/player')}>Add Player</h2>
                </div>

                <Router>
                    <ViewAll default />
                    <AddPlayer path="/player"/>
                    <PlayerStatus path="/playerStatus"/>
                </Router>

            </div>

        </div>
    )
}

export default Main;