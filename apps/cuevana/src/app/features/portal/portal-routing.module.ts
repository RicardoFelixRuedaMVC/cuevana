import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { PortalCategoryComponent } from './views/category/category.component';
import { PortalHomeComponent } from './views/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            {
                path: '',
                component: PortalHomeComponent
            },
            {
                path: 'category',
                component: PortalCategoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
