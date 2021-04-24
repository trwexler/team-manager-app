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
        <div className="h-full">
            <form onSubmit={submitHandler} className="h-60 pt-6">

                <div className="w-1/2 mx-auto">
                <label className="text-lg" htmlFor="">Name:</label>
                <br/>
                <input className=" mb-4 mx-1 border-2 w-3/5" type="text" name="name" onChange={inputChange}/>
                </div>

                <p></p>

                <div className="w-1/2 mx-auto ">
                <label className="text-lg" htmlFor="">Position:</label>
                <br/>
                <select className=" mx-1 border-2 w-3/5 cursor-pointer"  
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
                </div>
                <button className="border-2 mt-4 p-2">Add</button>

            </form>
        </div>
    )
}

export default AddPlayer;