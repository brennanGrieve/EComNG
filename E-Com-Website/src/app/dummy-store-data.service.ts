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
      {id : 1, name: 'Gyroscope Sensor', price: 17, stock:99, shortDesc: "Gyroscopic Sensor expansion board", longDesc: "Small unit with a simple pinout, ideal for DIY projects and experimentation. Comes with a high quality 6axis capable sensor array.", specs: [{"Size" : "7cm x 15cm"}, {"Axis Configuration" : "6 Axis"}, {"Input range" : "3.3-5.5v"}]},
      {id : 2, name: '802.11n 2.4Ghz Wireless Transmitter', price: 18, stock:47, shortDesc: "Wireless transmitter for small electronics", longDesc: "IEEE compliant wireless transmitter, best suited for microcomputer projects.", specs: [{"Size" : "10cm x 12cm"}, {" Available Channels" : "11"}, {"Wireless Standard" : "IEEE 802.11n"}, {"Speed" : "Up to 150Mbps"}]},
      {id : 3, name: 'Accelerometer', price: 10, stock:32, shortDesc: "Accelerometer expansion board", longDesc: "Multi-Axis accelerometer with full support for direction and magnitude readings.", specs:[{"Size": "7cm x 10cm"}, {"Axis Configuration" : "Multi-Axis"}, {"Input range": "3.3-5.5v"}]},
      {id : 4, name: 'Proximity Sensor', price: 11, stock:34, shortDesc: "Proximity Sensor expansion board", longDesc: "Small, lightweight infrared proximity sensor. Features adjustable field radius. Ideal for use in hobbyist projects such as navigation AI.", specs: [{"Size" : "8cm x 4cm"}, {"Sensor Type": "Infrared"}, {"Field Radius" : "Adjustable"}, {"Input range" : "3.3-5.5v"}]},
      {id : 5, name: 'Lead Free Solder 200g', price: 29, stock:138, shortDesc: "Spool of industry grade solder.", longDesc: "No impurities guaranteed. Features an acid core to clean surfaces as you solder for enhanced joint connectivity, conductivity and reliability", specs:[{"Solder quantity" : "200g"}, {"Solder Core" : "Acid"}, {"Lead Content":"Lead Free"}]},
      {id : 6, name: 'PCB Vero-Type Strip - 95mm x 305mm', price: 14.95, stock:400, shortDesc: "Ready cut PCB Strips", longDesc: "Ready cut PCB strips, copper on fibreglass + Veroboard style railings.", specs:[{"Size": "95mm x 305mm"},{"Body Material" : "Fibreglass"}, {"Component Surface":"Copper"}, {"Railings" : "Veroboard style"}]},
      {id : 7, name: 'Soldering Iron Stand', price: 12, stock: 0, shortDesc: "A must-have tool for anyone who likes their workbench unmelted.", longDesc: "Durable Stainless steel twin-spiral holster, Heavy Cast Iron base + sponge holder. Great for heavy soldering irons.", specs:[{"Iron Holder" : "Stainless Steel Double Spiral holster"}, {"Base Material" : "Cast Iron"}, {"Sponge holder" : "Socket for replaceable cleaning sponge"}] },
      {id : 8, name: 'Soldering Aid - Magnifier/Crocs/Iron Stand', price: 15, stock: 3, shortDesc: "Make painfully burned fingertips a thing of the past!", longDesc: "Fully kitted out implement - features an array of helpful mounted tools to enhance safety, productivity and quality.", specs:[{"Crocodile Clips" : "Double Stainless steel croc clamps"}, {"Magnifying glass mount" : "Flexible"}, {"Iron Holder" : "Steel Double Spiral Soldering Iron Stand"}]},
      {id : 9, name: 'Soldering Iron Cleaner', price: 9, stock:88, shortDesc: "Clean means effective.", longDesc: "Long-lasting brass wool to thoroughly remove excess dirt and excess solder from a heated soldering iron, without damaging the tip.", specs:[{"Shell":"Cast Iron"},{"Cleaning solution":"Curly Brass Wool, replaceable"}]},
      {id : 10, name: 'Solder Sucker - Large', price: 15, stock: 455, shortDesc: "Removes solder in one quick pump.", longDesc: "This hand operated pump whisks away molten solder, undoing joints quickly and cleanly without damaging componentry.", specs:[{"Weight" : "Lightweight"}, {"Operation": "Hand-operated"}, {"Serviceability":"Easy disassembly for cleaning"}]},
      {id : 11, name: 'Desoldering Braid - 2mm', price: 8, stock: 734, shortDesc: "For the more sensitive desoldering jobs", longDesc: "Sturdy 2mm desoldering braid. This helpful tool thoroughly cleans away excess solder.", specs:[{"Length": "2mm"}, {"Braiding" : "Absorbent Copper"}]},
      {id : 12, name: 'Breadboard - 2x Terminal + Dist.', price: 22, stock: 24, shortDesc: "Always look before you leap", longDesc: "A long-time friend to prototypers everywhere, Breadboard allows for quick, mess free circuit prototype assembly and adjustment.", specs:[{"Size" : "18cm x 7cm x 1cm"}, {"Tie Points" : "1380"}, {"Terminal Strips": "2"}, {"Terminal Nodes" : "1280"}, {"Distribution Strip" : "Yes"}, {"Distribution Nodes" : "100"}]}
    ];
    return {catalog};
  }
  constructor(
  ) { }

}
