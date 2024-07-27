    import { GoogleGenerativeAI } from "@google/generative-ai";
  export async function handleFilterAll(ref,dispatch,addFilterData,setMessage,parms,addData,addSubFilterData){
       try{
        setMessage("fetching the data....")
        const url=`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${parms}=${ref}`
        console.log(url)
     const data=await fetch(url)
     const json=await data.json()
     //console.log(json,searchRef.current.value)

     console.log(json,"json",typeof json)
     if(typeof(json) === "string"){
        setMessage("not found sorry")
        //empty the cards
        
        dispatch(addData([]))
        dispatch(addFilterData([]))
        return
     }
     dispatch(addData([]))
     setMessage(null)
     dispatch(addFilterData(json))
     dispatch(addSubFilterData(json))
     
       }catch(error){
        console.log(error)
       
       }
    }







   export  const Ai=(question,userVal,setIndi,data,dispatch,addFilterData,addData)=>{
    const apiKey=process.env.REACT_APP_AI_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);
      async  function apiCall(){
            try{
              setIndi("Ai-understanding-your-question")
                // For text-only input, use the gemini-flash-model
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
              
                const prompt = `
              ${question} ${userVal}
                  `
             // console.log(prompt ,"prompt")
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
               // console.log(text)
              const getCategoryFromAi = await category(text)
             // console.log(getCategoryFromAi,"processing")
              if(getCategoryFromAi && text){
                   setIndi(null)
                   data.current.value=""
                handleFilterAll(getCategoryFromAi,dispatch,addFilterData,setIndi,'search',addData)

              }
            
              }catch(error){
               setIndi("sorry something wrong in Ai fetching ")
              }
        }
    
    apiCall()
    }

async function  category (getRes){
  const categoryMatch = getRes.match(/\*\*(.*)\*\*/);

if (categoryMatch) {
  const categoryItem = categoryMatch[1];
 // console.log(categoryItem); 
return categoryItem


} else {
  console.log("Category not found");
}
}





export const filterCategory=[ "Meditation" , "Detox","Stress Relief","Yoga" ,"Flexibility Improvement","Weight Loss","General Fitness"

    ,"Chronic Pain Management","Pre/Post-Natal","Spiritual Growth",
]

export const suggestionMockList=[
    "Goa",
    "Rishikesh",
    "Kerala",
    "Mumbai",
    "Delhi",
    "Pune",
    "Chennai",
    "Hyderabad",
    "Varanasi",
    "Kolkata"
  ]
