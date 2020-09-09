import { Injectable } from '@angular/core';
import { Merchant } from '../models/Merchant';

@Injectable({
  providedIn: 'root',
})
export class MerchantDataService {
  constructor() {}

  getMerchantsDummy(): Merchant[] {
    let merchants: Merchant[] = [
      { id: '1', name: 'Vernon Industries' },
      { id: '2', name: 'Vernon Industries' },
      { id: '3', name: 'Vernon Industries' },
    ];
    return merchants;
  }
}
