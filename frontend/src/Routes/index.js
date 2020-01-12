import React, { useEffect, useState, Suspense } from 'react';
import {Router, Route} from 'react-router-dom';
 
import RoutesConfig from "./RoutesConfig";
import { history } from '../config/store.config';

export default function Routes(){
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    let auxRoutes = [];
    Object.keys(RoutesConfig).map((configKey) => {
      const config = RoutesConfig[configKey];

      auxRoutes = auxRoutes.concat(config.routes);
    });
    setRoutes(auxRoutes);
  }, []);

  return (
    <Suspense fallback={<>carregando...</>}>
      <Router history={history}>
        {routes.map(({path, component}, key) => (
          <Route key={key} path={path} component={component} />
        ))}
      </Router>
    </Suspense>
  )
}
