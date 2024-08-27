'use clients'
import Header from "./Components/header";
import { Swiper, SwiperSlide } from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import pic from '../app/Asset/t1.png'



function main() {

  return (
    <>
      <div className="Wrapper">
        <div className="Hero ">
           
          <Header id="Head" />

          <h2>Unlock Your Brand’s </h2>
          <h1>Full Potential</h1>

        </div>
        <div className="slider">
          <div className="SlideIn">
            <h1>BUILD </h1>
            <h1>YOUR  </h1>
            <h1>BRAND</h1>
            <h1>-</h1>
            <h1>VALTX</h1>
            <h1>VALTX</h1>
            <h1>VALTX</h1>
            <h1>VALTX</h1>
          </div>

        </div>
        <div className="services">
          <h5>Our Work :</h5><div className="baseLine"></div>
          <p>IN TIMES OF DISRUPTION AND OPPORTUNITY, WE HELP BRANDS RISE TO THE CHALLENGE</p> </div>
        <div className="servicesIn">

          <div className="imgs">
            <img id="1" src="https://images.unsplash.com/photo-1653389525308-e7ab9fc0c260?q=80&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1614242239788-3282f136fe10?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img id="4" src="https://images.unsplash.com/photo-1575549595260-623d27ba5e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxFazA5OHhXMUNvQXx8ZW58MHx8fHx8" />
          </div>
        </div>
        <div className="OT">
          <h1>MEET OUR EXPERTS</h1>
          <div className="Team">
            <div className="img1">
              <div className="t1">
                <h1>AGHA</h1>
                <h2>HASSAN</h2>
              </div>

              <div className="t2">
                <h1>Muhammad</h1>
                <h2>MOOSA</h2>
              </div>

              <div className="t3">
                <h1>SYED</h1>
                <h2>ZARGHAM</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="HappyCli"> 
        <h1>OUR CLIENTS</h1>
           </div>
      </div>
    </>
  );
}

export default main;