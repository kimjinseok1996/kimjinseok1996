import Navbar from "../Component/Navbar";
import "../styles/common.css"
export default function App({Component, pageProps}){
    return (
        <div>
            <Navbar/>
            <Component {...pageProps}/>
        </div>
    );
}