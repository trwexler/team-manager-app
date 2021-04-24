import React, {useState, useEffect} from 'react';
import {Link, navigation} from '@reach/router';
import axios from 'axios';
import Delete from '../components/Delete';


const ViewAll = (props)=>{

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((res)=>{
                console.log(res.data);
                setAllPlayers(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])



    return(
        <div>
            <table className=" my-12 border-4 border-black mx-auto w-80 "> 
            <tbody className="border-2 border-black">
                <tr className="border-2 border-black h-12">
                    <td className="border-2 border-black">Player</td>
                    <td className="border-2 border-black">Position</td>

                    <td className="border-2 border-black">Actions</td>
                </tr>
                {
                    allPlayers.map((player, index)=>(
                        <tr key={index} className="border-2 border-black h-16">
                            <td className="border-2 border-black">{player.name} </td>
                            <td className="border-2 border-black">{player.position}</td>
                            <td className="flex justify-evenly">

                            <Delete player={allPlayers} setPlayer={setAllPlayers} id={player._id}/>

                        
                            
                            </td>

                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default ViewAll;