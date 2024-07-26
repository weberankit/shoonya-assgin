import { useSelector } from "react-redux";
import CardsFilter from "./CardsFilter";
import { Link } from "react-router-dom";
import RenderDetail from "./RenderDetail";
import { useEffect, useRef } from "react";
const Cards = () => {
  const selectData = useSelector((store) => store.dataslice?.item);
 
  const selectFilterData = useSelector((store) => store.dataslice?.List);
  const scrollRef=useRef()

useEffect(()=>{
if(selectFilterData?.length>0 && scrollRef.current){
  scrollRef.current.scrollIntoView({behaviour:"smooth",block:"start"})
}
},[selectFilterData])


  return (
    <>
      <CardsFilter />
{
    /*showing all filter data  */
}
<div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {selectFilterData?.length > 0 &&
        selectFilterData?.map((item,index) => {
          return (
            <div key={item.id} ref={index==0?scrollRef:null}>
              <Link to={`/detail/${item.id}`}>
                
                <RenderDetail item={item}/>
   
   
   
   
                 </Link>
            </div>
          );
        })}
        </div>

{/**
 * showing Maindata as it is used for pagination
 */}

<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {selectData?.length > 0 &&
        selectData?.map((item) => {
          return (
            <div key={item.id} className="">
              <Link to={`/detail/${item.id}`}>
               {
                /*
             <div className=" m-3 bg-[#e0d9cf] mt-2 hover:cursor-pointer">

            <div  className="w-[95%] m-auto">


          <div >
            <div className="pt-2"><img className=" w-[483px] h-[200px] object-cover " src={item.image} alt="retreats-image"></img></div>
            
            </div>
           <div>
            <div><h1 className="text-xl font-bold mt-5 ">{item.title}</h1></div>
            <div><h2 className="text-[#595f6a]">{item.description}</h2></div>
            <div  className="text-[#595f6a]">Location: {item.location}</div>
            <div  className="font-bold  text-black">Price: ${item.price}</div>
           </div>

            </div>



             </div>
             */
        }

             <RenderDetail item={item}/>
     


              </Link>
              
            </div>
          );
        })}

</div>




    </>
  );
};

export default Cards;
