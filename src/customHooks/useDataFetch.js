import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../utils/dataSlice"
const useDataFetch=(pageNo,setMessage)=>{
    const dispatch=useDispatch()
    const ListOfData= async ()=>{
        try{
            setMessage("fetching the data...")
        const data= await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${pageNo}&limit=3`)
        const json= await data.json()
        console.log(json,json.length)
       
        dispatch(addData(json))
         setMessage(null)
        }catch(error)
{
    console.log(error)
}
  
}   
useEffect(()=>{
            ListOfData()
        
        },[pageNo])

        
}

export default useDataFetch