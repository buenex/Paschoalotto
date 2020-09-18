import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  validaSenha(senha:string,senhaRepetida:string):boolean{
    if(senha==senhaRepetida){
      return true;
    }else{
      return false;
    }
  }
}
