import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ListComponent} from './list/list.component';

const homeRoutes: Routes=[
    {
        path: 'home',
        component: HomeComponent,
        children:[
            {
                path: 'list',
                component: ListComponent
            }
        ]
            
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}
    
