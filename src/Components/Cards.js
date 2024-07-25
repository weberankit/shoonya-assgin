import { useSelector } from "react-redux"
import CardsFilter from "./CardsFilter"
import { Link } from "react-router-dom"
const Cards=()=>{
    const selectData=useSelector((store)=>store.dataslice?.item)
  //  console.log(selectData[0])
  const selectFilterData=useSelector((store)=>store.dataslice?.List)
    return(
        <>



<CardsFilter/>




        {
            selectFilterData?.length>0 && selectFilterData?.map((item)=>{
            return(
                
                <div key={item.id}>
              <Link to={`/detail/${item.id}`}>   <b>{item?.id} {item?.title}</b> </Link> 
                  <p>{item?.condition} </p>
                  <p>{item?.location}</p> 
                </div>
                
                
            )
            })
        }


{
            selectData?.length>0 && selectData?.map((item)=>{
            return(
                
                <div key={item.id}>
              <Link to={`/detail/${item.id}`}>   <b>{item?.id} {item?.title}</b> </Link> 
                  <p>{item?.condition} </p>
                  <p>{item?.location}</p> 
                </div>
                
                
            )
            })
        }



        </>
    )
}


export default Cards