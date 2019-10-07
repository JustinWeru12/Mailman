import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard],},
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'tracker', loadChildren: './pages/tracker/tracker.module#TrackerPageModule' },
  { path: 'tracker-create', loadChildren: './pages/tracker-create/tracker-create.module#TrackerCreatePageModule',canActivate: [AuthGuard], },
  { path: 'tracker-list', loadChildren: './pages/tracker-list/tracker-list.module#TrackerListPageModule' },
  { path: 'tracker-detail', loadChildren: './pages/tracker-detail/tracker-detail.module#TrackerDetailPageModule',canActivate: [AuthGuard], },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
