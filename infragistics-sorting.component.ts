import {Component, OnInit, ViewChild} from '@angular/core';
import {DefaultSortingStrategy, IgxGridComponent, IgxSelectComponent, SortingDirection} from "igniteui-angular";
import {DATA} from "../data/localData";

enum TYPE {
  SINGLE = 'single',
  MULTI = 'multiple'
}

@Component({
  selector: 'app-infragistics-sorting',
  templateUrl: './infragistics-sorting.component.html',
  styleUrls: ['./infragistics-sorting.component.css','./infragistics-sorting.scss']
})
export class InfragisticsSortingComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  @ViewChild(IgxSelectComponent)
  public igxSelect!: IgxSelectComponent;

  public data!: any[];
  public sortingTypes = [{ name: 'Multiple Sort', value: TYPE.MULTI }, { name: 'Single Sort', value: TYPE.SINGLE }];
  public currentSortingType: TYPE = TYPE.SINGLE;

  constructor() { }

  ngOnInit(): void {
    this.data = DATA;
    this.grid1.sortingExpressions = [
      {
        dir: SortingDirection.Asc, fieldName: 'CategoryName',
        ignoreCase: true, strategy: DefaultSortingStrategy.instance()
      }
    ];
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
  }

  public removeSorting($event: any) {
    if (this.currentSortingType === TYPE.SINGLE) {
      this.grid1.columns.forEach((col) => {
        if (!(col.field === $event.fieldName)) {
          this.grid1.clearSort(col.field);;
        }
      });
    }
  }

  public sortTypeSelection(event: any) {
    this.grid1.clearSort();
  }

}
