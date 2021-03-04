import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticatedUserGuard } from './modules/authentication/guards/authenticated-user.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadComponent } from './components/load/load.component';
import { MerchantsComponent } from './components/merchants/merchants.component';
import { UpdateComponent } from './components/update/update.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { PaperWalletComponent } from './components/paperwallet/paperwallet.component';
import { IdentityComponent } from './components/identity/identity.component';
import { IdentityViewComponent } from './components/identity/identity-view.component';
import { HubDetailsComponent } from './components/settings/hub-details.component';
import { IdentityEditComponent } from './components/identity/identity-edit.component';
import { IdentityLookupComponent } from './components/identity/identity-lookup.component';
import { IdentityUnlockComponent } from './components/identity/identity-unlock.component';
import { IdentityExportComponent } from './components/identity/identity-export.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/load'
    },
    {
        path: 'load',
        component: LoadComponent,
        data: {
            title: 'Setup',
            animation: 'LoadPage'
        },
    },
    {
        path: 'advanced',
        loadChildren: () => import('./components/advanced/advanced.module').then(m => m.AdvancedModule),
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Log in',
            animation: 'LoginPage'
        },
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticatedUserGuard],
        // canActivate: [AuthenticatedUserGuard, ConnectedToNetworkdGuard],
        data: {
            title: 'Dashboard',
            animation: 'DashboardPage'
        }
    },
    {
        path: 'paperwallet',
        component: PaperWalletComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Paperwallet'
        }
    },
    {
        path: 'identity',
        loadChildren: () => import('./components/identity/identity.module').then(m => m.IdentityModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'merchants',
        component: MerchantsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Merchants'
        },
    },
    // {
    //     path: 'settings',
    //     component: SettingsComponent,
    //     canActivate: [AuthenticatedUserGuard],
    //     data: {
    //         title: 'Settings'
    //     },
    // },
    // {
    //     path: 'hubs',
    //     component: HubDetailsComponent,
    //     canActivate: [AuthenticatedUserGuard],
    //     data: {
    //         title: 'Manage Hubs'
    //     },
    // },
    {
        path: 'settings',
        loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'logout',
        loadChildren: () => import('./components/logout/logout.module').then(m => m.LogoutModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'update',
        loadChildren: () => import('./components/update/update.module').then(m => m.UpdateModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'network',
        loadChildren: () => import('./components/network/network.module').then(m => m.NetworkModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'tools',
        loadChildren: () => import('./components/tools/tools.module').then(m => m.ToolsModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'notifications',
        loadChildren: () => import('./components/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'about',
        loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule),
    },
    {
        path: 'wallet',
        loadChildren: () => import('./components/wallet/wallet.module').then(m => m.WalletModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'account',
        loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: 'history',
        loadChildren: () => import('./components/history/history.module').then(m => m.HistoryModule),
        canActivate: [AuthenticatedUserGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Not Found',
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
