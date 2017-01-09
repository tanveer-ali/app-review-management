import { NgModule }   from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import { ReviewsListComponent} from './review/review.list.component'
import { ReviewAddComponent} from './review/review.add.component'


@NgModule({
    imports: [RouterModule.forRoot([
                                    {path: '', component:ReviewsListComponent, pathMatch: 'full' },
                                    {path: 'new',  component: ReviewAddComponent }
                                    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}