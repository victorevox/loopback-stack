import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { components as pageComponets } from "./main-routing.module";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

@NgModule({
    imports: [
        HomeRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ],
    declarations: [
        ...pageComponets
    ],
    exports: [
        RouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class MainModule {}