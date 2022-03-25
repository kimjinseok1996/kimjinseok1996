import {useState} from "react";
import Seo from "./Seo";
export default function Home(){
    const [count, setCount] = useState(0)
    return <div>
            <Seo title='Home'></Seo>
            <h1>hellow world!!</h1>
            <h5>count : {count}</h5>
            <div id="btn" onClick={()=>setCount(prev=>prev+1)}>click</div>
            <style jsx>{`
                #btn{
                    color:black;
                    font-weight:bold;
                    padding:5px 20px;
                    border:2px solid black;
                    display:inline-block;
                    cursor:pointer;
                }
            `}</style>
        </div>;
}