import { MainComponent } from './home/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "security", loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
    { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },




];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
