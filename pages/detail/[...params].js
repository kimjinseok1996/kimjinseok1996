import {useRouter} from 'next/router'
import Seo from "/pages/Seo.js";
export default function Detail(){
    const router = useRouter()
    console.log(router);

    const [title, id] = router.query.params || [];
    return(
        <>
            <Seo title={title}></Seo>
            <div>
                <h3>{title}</h3>
                <h3>{id}</h3>
            </div>
        </>
    )
}