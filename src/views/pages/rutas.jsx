import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import RouteCard from '../components/RouteCard';
import '../../assets/styles/rutas.css';
import { db } from '../../services/firebaseConfig'; // Importa la configuración de Firestore
import { collection, getDocs } from 'firebase/firestore';

// Import images from assets folder
import cruzPalmeros from '../../assets/images/cruz-palmeros.png';
import sabasNieves from '../../assets/images/sabas-nieves.png';
import humboldt from '../../assets/images/humboldt.png';
import picoNaiguata from '../../assets/images/pico-naiguata.png';
import elBanquito from '../../assets/images/el-banquito.png';
import piedraIndio from '../../assets/images/piedra-indio.png';
import picoOriental from '../../assets/images/pico-oriental.png';
import antenasAvila from '../../assets/images/antenas-avila.png';

const routeImages = {
  'Sabas Nieves': sabasNieves,
  'Humboldt': humboldt,
  'Pico Naiguatá': picoNaiguata,
  'Cruz de los Palmeros': cruzPalmeros,
  'El Banquito': elBanquito,
  'Piedra del Indio': piedraIndio,
  'Pico Oriental': picoOriental,
  'Antenas Avila': antenasAvila,
  'default': sabasNieves
};

const Rutas = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routesCollection = collection(db, 'routes');
        const routesSnapshot = await getDocs(routesCollection);
        
        if (routesSnapshot.empty) {
          console.log('No routes found in Firestore');
          setRoutes([]);
        } else {
          const routesData = routesSnapshot.docs.map((doc) => {
            const data = doc.data();
            const title = data.title || 'Unnamed Route';
            const about = data.about || '';
            const difficulty = data.difficulty || '';
            const distance = data.distance || '';
            const map = data.map || null;
            const imageSrc = routeImages[title] || routeImages['default'];
            
            return {
              id: doc.id,
              title,
              about,
              difficulty,
              distance,
              map,
              imageSrc
            };
          });
          setRoutes(routesData);
        }
      } catch (err) {
        console.error('Error fetching routes:', err);
        setError('Failed to load routes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRoutes();
  }, []);

  return (
    <div className="rutas-container">
      <Header />
      <main className="main-content">
        <h1 className="routes-title">Rutas Disponibles:</h1>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando rutas...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">{error}</p>
            <button onClick={() => window.location.reload()}>Intentar nuevamente</button>
          </div>
        ) : routes.length === 0 ? (
          <div className="no-routes-message">
            <p>No hay rutas disponibles en este momento.</p>
          </div>
        ) : (
          <div className="routes-grid">
            {routes.map(route => (
              <div key={route.id} className="route-card-container">
                <RouteCard
                  title={route.title}
                  imageSrc={route.imageSrc}
                  onClick={() => navigate('/rutasInfo', { state: route })}
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <div className="mountain-footer"></div>
      <Footer />
    </div>
  );
};

export default Rutas;