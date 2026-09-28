import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from '../session/session.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import { parametrosInspeccion } from '../../class/despachos/parametrosInspeccion.class';
import { PartidaInspeccion } from '../../class/despachos/PartidaInspeccion.class';
import { DocumentoAdjunto } from '../../class/comun/DocumentoAdjunto.class';

@Injectable()
export class InspeccionService {
  private apiURL: String = SessionUser.getInstance().getIP() + "consultaPartidasInspeccion";
  private apiURLPartidasApiladas: String = SessionUser.getInstance().getIP() + "obtenerPartidasApiladas";
  private apiURLtotlaesInspeccion: String = SessionUser.getInstance().getIP() + "obtenerTotalesDeinspecionPorUsuario";
  private apiURLRecibePiezasInspeccionadasHoy: String = SessionUser.getInstance().getIP() + "obtenerPiezasInspeccionadasHoy";
  private apiURLSumaPiezasInspeccionadasyPoyInspeccionar: String = SessionUser.getInstance().getIP() + "sumarPiezasInspeccionadasYPorInspeccionar";
  private apiURLconsultaDeTotalesPorInspector: String = SessionUser.getInstance().getIP() + "consultaDeTotalesPorInspector";
  private apiURLordenarPartidasInspeccion: String = SessionUser.getInstance().getIP() + "ordenarPartidasInspeccion";
  private apiURLTerminarInspeccion: string = SessionUser.getInstance().getIP() + "finalizarInspeccionDePartidas";
  private apiURLContadorPendientes: string = SessionUser.getInstance().getIP() + "obtenerNumPendientesInspeccion";
  private apiURLContadorPzasXPrioridad: string = SessionUser.getInstance().getIP() + "obtenerPiezasPorPrioridad";
  private apiURLobtenerConsecutivoDeLoteInspeccion: string = SessionUser.getInstance().getIP() + "obtenerConsecutivoDeLoteInspeccion";
  private apiURLobtenerModoInspeccion: string = SessionUser.getInstance().getIP() + "obtenerModoInspeccion";
  private apiURLnombreArchivo: string = SessionUser.getInstance().getIP() + "nombreArchivo";
  private apiURLguardarArchivo: string = SessionUser.getInstance().getIP() + "guardarArchivo";
  private apiURLobtenerUbicacion: string = SessionUser.getInstance().getIP() + "obtenerUbicacionInspeccion";
  private apiURLguardarExistenciaUbicaion: string = SessionUser.getInstance().getIP() + "guardarExistenciaUbicacion";
  private apiURLguardarConsumible: string = SessionUser.getInstance().getIP() + "guardarConsumible";
  private apiURLapartarInspeccion: string = SessionUser.getInstance().getIP() + "inspeccionar/apartarInspeccion";
  private apiURLuploadImage: string = SessionUser.getInstance().getIP() + "inspeccionar/uploadImage";
  private apiURLobtenerComboUnidad: string = SessionUser.getInstance().getIP() + "inspeccionar/obtenerComboUnidad";
  private apiURLverificarApartado: string = SessionUser.getInstance().getIP() + 'inspeccionar/verificarApartado';
  constructor(private http: Http) {
    console.log("regreso de service inspeccion");
  }

  verificarFinalizar(param) {
    const body = param;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLverificarApartado + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  obtenerComboUnidad(tipo) {
    let body = tipo;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerComboUnidad + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  uploadImage(obj, tipo) {
    let dataFile = new FormData();
    for (let i = 0; i < obj.length; i++) {
      dataFile.append('file', obj[i].archivo);
    }
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadImage + '/' + tipo, dataFile, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  apartarInspeccion(idUsuario) {
    let body = idUsuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLapartarInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  recibePartidasInspeccion() {
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  recibePartidasApiladas() {
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  RecibePiezasInspeccionadasHoy(inspector: string) {
    let body = JSON.stringify(inspector);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLRecibePiezasInspeccionadasHoy + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  recibeTotalesInspecion(usuario: string) {
    let body = usuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLtotlaesInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  sumaPiezasInspeccionadasyPorInspeccionar(inspector: string) {
    let body = JSON.stringify(inspector);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLSumaPiezasInspeccionadasyPoyInspeccionar + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


  consultaDeTotalesPorInspector(inspector: string) {
    let body = inspector;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLconsultaDeTotalesPorInspector + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  ordenarPartidasInspeccion(inspector: string) {
    let body = JSON.stringify(inspector);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLordenarPartidasInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  recibeRespuestaFinalizarInspeccion(parametros: parametrosInspeccion) {
    let body = parametros;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLTerminarInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  recibeNumPendientes() {
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLContadorPendientes + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerPiezasPorPrioridad() {
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLContadorPzasXPrioridad + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerConsecutivoDeLoteInspeccion(concepto: string) {
    let body = concepto;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerConsecutivoDeLoteInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerModoInspeccion() {
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerModoInspeccion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  nombreArchivo(data: any) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLnombreArchivo + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  /** Igual que nombreArchivo pero con timeout y sin transformar el error, para mostrar el codigo HTTP y el mensaje del backend */
  guardarVideo(data: any, timeoutMs: number) {
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLnombreArchivo + '', data, options)
      .timeout(timeoutMs)
      .map(respuesta => respuesta.json());
  }

  guardarArchivo(files: FileList, tipo: string, codigo: string, lote: string) {
    if (files === undefined) {
      console.log('0 archivos enviados');
    } else {
      if (files.length > 0) {
        let file: File = files[0];
        console.log(file);
        let formData: FormData = new FormData();
        // formData.append('file', file, file.name);
        console.log(formData);
        let body = {
          file: formData.append('', file),
          tipo: tipo,
          codigo: codigo,
          lote: lote
        }
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLguardarArchivo + "", body, options)
          .map((data: Response) => data)
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

      }
    }
  }

  guardaDocumentacion(listaArchivos: any, folioDocumento: string, subcarpeta: string, tipoArchivo: string) {

    if (listaArchivos != undefined) {
      //  for ( let i = 0; i<listaArchivos.length; i++){
      let formData: FormData = new FormData();
      let file: File = listaArchivos;
      console.log(file);
      // listaArchivos.forEach( (file, index) => {
      formData.append('file', file, '');
      // });

      return this.http.post(`${this.apiURLguardarArchivo}/${folioDocumento}/${subcarpeta}/${tipoArchivo}`, formData)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      //   }
    }
  }

  obtenerUbicacionInspeccion(data: any) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerUbicacion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  guardarExistenciaUbicacion(data: any) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLguardarExistenciaUbicaion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  guardarConsumible(data: any) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLguardarConsumible + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


}
