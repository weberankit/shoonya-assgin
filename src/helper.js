
  export async function handleFilterAll(ref,dispatch,addData,setMessage,parms){
       try{
        const url=`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${parms}=${ref}`
        console.log(url)
     const data=await fetch(url)
     const json=await data.json()
     //console.log(json,searchRef.current.value)

     console.log(json,"json",typeof json)
     if(typeof(json) === "string"){
        setMessage("not found sorry ")
        //empty the cards
        dispatch(addData([]))
        return
     }
     dispatch(addData(json))
       }catch(error){
        console.log(error)
       }
    }


export const filterCategory=["Yoga" , "Meditation" , "Detox"]

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
