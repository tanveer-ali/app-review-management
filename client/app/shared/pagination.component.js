"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChange = new core_1.EventEmitter();
        this.currentPage = 1;
        this.pageList = [];
        this.lastIndex = 0;
        this.TotalPageShowInPagination = 8;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = this.currentexPage;
        if (this.data) {
            this.gridRecords = this.data.length;
            this.gridDisplay = +this.totalDisplay;
            this.pageList = [];
            this.LoadPageNumbers(1);
            this.lastIndex = Math.ceil(this.gridRecords / this.gridDisplay);
            console.log(this.gridRecords);
        }
    };
    PaginationComponent.prototype.LoadPageNumbers = function (start) {
        var checkCount = 0;
        this.gridRecords = this.data.length;
        this.gridDisplay = +this.totalDisplay;
        for (var i = start; i <= Math.ceil(this.gridRecords / this.gridDisplay); i++) {
            checkCount++;
            if (checkCount > this.TotalPageShowInPagination)
                break;
            this.pageList.push(i);
        }
    };
    PaginationComponent.prototype.onChangePageClick = function (page) {
        this.currentPage = page;
        this.pageChange.emit(page);
    };
    PaginationComponent.prototype.nextPages = function () {
        this.gridRecords = this.data.length;
        this.gridDisplay = +this.totalDisplay;
        this.lastIndex = Math.ceil(this.gridRecords / this.gridDisplay);
        if (this.pageList.indexOf(this.lastIndex) != -1)
            return;
        this.pageList = [];
        this.currentPage++;
        this.LoadPageNumbers(this.currentPage);
    };
    PaginationComponent.prototype.previousPages = function () {
        if (this.pageList.indexOf(1) != -1)
            return;
        this.currentPage--;
        this.pageList = [];
        this.LoadPageNumbers(this.currentPage);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PaginationComponent.prototype, "totalDisplay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PaginationComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "currentexPage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            moduleId: module.id,
            templateUrl: "pagination.component.html",
            styleUrls: ["pagination.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map