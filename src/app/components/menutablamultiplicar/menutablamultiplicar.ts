import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-menutablamultiplicar',
  standalone: false,
  templateUrl: './menutablamultiplicar.html',
  styleUrl: './menutablamultiplicar.css',
})
export class Menutablamultiplicar {
  public numeros:Array<number>
  constructor(){
    this.numeros=new Array<number>
    for (let i = 0; i <=5; i++) {//se puede declarar directamente en el constructor
      let random =Math.floor((Math.random()*100)+1);

      this.numeros.push(random);
    }

  }


}
