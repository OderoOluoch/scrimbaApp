import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'filter-textbox',
    template:`
    <form>
    <div class="form-group">
      <small class="form-text text-muted">Search across our databases</small>
      <input type="text" [(ngModel)]="filter" name="search"  class="form-control" placeholder="Enter key words">
    </div>
    </form>
    `
})

export class FilterTextboxComponent implements OnInit{
    constructor(){}

    private _filter:string;

    @Input() get filter(){
      return this._filter;
    }

    set filter(val:string){
      this._filter = val;
      this.changed.emit(this.filter);
    }

    @Output() changed:EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(){}
}