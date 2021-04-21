import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const Delete = (props) => {

    const {id, player, setPlayer} = props;
   
    const deletePlayer = id => {
        setPlayer(player.filter(item => item._id !== id));
    }

    const removePlayer = ()=>{
        axios.delete('http://localhost:8000/api/player/' + id)
            .then(response=>{
                deletePlayer(id);
                console.log(response.data); 
            })
            .catch((err)=>console.log(err));
            navigate('/');
    }
    return (
        <button className="p-2 mt-2 mx-1 border border-black w-20 bg-gradient-to-b from-yellow-300  to-gray-700 text-white rounded" onClick={(e)=>removePlayer(id)}>
            Delete
        </button>
    )
}
export default Delete;
