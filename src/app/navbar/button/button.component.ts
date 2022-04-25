import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public symbol: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeSymbol(symbol: boolean): boolean {
    symbol = !symbol;
    return symbol;
  }

  @HostListener("window:resize", []) updateDays() {
    // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
    // md (for small laptops - screens equal to or greater than 992px wide)
    // sm (for tablets - screens equal to or greater than 768px wide)
    // xs (for phones - screens less than 768px wide)
  
    if (window.innerWidth >= 992) {
      this.symbol = false;//md
    }
    else {
      this.symbol = true;
    }
  }

}
