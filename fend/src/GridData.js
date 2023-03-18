import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const Grid = () => {
    const columns = [
        { field: "Names", headerName: "Names", width: 130 },
        { field: "Age", headerName: "Age", width: 130 },
    ];

    const [griddata, setgriddata] = React.useState([]);
    const [searcher,setsearcher]=React.useState('')
    

    React.useEffect(() => {
        const fetch = async() => {
            console.log('inside')
            const response = await axios.get(`http://localhost:5000/all?keyword=${searcher}`);
            console.log(response)
        
            setgriddata(response.data.image);
           
        };
        fetch();
       
    },[searcher]);
    console.log(searcher) 
            
    

    return (
        <div style={{ height: 400, width: "100%" }}>
            <input type='text' value={searcher} onChange={(e)=>{setsearcher(e.target.value)}}/>
            <DataGrid  rows={griddata} columns={columns}  getRowId={(row)=>row._id}/>
          
        </div>
        
      
    );
};

export default Grid
