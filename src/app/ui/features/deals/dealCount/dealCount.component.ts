import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DealStoreFacade } from '../../../../store/deals/facade';

@Component({
  selector: 'app-deal-count',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dealCount.component.html',
  styleUrl: './dealCount.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealCountComponent {
    private store = inject(DealStoreFacade);
    dealCount$ = this.store.getDealCount$();
}
