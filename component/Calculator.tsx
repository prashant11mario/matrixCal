import React, { useState } from 'react'
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Calculator = () => {

  const [row,setRow] = useState<number>(0);  //Input data for rows
  const [col,setCol] = useState<number>(0); // Input data for colums
  const[tabledata,setTableData] = useState<string[][]>([]); // Table data as per the rows and columns

  const [toggle,setToggle] = useState<boolean>(false); // Toggle for showing final data after adding both table

  const [toggleData, setToggleData] = useState<boolean>(false);
  
  const handleClick = () =>{
    const newTable = Array.from({length: row}, () =>Array.from({length:col}, () => ''));
    setTableData(newTable);
    setToggleData(true);
  }

  // Toggle for showing addition of both table
  const handletoggle = () =>{
    setToggle(true);
  }

  return (
    <>
      <div style={{ display:'flex'}}>
      <div style={{height:'700px', width:'700px', marginLeft:"100px"}}>  
      
      <TextField type='number' onChange={(e) => setRow(parseInt(e.target.value))}/>
      <TextField type='number' onChange={(e) => setCol(parseInt(e.target.value))}/>
      <Button variant="contained" onClick={handleClick}>Generate</Button>
      <Sheet sx={{ height: 200, width:200, overflow: 'auto' }}>
      <h1>Addition</h1>
      <Table aria-label="table with sticky header"
          stripe="odd"
          hoverRow>
        <tbody>
        {tabledata.map((row,i)=>
            <tr>
                {row.map((e,j)=>
                <td>{i+j}</td>
                )}
            </tr>
        )}
        </tbody>
      </Table>
      </Sheet>
      
      <Sheet sx={{ height: 200, width:200, overflow: 'auto' }}>
      <h1>Multiplication</h1>
      <div style={{backgroundColor:'red'}}> 
      <Table >
        <tbody>
        {tabledata.map((row,i)=>
            <tr>
                {row.map((e,j)=>
                <td>{i*j}</td>
                )}
            </tr>
        )}
        </tbody>
      </Table>
      </div>
      </Sheet>
      <Button variant="contained" onClick={handletoggle}>Calulate</Button>
      
      </div> 
      
      {toggle ? 
      <div style={{height:'700px', width:'700px', alignContent:"center",float:'right', marginLeft:'200px'}}>
      <Sheet sx={{ height: 200, width:200, overflow: 'auto' }}>
        <h1>Addition of both</h1>
      <Table >
        <tbody>
        {tabledata.map((row,i)=>
            <tr>
                {row.map((e,j)=>
                <td>{(i*j) + (i+j)}</td>
                )}
            </tr>
        )}
        </tbody>
      </Table></Sheet>
      </div> : <></>}
      </div>
    </>  
  )
}

export default Calculator