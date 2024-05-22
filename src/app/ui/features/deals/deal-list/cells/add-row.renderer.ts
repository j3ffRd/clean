import { IHeaderComp, IHeaderParams } from "ag-grid-community";
import {maxBy} from 'lodash';
import { IHeaderAngularComp } from "ag-grid-angular";
import { Component } from "@angular/core";
import { DealVM } from "../../../../../viewModels/dealVm";

@Component({
    standalone: true,
    template: `<button (click)="onButtonClicked()">Add</button> `,
  })
export class AddRowRenderer implements IHeaderAngularComp   {
    params!: IHeaderParams;
    eGui!: HTMLElement;

    agInit(params: IHeaderParams): void {
        this.params = params;
        this.eGui = document.createElement('button');
        this.eGui.addEventListener('click', this.onButtonClicked);
    }

    refresh(params: IHeaderParams): boolean {
        return false;
    }

    getGui(): HTMLElement {
        return this.eGui;
    }

    onButtonClicked(){
        const data = this.params.api.getRenderedNodes().map(node => node.data);
        const newId = data.length !== 0 ? maxBy(data, (order: DealVM) => order.id)!.id + 1 : 1;
        this.params.api.applyTransaction({'add': [{id: newId}]});
    }
}