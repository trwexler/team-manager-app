import React, {useState, useEffect} from 'react';
import {Link, navigate, navigation} from '@reach/router';
import axios from 'axios';


const AddPlayer = (props)=>{



    const positions = [
        "PG",
        "SG",
        "SF",
        "PF",
        "C"
    ];

    const [player, setPlayer] = useState({
        name:"",
        position: "",
    })

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((res)=>{
                console.log(res.data);
                setPlayer(res.data);
            })
            .catch((err)=>{
                console.log(err.message);
            })
    },[])

    const [errors, setErrors] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/player', player)
            .then((res)=>{
                console.log(res.data);
                setPlayer(res.data);
                navigate('/');
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

    }


    const inputChange = (e)=>{
        console.log("e.target.name:  " + e.target.name);
        console.log("e.target.value: " + e.target.value);

        let newStateObject = {...player};
        newStateObject[e.target.name]= e.target.value;
        setPlayer(newStateObject);
    }



    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={inputChange}/>

                <label htmlFor="">Position:</label>

                <select 
                name="position"
                value={player.position}
                onChange={inputChange}
                >

                <option value=""></option>
      
                {
                    positions.map((position, index)=>(
                        <option 
                        value={position} key={'position-' + index}>{
                            position}</option>
                    ))
                }



                </select>

                <button>Add</button>

            </form>
        </div>
    )
}

export default AddPlayer;