import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  alumnos: any[] = [
    {id: 1, nombre: 'Hernan', curso: 'Angular'},
    {id: 2, nombre: 'Pamela', curso: 'UXUI'},
    {id: 3, nombre: 'Milo', curso: 'Angular'},
    {id: 4, nombre: 'Simba', curso: 'ReactJS'},
    {id: 5, nombre: 'Cato', curso: 'Angular'},
    {id: 6, nombre: 'Tina', curso: 'UXUI'},
    {id: 7, nombre: 'Ramon', curso: 'Angular'},
    {id: 8, nombre: 'Kiti', curso: 'JavaScript'},
     ];
     alumnosObservable: Observable<any>;
     cursos: any[] = [];
     cursosSubjet: Subject<any>

  constructor(){
    this.cursosSubjet = new Subject();
    this.alumnosObservable = new Observable<any>((suscriptor) =>{
      suscriptor.next(this.alumnos);

      setTimeout(() =>{
        this.alumnos.push({id: 9, nombre: 'Carlos', curso: 'Kotlin' });
        suscriptor.next(this.alumnos);
      },3000)
    });
  }


  obtenerPromiseAlumnos(){
    return new Promise((resolve, reject) =>{
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject({
          codigo: 0,
          mensaje:'No hay alumnos en clase'
        });
      }
    });
  }

  obtenerObservableAlumnos(){
    return this.alumnosObservable;
  }


  obtenerObservableCursos(){
    return this.cursosSubjet.asObservable();
  }

  agregarNuevoCurso(curso: any){
    this.cursos.push(curso);
    this.cursosSubjet.next(this.cursos);
    console.log(this.cursos);
  }
}
