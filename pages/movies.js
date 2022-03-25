import {useState, useEffect} from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
import Seo from "./Seo";

export default function Movies(){
    const [movies, setMovies] = useState();
    useEffect(()=>{
        LoadData()
    },[]);

    async function LoadData(){
        const data = await (await fetch(`/api/movies`)).json() 
        setMovies(data.results)
    }

    const router = useRouter()
    function Click(id, title){
        router.push(`/detail/${title}/${id}`, `/detail/${title}`)
    }

    return(
    <>
        <Seo title='Movies'></Seo>
        {!movies && <div>Loading...</div>}
        {
            movies?.map((movie)=>(
                <div onClick={()=>Click(movie.id, movie.original_title)}>
                    <h3>{movie.title}</h3>
                </div>
            ))
        }
    </>
    );
}