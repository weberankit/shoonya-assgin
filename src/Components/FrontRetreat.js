import Heading from "./Heading"
import Aisearch from "./Aisearch"
const FrontRetreat=()=>{
    return(
        <div >
        <Heading/>
        <div className="relative flex justify-center" >
        
        <div className="absolute  top-52"><Aisearch/></div>
</div>
        <div className="mt-2 " >
            <div className=" rounded-md w-[94%] m-auto bg-[#e0d9cf]">
            <div className="pt-6"> <img className="w-[96%] h-[300px] object-cover m-auto rounded-lg" src="https://cdn.midjourney.com/bc82ebc6-a3a4-4eda-be0b-bb3e65d4b8d3/0_1.jpeg" alt="image-yoga"></img></div>
            <div className="p-4">
                <h1 className="font-bold text-black whitespace-nowrap ml-2">
                    Discover Your Inner Peace
                </h1>
                <p className=" ml-2 ">join us for series of wellness and Retreat designed to help you find transquility and rejuvention</p>
            </div>
           </div>
        </div>
        </div>
    )
}


export default FrontRetreat