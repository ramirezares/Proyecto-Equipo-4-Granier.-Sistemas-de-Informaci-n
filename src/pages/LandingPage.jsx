import React from "react";
import ButtomImg from "../components/ButtonImg";
import Hero from "../ui/Hero";

const LandingPage = () => {
  //Colocar clases css o bootstrap a cada uno y a las imagenes
  return (
    <>
      <div>
        <Hero />
        <div>
          <ButtomImg
            link="/granier"
            backgroundImage1="/Graniersoloblanco.png"
            backgroundImage2="/Bakeryproducts.png"
          />
          <ButtomImg
            link="/inprogress"
            backgroundImage1="/Kioskobelievelogo.jpg"
            backgroundImage2="/kioskobelieveunimet.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
