import { useSelector } from "react-redux"
import dataSlice from "../utils/dataSlice"

const Cards=()=>{
    const selectData=useSelector((store)=>store.dataslice?.item)
    console.log(selectData[0])
    return(
        <>

        {
            selectData?.length>0 && selectData?.map((item)=>{
            return(
                <>
                <div key={item?.id}>
                  <b> {item?.title}</b> 
                  <p>{item?.condition}</p> 
                </div>
                
                </>
            )
            })
        }
        </>
    )
}


export default Cards