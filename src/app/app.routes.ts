import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
    },
    {
        path: 'portal',
        loadChildren: () => import('./portal/portal.module').then((m) => m.PortalModule),
        // canActivate: [AuthGuard]
    },
];
