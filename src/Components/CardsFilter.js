import { useState,useRef ,useEffect} from "react"
import { useDispatch } from "react-redux"
import { addData} from "../utils/dataSlice"
import { handleFilterAll ,filterCategory} from "../helper"
import { suggestionMockList } from "../helper"

const CardsFilter=()=>{



 const [message,setMessage]=useState(null)
const searchRef=useRef()
const dispatch=useDispatch()
const [selectValue,setSelectValue] =useState("")
const [selectLocation,setLocation] =useState("")


const handleSearch=()=>{
    if(searchRef.current.value.trim().length === 0 ){
        alert("provide search value")
        return
    }
handleFilterAll(searchRef.current.value,dispatch,addData,setMessage,"search")
}
function handleTypeFilterOnSelect(){
    if(!selectValue?.length){
        return
    }
    handleFilterAll(selectValue,dispatch,addData,setMessage,"filter")

}



function handleLocationSearchOnselect(){
    handleFilterAll(selectLocation,dispatch,addData,setMessage,"location")
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


<input ></input>
    <select value={selectLocation}  onChange={(e)=> setLocation(e.target.value)}>

{suggestionMockList.map((item)=>{
    return(
        
        
        <option value={item} key={item}>{item}</option>
        
        
    )
})}
</select>







<select value={selectValue}  onChange={(e)=> setSelectValue(e.target.value)}>

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