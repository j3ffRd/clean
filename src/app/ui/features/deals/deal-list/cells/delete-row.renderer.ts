import { ICellRendererParams } from "ag-grid-community";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: `<button (click)="onButtonClicked()">Delete</button> `,
  })
export class DeleteRowRenderer implements ICellRendererAngularComp   {
    params!: ICellRendererParams;
    eGui!: HTMLElement;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.eGui = document.createElement('button');
        this.eGui.addEventListener('click', this.onButtonClicked);
    }

    refresh(params: ICellRendererParams): boolean {
        return false;
    }

    getGui(): HTMLElement {
        return this.eGui;
    }

    onButtonClicked(){
        this.params.api.applyTransaction({'remove': [this.params.node.data]});
    }
}