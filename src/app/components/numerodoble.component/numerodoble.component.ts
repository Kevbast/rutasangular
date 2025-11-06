import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';//los necesitamos para recibir parámetro
@Component({
  selector: 'app-numerodoble.component',
  standalone: false,
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css',
})
export class NumerodobleComponent implements OnInit{//IMPLEMENTAMOS onInit para suscribirnos a los params
  public doble:number;
  public numero!:number;

  //EN EL CONSTRUCTOR RECIBIMOS EL OBJETO
  constructor(private _activeRoute:ActivatedRoute,
    private _router:Router//PARA EL MÉTODO GOTOHOME
  ){
    this.doble=0;
  }

  ngOnInit(): void {
    //aqui nos suscribimos
    this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENTRO DE PARAMS es donde recibimos los parámetros por su :name
      //LA SINTAXIS PARA RECUPERARLOS ES params['PARAMETRER NAME]
      //EN ESTE EJEMPLO ES OPCIONAL
      if(parametros['numero']!=null){
        //EL PARAMETRO SIEMPRE ES STRING
        this.numero=parseInt(parametros['numero']);
        this.doble=this.numero*2;
      }

    })

  }
  
  goToHome():void{
    this._router.navigate(['/']);
  }

  redirect(num:number):void{
    this._router.navigate(["/doble",num]);
  }

  
}
