import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addData } from "../utils/dataSlice"
const useDataFetch=(pageNo)=>{
    const dispatch=useDispatch()
    const ListOfData= async ()=>{
        const data= await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${pageNo}&limit=2`)
        const json= await data.json()
        console.log(json,json.length)
        dispatch(addData(json))
        }
        useEffect(()=>{
            ListOfData()
        
        },[pageNo])

        
}

export default useDataFetch