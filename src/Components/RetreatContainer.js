import { useEffect,useState } from "react"
import { addData } from "../utils/dataSlice"
//import useDataFetch from "../customHooks/useDataFetch"
import useDataFetch from "../customHooks/useDataFetch"
import Cards from "./Cards"
import { useSelector } from "react-redux"
const RetreatContainer=()=>{
const [pageNo,setPageNo] =useState(1)
const selectData=useSelector((store)=>store.dataslice?.item)
const [message,setMessage] =useState("")
const [hideBtns,setHideBtns]=useState({firstBtn:null,SecondBtn:null})
//I could use frontend aprroach but that is not optimal method
//so i am using backend Aprroach

let totalPage=Math.floor( 21/3)   // 3--limit , 21-total data after fetching as api is not providing api.total()

console.log(Math.random(),"2",totalPage,pageNo)


useDataFetch(pageNo,setMessage)

function handleNext(){
  if(pageNo>=totalPage){
    
    return 
  }

    setPageNo(pageNo+1)
}
function handlePrevious(){
    if(pageNo<=1){
     
        return 
      }

    setPageNo(pageNo-1)
}





useEffect(()=>{

pageNo==1? setHideBtns((prev)=>{return{...prev,SecondBtn:"hidden"}}):setHideBtns((prev)=>{return{...prev,SecondBtn:"null"}})

pageNo == totalPage ? setHideBtns((prev)=>{return{...prev,firstBtn:"hidden"}}):setHideBtns((prev)=>{return{...prev,firstBtn:"null"}})
},[pageNo])

    return(
        <>
   <div className="relative  flex justify-center">
  {message && (
    <div className="absolute top-10 w-64 bg-gray-950 text-white font-bold p-2 text-center py-1 rounded-md px-10 animate-pulse">
      {message}
    </div>
  )}
</div>
        <Cards/>
        <div className="text-center">
    { selectData?.length>0 &&  <button className={`${hideBtns?.SecondBtn} px-3 py-2 bg-[#1b3252] text-white rounded-lg m-1 hover:bg-black`} onClick={()=>handlePrevious()}>Previous</button>}
    { selectData?.length>0 &&  <button  className={`${hideBtns?.firstBtn  } px-3 py-2 bg-[#1b3252] text-white rounded-lg m-1 hover:bg-black`}  onClick={()=>handleNext()}>Next</button>}
        </div>
        </>
    )
}

export default RetreatContainer