import { Component  } from '@angular/core';
import {Map, tileLayer, marker} from 'leaflet';
import { icon, Marker } from 'leaflet';
import { windowWhen } from 'rxjs';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  ngAfterViewInit(): void {
    const map = new Map('map').setView([48.2045015,16.3693725], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    marker([48.2045015,16.3693725]).addTo(map).bindPopup("Hey you found an <a href=''>Easter egg</a>!");
  }

}
