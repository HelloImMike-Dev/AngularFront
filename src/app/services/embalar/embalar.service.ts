import { Injectable } from '@angular/core';
import { Http, Response, Headers,  RequestOptions } from '@angular/http';
import { SessionUser } from '../session/session.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import {Empleado} from '../../class/Empleado.class';
import {Parametros} from '../../class/Parametros.class';
import {error} from 'util';

@Injectable()
export class EmbalarService {

  private apiURLconsultaPartidasEmbalar: String = SessionUser.getInstance().getIP() + "consultaPartidasEmbalar";
  private apiURLConsultaTotalEmbalar: String = SessionUser.getInstance().getIP() + "ConsultaTotalEmbalar";
  private apiURLConsultaEstadisticaUsuarioEmbalar: String = SessionUser.getInstance().getIP() + "ConsultaEstadisticaUsuarioEmbalar";
  private apiURLcolectarPartidas: String = SessionUser.getInstance().getIP() + "colectarPartidas";
  private apiURLobtenerFolioPorUsuario: String = SessionUser.getInstance().getIP() + "obtenerFolioPorUsuario";
  private apiURLconsultarEstado: String = SessionUser.getInstance().getIP() + "consultarEstado";
  private apiURLgenerarPackingList: String = SessionUser.getInstance().getIP() + "generarPackingList";
  private apiURLregistrarEmbalarPedido: String = SessionUser.getInstance().getIP() + "registrarEmbalarPedido";
  private apiURLactualizarEstadoInsertarPendiente: String = SessionUser.getInstance().getIP() + "actualizarEstadoInsertarPendiente";
  private apiURLgenerarDocumentos: String = SessionUser.getInstance().getIP() + "generarDocumentos";
  private apiURLguardarConsumible: String = SessionUser.getInstance().getIP() + "guardarConsumible";
  private apiURLarchivoPedido: String = SessionUser.getInstance().getIP() + "pathFilePedidos";
  private apiURLpedidosGDL: String = SessionUser.getInstance().getIP() + "embalar/pedidosGDL";
  private apiURLobtenerDatosContacto: String = SessionUser.getInstance().getIP() + "embalar/obtenerDatosContacto";
  private apiURLfinalizarGDL: String = SessionUser.getInstance().getIP() + "embalar/finalizarGDL";
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + "pap/uploadFile/"; /**Se agrego para guardar la evidencia de la factura*/
  private apiURLfinalizarEvidenciaFac: String = SessionUser.getInstance().getIP() +"embalar/finalizarEvidenciaFac"; // Finalizar de cfdiFacturas
  private apiURLenviarCorreo: String = SessionUser.getInstance().getIP() +"embalar/enviarCorreo";
  private apiURLtotalesGeneral: String = SessionUser.getInstance().getIP() + 'embalar/totalesGeneral';
  private apiURLGuardarVideo: string = SessionUser.getInstance().getIP() + 'nombreArchivo';
  private apiURLValidarStock: string = SessionUser.getInstance().getIP() + 'embalar/prodsDeStock';
  constructor(private http: Http) {
    console.log("regreso de service embalaje");
  }

  /** El error se entrega sin transformar para poder mostrar el codigo HTTP y el mensaje del backend */
  guardarVideo(data: any, timeoutMs: number) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLGuardarVideo + '', body, options)
      .timeout(timeoutMs)
      .map(data => data.json());
  }
  totalesGeneral() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLtotalesGeneral + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  enviarCorreo(datosC) {
    const body = datosC;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLenviarCorreo + '' , body, options )
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
  finalizarEvidenciaFac(idFactura) {
    const body = idFactura;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLfinalizarEvidenciaFac + '' , body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  uploadFile(obj, idFactura, fPor) {
    const tipo = 'EvidenciaFactura';
    let dataFile = new FormData();
    dataFile.append('file', obj[0]);
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + idFactura + '/' + tipo + '/' + fPor, dataFile, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  finalizarGDL(numGuia) {
    let body = numGuia;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .put(this.apiURLfinalizarGDL + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
  obtenerDatosContacto() {
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerDatosContacto+'', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  pedidosGDL(paquete) {
    let body = paquete;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLpedidosGDL+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  consultaPartidasEmbalar(estadoPedido: string) {
    let body = estadoPedido;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLconsultaPartidasEmbalar+'', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }



  ConsultaTotalEmbalar(concepto: string) {
    let body = concepto;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultaTotalEmbalar+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  ConsultaEstadisticaUsuarioEmbalar(idEmpleado: Empleado) {
    let body = idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultaEstadisticaUsuarioEmbalar+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


  actualizarEstado(parametros:Parametros) {
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(SessionUser.getInstance().getIP() + 'actualizarEstado', parametros, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  colectarPartidas(objetoColectar: any) {
    let body = objetoColectar;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLcolectarPartidas+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  obtenerFolioPorUsuario (idEmpleado: any) {
    let body = idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerFolioPorUsuario+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  consultarEstado(idEmpleado) {
    let body = idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLconsultarEstado+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  generarPackingList(packingList) {
    let body = packingList;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLgenerarPackingList+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  registrarEmbalarPedido(idEmpleado) {
    let body = idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLregistrarEmbalarPedido+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
//////////  Boton finalizar ///
  actualizarEstadoInsertarPendiente(paquetePend) {
    let body = paquetePend;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLactualizarEstadoInsertarPendiente+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  generarDocumentos( parametros:Parametros){

    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLgenerarDocumentos+'', parametros, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  archivoPedido(obj: any) {

    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLarchivoPedido+'', obj, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
   //// Seccion envio de cantidad de bolsas a guardar
  guardarConsumible(data: any) {
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLguardarConsumible + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  validateStock(data: any){
    let body = data;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({headers});
    return this.http.post(this.apiURLValidarStock + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error')

  }
}
