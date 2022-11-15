import React from 'react'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
const App = () => {
    
const[value,setvalue]=useState(0);

const increment = ()=>{
    setvalue(value+1);
}
const decrement = ()=>{
    setvalue(value-1);
    if(value===0){
        alert("limit");
        setvalue(0);
    }
    
}

    return (
        <>
            <div className='main'>
                <div className='center'>
                    <h1>{value}</h1>
                    <div className='box'>
                    <Tooltip title="Add">
                        <Button onClick={increment} className='Btna'><AddIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button onClick={decrement} className='Btnb'><RemoveIcon/></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;