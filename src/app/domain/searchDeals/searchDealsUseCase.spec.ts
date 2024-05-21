import { TestBed } from '@angular/core/testing';
import { Mocks } from '../../../mocks/mocks';

describe('searchDealsUseCase', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
    }).compileComponents();
  });

  it('should get deals', () => {
    const deal =  Mocks.dtos.getDeals({underlying: {name: "TTF"}});
    expect(deal.underlying.name).toBe('TTF');
  });
});
