
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'paging',
     pure: false
})
export class Paging implements PipeTransform {

    transform(value: any, arg1: number, arg2: number): any {
        if (value == undefined) return value;

        let filter: number = arg1 ? arg1 : 1; //pageNo
        let totalDisplay = arg2;

        return value.slice(((filter - 1) * totalDisplay), filter * totalDisplay);
    }
}


@Pipe({
    name: 'sortingPipe'
})
export class SortingPipe implements PipeTransform {

transform(value: any[], sortBy: string): any {
        if (value == undefined) return value;

        if (sortBy == "New") {
             value= this.sortByID(value, true);
        }
        else if (sortBy == "Old") {
            value= this.sortByID(value, false);
        }
        return value;
}

sortByID(data: any[], ascending: boolean = true): any {
        data = data.sort((a, b) => {
            if (a._id < b._id) {
                return -1;
            }
            if (a._id > b._id) {
                return 1;
            }
            return 0;
        }
        );

        if (!ascending) 
            data = data.reverse();

            return data;
        
    }
}
