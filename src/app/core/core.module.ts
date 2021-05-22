import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {DataService } from './data.services';
import {SorterService } from './sorter.services';


@NgModule({
    imports:[HttpClientModule],
    providers:[ DataService, SorterService ]
})

export class CoreModule{}