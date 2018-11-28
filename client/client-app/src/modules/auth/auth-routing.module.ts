import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './pages';

export const pageComponents = [
    AuthenticateComponent
]

const routes: Routes = [
    { path: "", component: AuthenticateComponent }
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthRoutingModule {}