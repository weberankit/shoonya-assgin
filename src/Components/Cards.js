import { useSelector } from "react-redux"
import CardsFilter from "./CardsFilter"
const Cards=()=>{
    const selectData=useSelector((store)=>store.dataslice?.item)
  //  console.log(selectData[0])
    return(
        <>



<CardsFilter/>




        {
            selectData?.length>0 && selectData?.map((item)=>{
            return(
                
                <div key={item.id}>
                  <b>{item?.id} {item?.title}</b> 
                  <p>{item?.condition}</p> 
                </div>
                
                
            )
            })
        }
        </>
    )
}


export default Cards