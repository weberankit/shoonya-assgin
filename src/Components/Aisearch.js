import { Ai } from "../helper"
import { useEffect, useRef,useState } from "react"
import { handleFilterAll } from "../helper"
import { addData,addFilterData } from "../utils/dataSlice"
import { useDispatch } from "react-redux"
const Aisearch=()=>{
const dispatch=useDispatch()
const [resAi,setresAi]=useState("")
const [indi,setIndi] = useState("")
const data=useRef()
let question =`you have to act like recommendation system ,you have to match the question with this categoryexport 
Category=[ "Meditation" , "Detox","Stress Relief" ,"Flexibility Improvement","Weight Loss","General Fitness" ,"Chronic Pain Management","Pre/Post-Natal","Spiritual Growth",
] and provide the the one most matches category . question:`
const handleSearch=()=>{
    if(data?.current?.value.trim().length<=0){
        alert("provide input")
        return
    }
   Ai(question,data.current.value,setresAi,setIndi,data)
// console.log(data.current.value)

}
useEffect(()=>{
    if(resAi){
const getRes= resAi
console.log(getRes)

const categoryMatch = getRes.match(/\*\*(.*)\*\*/);

if (categoryMatch) {
  const category = categoryMatch[1];
  console.log(category); // Output: Chronic Pain Management

  handleFilterAll(category,dispatch,addFilterData,setIndi,'search',addData)

} else {
  console.log("Category not found");
}

    }
    //used data.current.value for dependency because when user provide ai same value
    //it going to call the handlefilter again as data.current.value changes after getting 
    //response from ai api so it will trigger
},[resAi,data?.current?.value])

    return(
        <div className="flex justify-center flex-col">
     
 <div className="flex justify-center">    
<input className="rounded-md" placeholder="Ai-search e.g body pain" ref={data} ></input>
<button className="bg-red-400 px-2 py-1 rounded-md animate-pulse hover:animate-none" onClick={handleSearch}>Ai</button>

</div>
 {indi && <p className="text-center animate-pulse bg-black py-1 rounded-md text-white mt-2">{ indi}</p>}
        </div>
    )
}
export default Aisearch