import { useState,useRef ,useEffect} from "react"
import { useDispatch ,useSelector} from "react-redux"
import { addData,addFilterData, addSubFilterData} from "../utils/dataSlice"
import { handleFilterAll ,filterCategory} from "../helper"
import { suggestionMockList } from "../helper"

const CardsFilter=()=>{
let booleans=true


 const [message,setMessage]=useState(null)
const searchRef=useRef()
const dispatch=useDispatch()
const [selectValue,setSelectValue] =useState("")
const [selectLocation,setLocation] =useState("")
const selectData=useSelector((store)=>store.dataslice?.item)
const selectFilterData=useSelector((store)=>store.dataslice?.List)
const selectSubFilterData=useSelector((store)=>store.dataslice?.subList)

const [dataFilter,setdataFilter] = useState("")

const handleSearch=()=>{
    if(searchRef.current.value.trim().length === 0 ){
        alert("provide search value")
        return
    }
handleFilterAll(searchRef.current.value,dispatch,addFilterData,setMessage,"search",addData)
}

function handleTypeFilterOnSelect(){
    if(!selectValue?.trim().length){
        console.log("aam")
        return null
    }
    console.log(selectValue,"value")

  
   handleFilterAll(selectValue,dispatch,addFilterData,setMessage,"filter",addData,addSubFilterData)







}
/**/
//console.log(dataFilter ,"checkoinf")

function handleLocationSearchOnselect(){

    if(!selectLocation.trim().length){
       // console.log("lok")
        return null
    }
    if(selectValue?.trim().length>0){
        console.log("da",selectSubFilterData,selectFilterData)
 const data= selectSubFilterData?.length>0 && selectSubFilterData?.filter((item)=>item.location.includes(selectLocation))
      dispatch(addFilterData(data))
    }else{
        
    handleFilterAll(selectLocation,dispatch,addFilterData,setMessage,"location",addData)
//setdataFilter(selectFilterData)

    }
}







useEffect(()=>{
    
handleTypeFilterOnSelect()


},[selectValue])



useEffect(()=>{
handleLocationSearchOnselect()
},[selectLocation])


return(
    <>
    {message&& message}{selectValue}



    <select value={selectLocation}  onChange={(e)=> setLocation(e.target.value)}>
    <option value="" disabled>select option</option>

{suggestionMockList.map((item)=>{

    return(
        
        
        <option value={item} key={item}>{item}</option>
        
        
    )
})}
</select>







<select value={selectValue}  onChange={(e)=> setSelectValue(e.target.value)}>
   <option value="" disabled>select option</option>
    {filterCategory.map((item)=>{

        return(
            
            
            <option value={item} key={item}>{item}</option>
            
            
        )
    })}
</select>





    <label >
    <input ref={searchRef} placeholder="search"></input>
    </label>
    <button onClick={handleSearch}>search</button>
    </>
)
}

export default CardsFilter