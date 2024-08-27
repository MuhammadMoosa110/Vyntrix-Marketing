'use clients'


import Header from "../Components/header";
import Style from "@/app/About/About.css"
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

 
 
function About() {
    const swiper = new Swiper( );    
    return ( 
        <>
         <Header />
         <div className="Wrapper_About">
         <div className="styleBar">
            <h1>ABOUT</h1>
         </div>
         <div className="ImgSec">
             <img src="https://plus.unsplash.com/premium_photo-1670426502067-99395cc491c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
             <img src="https://images.unsplash.com/photo-1724458113899-4f4a3e412878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
             <img src="https://images.unsplash.com/photo-1723843038794-97663cc894ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"/>
             <img src="https://images.unsplash.com/photo-1723843038784-ba892b252323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"/>
             <img src="https://images.unsplash.com/photo-1724075682633-4664473db52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"/>
         </div>
         </div>
         
       
        </>
     );
}

export default About;