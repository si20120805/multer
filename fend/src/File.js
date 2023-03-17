import React, { useEffect, useState } from 'react'
import axios from 'axios'

const File = () => {
    const [data, setdata] = useState();
    const[simage,setsimage]=useState()

    const handler = (e) => {

        const file = e.target.files[0]
        setdata(file)


    }
    console.log(data)
    const handClick = async () => {

        const formdata = new FormData()
        formdata.append('myfiles', data)
        const config = {
            headers: {

                'content-type': 'multipart/form-data'
            }
        }
        const response = await axios.post('http://localhost:5000/api', formdata)
        console.log('image',response.data.image.image)
        setsimage(`http://localhost:5000/images/${response.data.image.image}`)
    }
    return (
        <div>
            <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src={simage}/>
            <input type='file' name='myfiles' onChange={(e) => handler(e)} />
            <button onClick={handClick}>Add</button>
        </div>
    )
}

export default File
