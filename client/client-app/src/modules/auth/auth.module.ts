import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, pageComponents } from "./auth-routing.module";

@NgModule({
    declarations: [
        ...pageComponents
    ],
    imports: [ 
        AuthRoutingModule,
        CommonModule,
    ],
    exports: [],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule {}