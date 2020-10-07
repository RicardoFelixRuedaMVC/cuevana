import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
    HeaderComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...components
    ],
    declarations: [
        ...components
    ]
})
export class PortalCommonsModule { }

