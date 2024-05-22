import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellValueChangedEvent, GridOptions, ModelUpdatedEvent } from 'ag-grid-community'; 
import { AgGridAngular } from 'ag-grid-angular';
import { DealVM } from '../../../../viewModels/dealVm';
import { GridOptionsService } from './gridOptions.service';

@Component({
  selector: 'app-deal-list',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  providers: [GridOptionsService],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealListComponent implements OnInit {
  @Input() deals: DealVM[] = [];
  @Output() onItemsChanged = new EventEmitter<DealVM[]>();

  gridOptions!: GridOptions;

  ngOnInit(): void {
    this.gridOptions = this.gridOptionsService.getGridOptions();
    this.gridOptions.onModelUpdated = (event) => this.onModelChange(event);    
    this.gridOptions.onCellValueChanged = (event) => this.onCellValueChange(event);
  }

  private onModelChange(event: ModelUpdatedEvent) {
    if(!event.newData){
      const orders = event.api.getRenderedNodes().map(x => x.data);
      this.onItemsChanged.emit(orders);
    }
  }

  private onCellValueChange(event: CellValueChangedEvent) {
    const orders = event.api.getRenderedNodes().map(x => x.data);
    this.onItemsChanged.emit(orders);
  }

  constructor(private gridOptionsService : GridOptionsService) {    
  }
 }
