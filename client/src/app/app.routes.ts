import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes as ngRoutes } from '@angular/router';

import { HomeViewComponent } from './views';

// Route definitions
export const Routes = {
    home: { url: 'home' }
};

// Register routes here
const routes: ngRoutes = [
    {
        path: '',
        redirectTo: Routes.home.url,
        pathMatch: 'full'
    },
    {
        path: Routes.home.url,
        component: HomeViewComponent
    },
    {
        path: '**',
        redirectTo: Routes.home.url
    },
];

// Load routes in routes module
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
