import { useEffect,useState } from "react"
import { addData } from "../utils/dataSlice"
//import useDataFetch from "../customHooks/useDataFetch"
import useDataFetch from "../customHooks/useDataFetch"
import Cards from "./Cards"
import { useSelector } from "react-redux"
const RetreatContainer=()=>{
const [pageNo,setPageNo] =useState(1)
const selectData=useSelector((store)=>store.dataslice?.item)

//I could use frontend aprroach but that is not optimal method
//so i am using backend Aprroach

let totalPage=20/2   // 2--limit , 20-total data after fetching as api is not providing api.total

console.log(Math.random(),"2")


useDataFetch(pageNo)

function handleNext(){
  if(pageNo>=totalPage){
    return alert("you have exceed")
  }

    setPageNo(pageNo+1)
}
function handlePrevious(){
    if(pageNo<=1){
        return alert("you have prcedded")
      }

    setPageNo(pageNo-1)
}
//https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=5

    return(
        <>
        <Cards/>
    { selectData?.length>0 &&  <button onClick={()=>handlePrevious()}>Previous</button>}
    { selectData?.length>0 &&  <button onClick={()=>handleNext()}>Next</button>}
        
        </>
    )
}

export default RetreatContainer