import { NgModule } from '@angular/core';
import { ProjectService } from './project.service';
import { AccountService } from './account.service';
import { AuthService } from './auth.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ 
        ProjectService,
        AccountService,
        AuthService
    ],
})
export class CoreModule { }
