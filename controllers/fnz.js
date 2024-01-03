import { all_data } from "../data.js";
export const apii2=async (req,res,next)=>{
    // const vidId=req.url.substring(1)
    try {
        const arr=req.body.components;
        const order_id=Math.random().toString(36).substring(5,15);
        const check=new Set(["n","a","t","y","S"]);
        var all_comp=[];
        var price=0
        console.log(arr);
        if(!arr||arr.length!=5){
            res.status(201).json("please enter valid data");return
        }
        for(let i=0;i<5;i++){
            let curr_comp=all_data[arr[i]]
            check.delete(curr_comp.name.at(-1))
            console.log(check.size+i+1)
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
export const apii=async (req,res,next)=>{
        res.status(200).json("This is the main page use /id ")
    }