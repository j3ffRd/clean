import { Injectable } from "@angular/core";
import { ColDef, GridOptions, ValueGetterParams, ValueSetterParams } from "ag-grid-community";
import { AddRowRenderer } from "./cells/add-row.renderer";
import { DeleteRowRenderer } from "./cells/delete-row.renderer";
import { DealVM } from "../../../../domain/searchDeals/viewModels/dealVm";

@Injectable()
export class GridOptionsService {
    getGridOptions(): GridOptions {
        return {
            columnDefs: this.getColDefs(),
            domLayout: 'autoHeight', 
            rowSelection: 'single',     
            suppressMultiRangeSelection: false,
            suppressRowClickSelection: true,
            readOnlyEdit: true,
            enableRangeSelection: true,
            components: {
              'AddRowRenderer': AddRowRenderer,
              'DeleteRowRenderer': DeleteRowRenderer,
            },
    
        }
      }
    
      private getColDefs(): ColDef<DealVM>[]{
        return [
    
          {
            headerName: '',
            cellRenderer: DeleteRowRenderer,
          },
          {
            headerName: 'Description',
            headerComponent: AddRowRenderer,
            editable: true,
            valueGetter: (params: ValueGetterParams<DealVM>) => params.data?.productName,
          },
          {
            headerName: 'Underlying',
            editable: true,
            cellDataType: 'string',
            valueGetter: (params: ValueGetterParams<DealVM>) => params.data?.underlying,
            valueSetter: (params: ValueSetterParams<DealVM>) => {
              params.data.underlying = params.newValue;
              return true;
            },
          },
          {
            headerName: 'Client',
            editable: true,
            valueGetter: (params: ValueGetterParams<DealVM>) => params.data?.client,
          }
        ];
      }
}