import {Component, OnInit, ViewChild} from '@angular/core';
import {IgxGridComponent} from "igniteui-angular";
import { athletesData } from '../data/athletes';

@Component({
  selector: 'app-infragistics-paging',
  templateUrl: './infragistics-paging.component.html',
  styleUrls: ['./infragistics-paging.component.css','./infragistics-paging.scss']
})
export class InfragisticsPagingComponent implements OnInit {

  @ViewChild('grid1', { static: true }) public grid1?: IgxGridComponent;
  public data!: any[];

  constructor() { }

  ngOnInit(): void {
    this.data = athletesData;
  }

}
