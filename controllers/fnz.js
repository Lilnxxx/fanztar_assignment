import { all_data } from "../data.js"; //importing data file
//main api 
export const apii2=async (req,res,next)=>{
    // const vidId=req.url.substring(1)
    try {
        const arr=req.body.components;
        const order_id=Math.random().toString(36).substring(5,15);
        //check set has all the suffix of required components to check the
        // user query
        const check=new Set(["n","a","t","y","S"]);
        var all_comp=[]; // all components
        var price=0
        // console.log(arr);
        //if the query fails to have all five parts 
        if(!arr||arr.length!=5){
            res.status(201).json("please enter valid data");return
        }
        //here we add all the data by looping over the components array
        //here we use the SET "check" to check all the required components are
        // there and no one is missing or duplicated
        for(let i=0;i<5;i++){
            let curr_comp=all_data[arr[i]]
            check.delete(curr_comp.name.at(-1))
            // console.log(check.size+i+1)
            if(!curr_comp||check.size+i+1!=5){
                res.status(201).json("please enter valid component code");return
            }
            // console.log(curr_comp)
            all_comp.push(curr_comp.name)
            price+=curr_comp.price
        }
        // console.log("\n component are ",all_comp)
        // console.log("\n total price ",price)
        const final_res={order_id,price,all_comp}
        res.status(200).json(final_res)
    } catch (error) {
        res.status(201).json(error)
    }
    // console.log(req.body.components)
}
// this is an extra test get api
export const apii=async (req,res,next)=>{
        res.status(200).json("This is the main page use /id ")
    }