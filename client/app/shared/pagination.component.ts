import {Component,Input,OnInit,OnChanges,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'pagination',
    moduleId:module.id,
    templateUrl: "pagination.component.html",
    styleUrls: ["pagination.component.css"]
})
export class PaginationComponent implements OnChanges {

    private  gridRecords:number;
    private  gridDisplay:number;
    
    @Input()  totalDisplay:string;
    @Input()  data:Array<any>;
    @Input()  currentexPage:number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    
             currentPage:number=1;
             pageList:number[]=[];
             lastIndex:number=0;
             TotalPageShowInPagination:number = 8;

    constructor(){}

  
    ngOnChanges(){
        this.currentPage = this.currentexPage;
           if(this.data){
               this.gridRecords = this.data.length;
               this.gridDisplay = +this.totalDisplay;
                 this.pageList=[];
               this.LoadPageNumbers(1); 
             
               this.lastIndex= Math.ceil(this.gridRecords/this.gridDisplay);
               console.log(this.gridRecords);
           }
    }

    LoadPageNumbers(start:number){
        let checkCount = 0;
        this.gridRecords = this.data.length;
          this.gridDisplay = +this.totalDisplay;
        for(let i=start; i<= Math.ceil(this.gridRecords/this.gridDisplay) ;i++){
            checkCount++;
            if(checkCount>this.TotalPageShowInPagination)
             break;         
            this.pageList.push(i);
           
        }
    }
    
    onChangePageClick(page:number):void{
        this.currentPage = page;    
        this.pageChange.emit(page);
    }
    
    nextPages():void{
              this.gridRecords = this.data.length;
             this.gridDisplay = +this.totalDisplay;
              this.lastIndex = Math.ceil(this.gridRecords/this.gridDisplay);

        if(this.pageList.indexOf(this.lastIndex)!=-1) 
            return;
        this.pageList=[];
        this.currentPage++;
         this.LoadPageNumbers(this.currentPage);
    }

    previousPages():void{
        
        if(this.pageList.indexOf(1)!=-1) 
            return;
            
        this.currentPage--;
        this.pageList=[];
         this.LoadPageNumbers(this.currentPage);
    }

  
        
}