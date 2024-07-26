import { useState,useRef ,useEffect} from "react"
import { useDispatch ,useSelector} from "react-redux"
import { addData,addFilterData, addSubFilterData} from "../utils/dataSlice"
import { handleFilterAll ,filterCategory} from "../helper"
import { suggestionMockList } from "../helper"

const CardsFilter=()=>{
const [message,setMessage]=useState("")
const searchRef=useRef()
const dispatch=useDispatch()
const [selectValue,setSelectValue] =useState("")
const [selectLocation,setLocation] =useState("")
//const selectData=useSelector((store)=>store.dataslice?.item)
//const selectFilterData=useSelector((store)=>store.dataslice?.List)
const selectSubFilterData=useSelector((store)=>store.dataslice?.subList)
const [ResultMsg,setResultMsg] = useState(null)

// call search api on user input
const handleSearch=()=>{
    //if user input value is null
    if(searchRef.current.value.trim().length === 0 ){
        alert("provide search value")
        return
    }
handleFilterAll(searchRef.current.value,dispatch,addFilterData,setMessage,"search",addData)
setResultMsg("it will show result from All type of yoga and location")
searchRef.current.value=""
}
//call filter api on user selected option
function handleTypeFilterOnSelect(){

    if(!selectValue?.trim().length){
       return null
    }
   

 
  handleFilterAll(selectValue,dispatch,addFilterData,setMessage,"filter",addData,addSubFilterData)
  setResultMsg("it will show only result from type of yoga not based on any")


}

//call location api on user selected option
function handleLocationSearchOnselect(){
  //handle if inupt value is null
    if(!selectLocation.trim().length){
       return null
    }
//applied two way of searching ex-

// 1st-suppose if user first select  filter on basis of type and if user select another filter on basis 
//of location it search from filter type list and matches location and provide result

// 2nd -- if user directly filter on location basis it will call location based api
//to show result


//check user selected type based filter
    if(selectValue?.trim().length>0){
    //match from list of type based filter list    
 const data= selectSubFilterData?.length>0 && selectSubFilterData?.filter((item)=>{
    if(item.location.includes(selectLocation) ){
        return item
    }}
) 
data?.length==0 ? setResultMsg("sorry not found try other location") :setResultMsg("it will show result from location based on type of yoga")

      dispatch(addFilterData(data))
    }else{
        //if not selected call this location api
    handleFilterAll(selectLocation,dispatch,addFilterData,setMessage,"location",addData)
   setResultMsg("it will only show result from location not based on any")

    }
}





//calling function if seelected option value changes 


useEffect(()=>{
    
handleTypeFilterOnSelect()


},[selectValue])



useEffect(()=>{
handleLocationSearchOnselect()
},[selectLocation])


return(
    <>
    <p className="text-center">{ResultMsg && <span className="text-green-600 text-center">{ResultMsg}</span>}</p>
<div className="relative flex justify-center ">
  {message && (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-black text-white font-bold p-2 text-center py-5 rounded-xl px-10 animate-pulse">
      {message}
      {message === "not found sorry" && (
        <div className="bg-red-600 text-white px-1 py-1 rounded-md absolute right-0 top-0" onClick={() => setMessage(null)}>
          close
        </div>
      )}
    </div>
  )}
</div>




<div className="flex flex-col sm:flex-row justify-normal sm:justify-between">
<div>
    <div>
       <div className="flex flex-col sm:flex-row justify-center sm:justify-normal">

        <div className="mt-3 sm:ml-5 md:ml-6 lg:ml-7 xl:ml-9">
            <div className=" w-full text-center ">
<select value={selectValue} className="w-[95%] py-1 bg-gray-200 border border-gray-400 text-gray-500 sm:bg-[#1b3252]  sm:text-white"  onChange={(e)=> setSelectValue(e.target.value)}>
   <option value="" disabled className="">Filter by type</option>
    {filterCategory.map((item)=>{

        return(
            
            
            <option value={item} className="bg-white text-black " key={item}>{item}</option>
            
            
        )
    })}
</select>
</div>
</div>

<div className="mt-3 ">
    <div className=" w-full text-center ">
    <select value={selectLocation}  className="w-[95%] py-1 bg-gray-200 border border-gray-400 text-gray-500 sm:bg-[#1b3252]  sm:text-white"  onChange={(e)=> setLocation(e.target.value)}>
    <option value="" disabled>Filter by location</option>

{suggestionMockList.map((item)=>{

    return(
        
        
        <option value={item} className="bg-white text-black " key={item}>{item}</option>
        
        
    )
})}
</select>
</div>
</div>

    </div> 
  </div>

</div>






<div>
<div className=" bg-white sm:bg-[#1b3252]  sm:text-white text-center m-3 border border-black py-0 rounded-sm">
    <label >

    <div className="flex flex-row justify-between text-white">
    <input className="w-[75%] outline-none ml-1 bg-white  sm:bg-[#1b3252] text-white" ref={searchRef} placeholder="search retreats by title"></input>
    
    <button className="float-right mr-1 cursor-pointer bg-white  text-black sm:text-white sm:bg-[#764abc] py-1 px-1 rounded-lg" onClick={handleSearch}>search</button>
</div>
    </label>
</div>

    </div>

</div>
    </>
)
}

export default CardsFilter