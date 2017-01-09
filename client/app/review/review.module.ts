import {NgModule} from '@angular/core'
import { CommonModule }   from '@angular/common';
import { FormsModule }     from '@angular/forms';
import { RouterModule }     from '@angular/router';

import {ReviewsListComponent} from './review.list.component'
import {ReviewAddComponent} from './review.add.component'
import { ReviewService} from './review.service'
import {SharedModule } from '../shared/shared.module'



@NgModule({
    imports:[CommonModule, FormsModule,RouterModule,SharedModule],
    declarations: [ReviewAddComponent,ReviewsListComponent],
    providers: [ReviewService],
    exports:[ReviewAddComponent,ReviewsListComponent,RouterModule]
})
export class ReviewModule{}