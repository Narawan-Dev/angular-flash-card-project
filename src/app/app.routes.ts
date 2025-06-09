import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
];
