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
var Paging = (function () {
    function Paging() {
    }
    Paging.prototype.transform = function (value, arg1, arg2) {
        if (value == undefined)
            return value;
        var filter = arg1 ? arg1 : 1; //pageNo
        var totalDisplay = arg2;
        return value.slice(((filter - 1) * totalDisplay), filter * totalDisplay);
    };
    Paging = __decorate([
        core_1.Pipe({
            name: 'paging',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], Paging);
    return Paging;
}());
exports.Paging = Paging;
var SortingPipe = (function () {
    function SortingPipe() {
    }
    SortingPipe.prototype.transform = function (value, sortBy) {
        if (value == undefined)
            return value;
        if (sortBy == "New") {
            value = this.sortByID(value, true);
        }
        else if (sortBy == "Old") {
            value = this.sortByID(value, false);
        }
        return value;
    };
    SortingPipe.prototype.sortByID = function (data, ascending) {
        if (ascending === void 0) { ascending = true; }
        data = data.sort(function (a, b) {
            if (a._id < b._id) {
                return -1;
            }
            if (a._id > b._id) {
                return 1;
            }
            return 0;
        });
        if (!ascending)
            data = data.reverse();
        return data;
    };
    SortingPipe = __decorate([
        core_1.Pipe({
            name: 'sortingPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], SortingPipe);
    return SortingPipe;
}());
exports.SortingPipe = SortingPipe;
//# sourceMappingURL=shared.pipe.js.map