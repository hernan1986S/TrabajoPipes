import { Component } from '@angular/core';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: any = [];
  constructor(
    private rxjsService: RxjsService
  ){
      //this.rxjsService.obtenerPromiseAlumnos().then((alumnos) =>{
      //console.log('Estoy desde el promise de alumnos:', alumnos);
      //this.alumnos = alumnos;
      //}).catch((error) => {
      //console.log(error)
      //});

    this.rxjsService.obtenerObservableAlumnos().subscribe((alumnos) =>{
      console.log('Estoy desde el observable de alumnos:', alumnos);
      this.alumnos = alumnos;
    })
  }
  agregarNuevoAlumno(){
    let alumno = {
      id: 10,
      nombre: 'Carolina',
      curso: 'UXUI'
    }
    this.rxjsService.agregarNuevoAlumno(alumno);
  }
}
