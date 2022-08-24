import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  exalumnos: any = [
    {id: 1, nombre: 'Maria', curso: 'Angular'},
    {id: 2, nombre: 'Mercedes', curso: 'React Native'},
    {id: 3, nombre: 'Paula', curso: 'SASS'},
    {id: 4, nombre: 'Vanina', curso: 'CSS'},
    {id: 5, nombre: 'Nahuel', curso: 'Angular'},
  ];
  alumnos: any = [];
  cursos: any = [];
  cursosSubscription: Subscription;
  cursos$: Observable<any>;


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
    });
    this.cursosSubscription = this.rxjsService.obtenerObservableCursos().subscribe((cursos) =>{
      this.cursos = cursos;
    });

    this.cursos$ = this.rxjsService.obtenerObservableCursos();

    console.log(this.cursos$);

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log('Ejecutando ngOnDestry para desuscribirme del observable');
    this.cursosSubscription.unsubscribe();
  }
  agregarNuevoAlumno(){
    let curso = {
      id: 1,
      nombre: 'Carolina',
      comision: '12349'
    }

  this.rxjsService.agregarNuevoCurso(curso)
 }
  }
