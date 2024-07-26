const RenderDetail=({item})=>{
    return(
        <>

<div className=" m-3 bg-[#e0d9cf] mt-2 hover:cursor-pointer  lg:h-[280px] rounded-lg">
   
   <div  className="w-[95%] m-auto">


 <div >
   <div className="pt-2"><img className=" w-[483px] h-[200px] object-cover lg:w-32 lg:h-32 rounded-lg lg:rounded-xl" src={item.image} alt="retreats-image"></img></div>
   
   </div>
  <div>
   <div><h1 className="text-xl font-bold mt-5 ">{item.title}</h1></div>
   <div><h2 className="text-[#595f6a] truncate">{item.description}</h2></div>
   <div  className="text-[#595f6a]">Location: {item.location}</div>
   <div  className="font-bold  text-black">Price: ${item.price}</div>
  </div>

   </div>



    </div>

        </>
    )
}

export  default RenderDetail