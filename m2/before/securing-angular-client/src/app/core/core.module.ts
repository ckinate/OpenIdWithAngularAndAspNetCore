import { NgModule } from '@angular/core';
import { ProjectService } from './project.service';
import { AccountService } from './account.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ 
        ProjectService,
        AccountService
    ],
})
export class CoreModule { }
