import { Ai } from "../helper"
import { useRef,useState } from "react"

import { addData,addFilterData } from "../utils/dataSlice"
import { useDispatch } from "react-redux"
const Aisearch=()=>{
const dispatch=useDispatch()
//const [resAi,setresAi]=useState("")
const [indi,setIndi] = useState("")
const data=useRef()

let question =  `You are a recommendation system. Your task is to match the given question or keyword with the most appropriate category from the following list:
[ "Meditation", "Detox", "Stress Relief", "Flexibility Improvement", "Weight Loss", "General Fitness", "Chronic Pain Management", "Pre/Post-Natal", "Spiritual Growth" ].
Even if the question is vague or general, provide the category that best matches based on the keywords or context provided.here is the Question/keywords-`;




const handleSearch=()=>{
    if(data?.current?.value.trim().length<=0){
        alert("provide input")
        return
    }
   Ai(question,data.current.value,setIndi,data,dispatch,addFilterData,addData)


} 

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