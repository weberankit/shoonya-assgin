import { useState ,useEffect} from "react"
import { useParams,Link } from "react-router-dom"
import RenderDetail from "./RenderDetail"
import Heading from "./Heading"
const CardDetail=()=>{
    const {id} =useParams()
    const [cardDetail,setCardDetail] = useState([])
    console.log(cardDetail,id,"id") 

    async function dataFetch(id){
      try{
        const data=await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`)
        const json=await data.json()
        console.log(json)
        setCardDetail([json])
      }catch(error){
        console.log(error)
      }  
    }
 useEffect(()=>{
    if(id){
        console.log(id)
        dataFetch(id)
    }

 },[id])



return(
    <>
    <Heading/>
    <div className="bg-[#e0d9cf] w-full  h-full">
   <Link to={"/"}><button className="bg-gray-600 rounded-md text-white px-3 py-2">back</button></Link> 
        {
            cardDetail&& cardDetail.map((item)=>{
                return(
                    <div key={item.id} className="">

            <div className="mt-36 ">           
         <RenderDetail item={item}/>
              </div>


                    </div>
                )
            })
        }
    </div>
    </>
)
}

export default CardDetail