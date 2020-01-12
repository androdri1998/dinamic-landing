import React, { lazy } from 'react';
import routes from '../../utils/routes.constants';

const LandingConfig = {
    routes: [
        {
            path: routes.ROOT,
            component: lazy(() => import('./index'))
        }
    ]
};

export default LandingConfig;