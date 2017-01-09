import {NgModule} from '@angular/core'
import { CommonModule }   from '@angular/common';
import { FormsModule }     from '@angular/forms';
import {PaginationComponent} from './pagination.component'
import {Paging,SortingPipe} from './shared.pipe'


@NgModule({
    imports:[CommonModule, FormsModule],
    declarations: [Paging,PaginationComponent,SortingPipe],
    exports:[Paging,PaginationComponent,CommonModule, FormsModule,SortingPipe]
})
export class SharedModule{
    constructor(){}
}