import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages';

export const pageComponents = [
    AdminComponent
]

const routes: Routes = [
    { path: "", component: AdminComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModue {
    constructor() {
        
    }
}