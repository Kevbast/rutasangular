import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.html',
  styleUrl: './tablamultiplicarrouting.css',
})
export class Tablamultiplicarrouting implements OnInit {
  public numeros!:Array<number>;
  public numrecibido!:number
  constructor(private _activeRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENTRO DE PARAMS es donde recibimos los parámetros por su :name
        this.numrecibido=parseInt(parametros['numero']);
        console.log(this.numrecibido);
        this.numeros=[];
        for (let i = 1; i <=10; i++) {
          let result= this.numrecibido*i
          this.numeros.push(result)
        }
      

    })
  }


}
