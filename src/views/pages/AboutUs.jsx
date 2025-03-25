import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../../assets/styles/AboutUs.css';
import unimetImage from '../../assets/images/unimet.png';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>Acerca de Nosotros</h1>
          <p>
            Somos estudiantes de la Universidad Metropolitana, encargados como desarrolladores de la página web de esta gran agrupación unimetana, que impulsa a los estudiantes a involucrarse más con la naturaleza y sus alrededores en Caracas. ¡Esperamos que se animen al proyecto!
          </p>
        </div>
        <div className="about-us-image">
          <img src={unimetImage} alt="UNIMET" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;