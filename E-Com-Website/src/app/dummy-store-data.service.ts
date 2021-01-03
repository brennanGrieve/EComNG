import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
/**
 * Replace LAMP Backend with simple list of entries, and work on the frontend for now. 
 */
export class DummyStoreDataService implements InMemoryDbService{
  createDb(){
    const catalog = [
      {id : 1, name: 'Gyroscope', price: 17, shortDesc: "Compact Gyroscopic Sensor", longDesc: "", specs: ["These are placeholder specs. Each array will be properly populated soon.", "Low Size", "Energy Efficient"]},
      {id : 2, name: 'IEEE 802.11 Wireless Transmitter', price: 18},
      {id : 3, name: 'Accelerometer', price: 10},
      {id : 4, name: 'Proximity Sensor', price: 11},
      {id : 5, name: 'Lead Free Solder 200g', price: 29 },
      {id : 6, name: 'PCB Vero-Type Strip - 95 x 305mm', price: 14.95},
      {id : 7, name: 'Soldering Iron Stand', price: 12 },
      {id : 8, name: 'Soldering Aid - Magnifier/Crocs/Iron Stand', price: 15},
      {id : 9, name: 'Soldering Iron Cleaner', price: 9},
      {id : 10, name: 'Solder Sucker - Large', price: 15},
      {id : 11, name: 'Desoldering Braid - 2mm', price: 8},
      {id : 12, name: 'Breadboard - 2x Terminal + Dist.', price: 22}
    ];
    return {catalog};
  }
  constructor(
  ) { }

}
