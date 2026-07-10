import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InspeccionService } from '../../../../services/inspeccion/inspeccion.service';
import {ContadorPiezasXPrioridad} from '../../../../class/despachos/ContadorPiezasXPrioridad.class';
import {totalesInspeccionProducto} from '../../../../class/despachos/TotalesInspeccionProducto.class';
import { SessionUser } from '../../../../services/session/session.service';

@Component({
  selector: 'pq-barra-progreso-embalaje',
  templateUrl: './barra-progreso-embalaje.component.html',
  styleUrls: ['./barra-progreso-embalaje.component.scss']
})
export class BarraProgresoEmbalajeComponent implements OnInit {
  ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
  mensajeNaranja = 'Con el ritmo de Embalaje actual, no lograrás cumplir el objetivo.';
  mensajeAzul = 'Acelera el ritmo de Embalaje, para que logres el objetivo.';
  mensajeVerde = 'Con el ritmo de Embalaje actual, lograrás cumplir el objetivo.';
  colorBarra: any;
  naranja = '#FF6700';
  azul = '#0098DA';
  verde = '#94BA13 ';
  /// Variables para tiempo
  tiempoP2: any = 0;
  tiempoP3: any = 0;
  totTiempoEstimadoPrioridada: any;
  constructor(private router: Router, private _totalpzasInsp: InspeccionService, private _pzasAInspeccionar: InspeccionService) {}
  @Input() datosBarra: any;
  @Input() datosTiempo: any;
  totalPiezasHoy: any;
  piezasEmbaladasHoy: any = 0;
  piezasRestantesHoy: any = 0;
  // Piezas por prioridad
  pzasP1: number = 0;
  pzasP2: number = 0;
  pzasP3: number= 0;
  tiempo: any = 5;
  tiempoP1 = 0;
  // Devuelve las piezas tomando en cuenta singular y plural
  formatoPzaP1;
  formatoPzaP2;
  formatoPzaP3;

  // Tiempo Estimado de Inspeccion por prioridad
  TEIPrioridad1: any;
  TEIPrioridad2: any;
  TEIPrioridad3: any;

  // variables para mostrar u ocultar los recuadros por prioridad
  mostrarP1: boolean;
  mostrarP2: boolean;
  mostrarP3: boolean;

  // varibales para jugar con el porcentaje de visualizacion  segun el caso
  porcentajeP1: string ;
  porcentajeP2: string ;
  porcentajeP3: string ;

  // Variables para el manejo de los mensajes mostrados
  descripcionLargaP2: boolean ;
  descripcionCortaP2: boolean ;
  descripcionLargaP3: boolean ;
  descripcionCortaP3: boolean ;
  // Variables para darle formato al texto
  formatoPzasInspeccionadas;
  pzasRestantes: number;
  formatoPzasRestantes;
////
  ContadorPiezasXPrioridad1: ContadorPiezasXPrioridad;
  totalesInspeccionProducto1: totalesInspeccionProducto;
  // Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
  PzasInspeccionadas: any= 0;
  pzasTotales : any = 7;
  // Variables para la hora
  hora;
  idHora;
  // Variables para la barra de progreso
  promedio: string;
  restante: string;
    ngOnInit() {
      this.inspector = SessionUser.getInstance().getUser().getUsuario();
      /*this.obtenerPiezasInspeccionadasHoy(this.inspector);*/
      this.obtenerPiezasInspeccion(this.inspector);
      this.idHora = setInterval(() => {
        this.hora = this.obtenerHoraActual();
      }, 1000);
      this.obtenerDatosBarraProgreso();
      /*Llamada a los metodos de prioridad*/
      this.obTenerTotalesEmbalar();
      // this.obtenerTotalesPorInspector(this.inspector);
      // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
      // this.mostrarPartidasInspeccion();
    }
    ngOnChanges() {
      // this.mostrarTiempo();
      this.obtenerTotalesPorInspector();
      this.totTiempoEstimadoPrioridada = this.obtenerTotalTiemporEstimado(this.TEIPrioridad1, this.TEIPrioridad2, this.TEIPrioridad3);
      /*console.log('Recibi total-->', this.totTiempoEstimadoPrioridada );*/
      let recibirHoraActual = this.obtenerHoraActual();
      this.cambiarColorBarra(this.totTiempoEstimadoPrioridada, recibirHoraActual);
    }
    ngOnDestroy() {
      clearInterval(this.idHora);
    }
  mostrarTiempo() {

  }
    obtenerDatosBarraProgreso () {
      this.totalPiezasHoy = this.datosBarra.totalPiezas;
      this.piezasEmbaladasHoy = this.datosBarra.piezasEmbaladas;
      this.piezasRestantesHoy = this.totalPiezasHoy - this.piezasEmbaladasHoy;
      this.formatoPzasInspeccionadas = (this.piezasEmbaladasHoy === 1) ?  this.piezasEmbaladasHoy + ' pieza embalada' : this.piezasEmbaladasHoy + ' piezas embaladas';
      this.formatoPzasRestantes = (this.piezasRestantesHoy === 1) ?  this.piezasRestantesHoy + ' pieza (restante)' : this.piezasRestantesHoy + ' piezas (restantes)' ;
      this.promedio = this.obtenerPorcentaje(this.totalPiezasHoy, this.piezasEmbaladasHoy) + '%';
      this.restante = this.obtenerRestante(this.totalPiezasHoy) + '%';
    }
    inspector: string ; // Descomentar la linea para conectar con el usuario de la sesion.
    // inspector:string = "aHernandezM";

    evento: string = 'embalaje';
    mensaje: string;

    // Variables para mostrar el tooltip y el texto;
    toolTipRigth: boolean;
    textRigth: boolean;
    tooltiptextLeft: boolean;
    textLeft: boolean;

    obtenerPiezasInspeccion(inspector: string): any {
      var piezasTotalesInspeccion: number;
       this._totalpzasInsp.sumaPiezasInspeccionadasyPorInspeccionar(this.inspector).subscribe(
        data => {
          // piezasTotalesInspeccion= data.current;
          // console.log(piezasTotalesInspeccion);
          let pzasTotales1 = piezasTotalesInspeccion;
          this.pzasTotales = pzasTotales1;
          this.obtenerRestante(this.pzasTotales);
          this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
          this.formatoPzasRestantes = (this.pzasRestantes === 1) ?  this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' piezas (restantes)' ;
          this.promedio = this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + '%';
          this.restante = this.obtenerRestante(this.pzasTotales) + '%';
          },error => {
          // console.log("error al obtener las piezas en inspeccion..." + error);
            }
          );
        }

        // Funcion para obtener porcentaje restante
        obtenerRestante(pzasTotales: number) {
          let restante = 100 - this.obtenerPorcentaje(this.totalPiezasHoy, this.piezasEmbaladasHoy);
          return restante;
        }
        // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
        obtenerPorcentaje(totales: number, inspeccionadas: number) {
          let porcentaje: number;
          if (totales < inspeccionadas) {
            alert('El numero de piezas inspeccionadas es mayor que las piezas totales');
          } else if (totales === inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            // alert("El porcentaje es: " + porcentaje + "%" + "\nFelicidades has inspeccionado todas las piezas");
          } else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 10) {
              this.toolTipRigth = false;
              this.textRigth = true;
              this.tooltiptextLeft = true;
              this.textLeft = false;
            } else if (porcentaje >= 90 && porcentaje <= 100) {
              this.toolTipRigth = true;
              this.textRigth = false;
              this.tooltiptextLeft = false;
              this.textLeft = true;
            } else {
              this.toolTipRigth = false;
              this.textRigth = true;
              this.tooltiptextLeft = false;
              this.textLeft = true;
            }
          }
          return porcentaje;
        }

      obtenerHoraActual() {
        let fecha = new Date();
        let formatoMinutos = fecha.getMinutes();
        let minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        let formatoHoras = fecha.getHours();
        let hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        // let FormatoSegundos = fecha.getSeconds();
        // let seconds = (FormatoSegundos < 10) ? '0' + FormatoSegundos : FormatoSegundos;
        return hours + ':' + minutes + ' Hrs.';
      }
    /////////////////////////////////////  METODO PARA OBTENER EL TIEMPO TOTAL ESTIMADO DE LAS TRES PRIORIDADES ///////////////
    obtenerTotalTiemporEstimado(tiempoP1, tiempoP2, tiempoP3) {
      let tiempoEstimadoP1: any = tiempoP1;
      let tiempoEstimadoP2: any = tiempoP2;
      let tiempoEstimadoP3: any = tiempoP3;
      let tiempoTot: any[] = [];
      let hrP1 = 0;
      let hrP2 = 0;
      let hrP3 = 0;
      let minP1 = 0;
      let minP2 = 0;
      let minP3 = 0;
      // console.log('p1::', tiempoEstimadoP1);
      // console.log('p2::', tiempoEstimadoP2);
      // console.log('p3::', tiempoEstimadoP3);
      ////// calcular prioridad uno
      if (this.pzasP1 > 0 ) {
        let arrayTE1: any[] = tiempoEstimadoP1.split(' ');
        if (arrayTE1.length > 3 ) {
           hrP1 = Number(arrayTE1[0]); // 1
           minP1 = Number(arrayTE1[2]); // 15
        } else if (arrayTE1.length === 2) {
           hrP1 = 0; // 1
          let minP1 = Number(arrayTE1[0]); //
        } else {
           hrP1 = 0; // 1
           minP1 = 0; //
        }
      } else {
         hrP1 = 0; // 1
         minP1 = 0; //
      }
      /////// calcular la prioridad 2
      if (this.pzasP2 > 0) {
        let arrayTE2: any[] = tiempoEstimadoP2.split(' ');
        if (arrayTE2.length > 3) {
           hrP2 = Number(arrayTE2[0]); // 1
           minP2 = Number(arrayTE2[2]); // 15
        } else if (arrayTE2.length === 2) {
           hrP2 = 0; // 0
          let minP2 = Number(arrayTE2[0]); //
        } else {
          hrP2 = 0; // 0
          minP2 = 0;
        }
      } else {
         hrP2 = 0; // 0
         minP2 = 0;
      }
      if (this.pzasP3 > 0) {
        /////// calcular la prioridad 3
        let arrayTE3: any[] = tiempoEstimadoP3.split(' ');
        if (arrayTE3.length > 3) {
          hrP3 = Number(arrayTE3[0]); //
           minP3 = Number(arrayTE3[2]); //
        } else if (arrayTE3.length === 2) {
           hrP3 = 0; // 1
           minP3 = Number(arrayTE3[0]); //
        } else {
           hrP3 = 0; // 1
           minP3 = 0; //
        }
      } else {
        hrP3 = 0; // 1
        minP3 = 0; //
      }
      let sumHrs = hrP1 + hrP2 + hrP3;
      let sumMin = minP1 +minP2 +minP3;
      if (sumMin >= 60) {
        let hrAux = (Math.floor((sumMin * 60) / 3600)) + sumHrs;
        let minAux = Math.floor( ((sumMin * 60 ) % 3600) / 60 );
        tiempoTot.push(hrAux);
        tiempoTot.push(minAux);
      } else {
        tiempoTot.push(sumHrs);
        tiempoTot.push(sumMin);
      }
      console.log( ' Total tiempo::', tiempoTot);
      return tiempoTot;
      }
    ///////////////////// METODO PARA COLOCAR EL MENSAJE DE L BARRA DE PROGRESO SEGUN EL TIEMPO ESTIMADO Y LA HORA DE SALIDA////
    cambiarColorBarra(tiempoE: any, horaActual: string) {
      console.log('Entre a cambiar color');
      console.log('Soy tiempo estimado', tiempoE);
      console.log('Soy tiempo eactual', horaActual);
      let hr = tiempoE [0];
      let min = tiempoE [1];
      //let tiempoEstimado:any = tiempoE;
      let tiempoRestante:any;
      //let hrSalida = '18:00 Hrs.'
      let hrSalida = '18:00 Hrs.';
      let hrRango = '17:00 Hrs.';
////////////////// SE CONVIERTE LA HORA DE SALIDA A NUMERICO //////////////////////////////////
      let partsSalida: any[] = hrSalida.split(':');
      let hrActualSalida = Number(partsSalida[0]);
      let auxSalida = partsSalida[1];
      let minSalida: any[] = auxSalida.split(' ');
      let minActualSalida = Number(minSalida[0]);
      let horaSalidaAComparar = Number(hrActualSalida + '.' + minActualSalida);

      let partsSalidaR: any[] = hrRango.split(':');
      let hrActualSalidaR = Number(partsSalidaR[0]);
      let auxSalidaR = partsSalidaR[1];
      let minSalidaR: any[] = auxSalidaR.split(' ');
      let minActualSalidaR = Number(minSalidaR[0]);
      let horaSalidaACompararR = Number(hrActualSalidaR + '.' + minActualSalidaR);

/////////////// SE CONVIERTE LA HORA ACTUAL A NUMERICO ////////////////////////////////////
      let parts: any[] = horaActual.split(':');
      let hrActual = Number(parts[0]);
      let aux = parts[1];
      let partsmin: any[] = aux.split(' ');
      let minActual = Number(partsmin[0]);
      let sumaHoras = hrActual + hr;
      let sumaMin = minActual + min;
      // console.log('sum de hora + lo que fal-->', sumaHoras, ':', sumaMin);
      if (sumaMin >= 60) {
        let hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
        let minAux = Math.floor( ((sumaMin * 60 ) % 3600) / 60 );
        tiempoRestante = Number (hrAux + '.' + minAux);
      } else {
        tiempoRestante = Number (sumaHoras +'.'+ sumaMin ) ; // 18:30 Hrs
      }
      if ( (tiempoRestante > horaSalidaACompararR) && (tiempoRestante < horaSalidaAComparar)) {
        this.mensaje = this.mensajeAzul;
        this.colorBarra = this.azul;
      } else if ( tiempoRestante > horaSalidaAComparar) {
        this.mensaje = this.mensajeNaranja;
        this.colorBarra = this.naranja;
      } else if (tiempoRestante < horaSalidaAComparar) {
        this.mensaje = this.mensajeVerde;
        this.colorBarra = this.verde;
      }
    }
  /*METODOS DE PRIORIDADES*/
  obTenerTotalesEmbalar() {
    this.pzasP1 = this.datosBarra.prioridad1;
    this.pzasP2 = this.datosBarra.prioridad2;
    this.pzasP3 = this.datosBarra.prioridad3
    /// console.log('Soy p1:::', this.pzasP1);
    this.mostrarPartidasInspeccion();
  }

  // Mostrar listado de partidas para inspeccion.
  mostrarPartidasInspeccion() {
    // this.coreComponent.openModal(0);
        //Test
        this.mostrarP1 = this.visualizarP1(this.pzasP1);
        this.mostrarP2 = this.visualizarP2(this.pzasP2);
        this.mostrarP3 = this.visualizarP3(this.pzasP3);

        this.formatoPzaP1 = (this.pzasP1 == 1) ?  this.pzasP1 + ' pieza' : this.pzasP1 + ' piezas' ;
        this.formatoPzaP2 = (this.pzasP2 == 1) ?  this.pzasP2 + ' pieza' : this.pzasP2 + ' piezas' ;
        this.formatoPzaP3 = (this.pzasP3 == 1) ?  this.pzasP3 + ' pieza' : this.pzasP3 + ' piezas' ;

        this.porcentajeP1 = this.obtenerPorcentajeP1(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP2 = this.obtenerPorcentajeP2(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP3 = this.obtenerPorcentajeP3(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";

        /// console.log("filtra prioridad");
        // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
        /* this.partidaPrioridad = new PartidaInspeccion(); */
  }
  // Funciones para visualizar los recuadros por prioridad
  visualizarP1(piezasPI: number) {
    if (piezasPI < 1 ) {
      return false;
    } else
      return true;
  }

  visualizarP2(piezasPI: number) {
    if (piezasPI < 1 ) {
      return false;
    } else
      this.descripcionLargaP2 = true;
    return true;
  }

  visualizarP3(piezasPI: number) {
    if (piezasPI < 1 ) {
      return false;
    } else
      this.descripcionLargaP3 = true;
    return true;
  }
  // Funciones para porcentajes
  obtenerPorcentajeP1(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje : number;
    if (value1 == true && value2 ==true && value3 ==false) {
      porcentaje = 70;
    } else if(value1 == true && value2 ==true && value3 ==true){
      porcentaje = 50;
    } else if(value1 == true && value2 ==false && value3 ==true){
      porcentaje = 70;
    }
    return porcentaje;
  }

  obtenerPorcentajeP2(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje : number;
    if (value1 == false && value2 ==true && value3 ==true) {
      this.descripcionLargaP2 = true;
      this.descripcionCortaP2 = false;
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 70;
    } else if (value1 === true && value2 === true && value3 === true) {
      this.descripcionLargaP2 = false;
      this.descripcionCortaP2 = true;
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 25;
    } else if (value1 === true && value2 === true && value3 === false){
      this.descripcionCortaP2 = true;
      this.descripcionLargaP2 = false;
      porcentaje = 30;
    }
    return porcentaje;
  }

  obtenerPorcentajeP3(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje: number;
    if (value1 == true && value2 ==false && value3 ==true) {
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 30;
    }else if(value1 == true && value2 ==true && value3 ==true){
      porcentaje = 25;
    } else if(value1 ==  false && value2 ==true && value3 ==true){
      porcentaje = 30;
    }
    return porcentaje;
  }
  // Método para obtener el promedio por pieza de cada embalaje por prioridad, que trae el servicio.
  obtenerTotalesPorInspector() {
        // let tiempoT = 1;
        for (var i = 0; i < this.datosTiempo.length; i++) {
          if (this.datosTiempo[i].prioridad === 'P1') {
            this.tiempoP1 = this.datosTiempo[i].tiempo;
          } else if (this.datosTiempo[i].prioridad === 'P2') {
            this.tiempoP2 =  this.datosTiempo[i].tiempo;
          } else if (this.datosTiempo[i].prioridad === 'P3') {
            this.tiempoP3 =  this.datosTiempo[i].tiempo;
          }
        }
        this.TEIPrioridad1 = this.obtenerTiempoEstimado(this.pzasP1, this.tiempoP1);
        // console.log('Tiempo estimado:', this.TEIPrioridad1);
        this.TEIPrioridad2 = this.obtenerTiempoEstimado(this.pzasP2, this.tiempoP2);
        this.TEIPrioridad3 = this.obtenerTiempoEstimado(this.pzasP3, this.tiempoP3);
  }


 ////////////////// SE OBTIENE EL TIEMPO ESTIMADO DEL TOTAL DE  PIEZAS QUE FALTAN POR EMABALAR ////////////////
  obtenerTiempoEstimado(piezas: number, tPromedio: number) {
    let tiempo = piezas * tPromedio;
    let hours: any;let minutes:any;
    let seconds: any;
    hours = Math.floor( tiempo / 3600 );
    minutes = Math.floor( (tiempo % 3600) / 60 );
    seconds = tiempo % 60;
    // Anteponiendo un 0 a los minutos si son menos de 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
    if ((hours == 0 || hours == NaN) && minutes == 0) {
      let result =  "1 min";
      return result;
      // console.log("1 minuto restante o menos  ");
    }else if(hours <=0){
      let result = minutes + " min";
      return result;
    } else {
      let result = hours + " hr " + minutes + " min";
      return result;
    }
  }

}
