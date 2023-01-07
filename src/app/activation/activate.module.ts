import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivateLayoutComponent} from './shared/components/activate-layout/activate-layout.component';
import {RouterModule, Routes} from "@angular/router";
import {ActivateService} from "./shared/services/activate.service";
import {SharedModule} from "../shared/components/shared.module";

const routes: Routes = [{ path: '', component: ActivateLayoutComponent }]

@NgModule({
  declarations: [
    ActivateLayoutComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ActivateService]
})
export class ActivateModule { }
