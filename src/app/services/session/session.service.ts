import {Injectable} from '@angular/core';
import {Empleado} from '../../class/Empleado.class';

@Injectable()
export class  SessionUser {
  private static _instance: SessionUser = new SessionUser();
  /* ------- Token -------- */
  userName: string = 'Usuario Registrado';
  usuario: Empleado;
  nivel: Empleado;
  password: Empleado;
  empleadoPorUsuario: Empleado;
  private token: string = '';
  private sistemaActualizado: boolean;
  /* ----------- Authentication ----------- */
  private auth: boolean = false;
// private ip: string = "http://192.168.2.126:8081/api/";
  // private ip: string = "http://localhost:8081/api/";
  private ip81: string = 'http://localhost:8081/api/';
  private dirPruebasLocal: string = 'http://192.168.1.26:8081/ProquifaNet/';
  private dirPruebas58: string = 'http://172.24.32.58:8080/ProquifaNet/';
  private miIP: string = 'http://192.168.2.100:8081/api/';
  private ipJosi: string = 'http://192.168.2.156:8081/api/';
  private ipProduccionB: string = 'http://www.proquifaconnect.mx:8080/ProquifaNet/';
  private nuevaDev: string = 'http://172.24.20.12:8080/ProquifaNet/';
  private dirDesarrollo: string = 'http://172.24.32.14:8080/ProquifaNet/';
  private dirOriginal: string = 'https://pqnetangular.ryndem.mx/ProquifaNet/';   //IP DE PRODUCCION
  private ipFer: string = 'http://172.24.42.46:8081/api/';
  private ipDevLocal: string = 'http://192.168.2.41:8081/ProquifaNet/';
  private ipDevUAT: string = 'http://172.24.32.34:8080/ProquifaNet/';
  private QA : string = 'http://172.24.32.34:9090/ProquifaNet/';
  private ipAle: string = 'http://192.168.1.53:8081/api/'
  private ipVRA: string = 'http://192.168.1.126:8081/api/'
  private ipJDMar: string =  'http://192.168.1.80:8081/api/'
  private Desarrollo2: string =  'http://172.24.32.58:8080/ProquifaNet/'

  private user: Empleado;


  dataPost: any;
  constructor() {
    if (SessionUser._instance) {
      throw new Error('The Logger is a singleton class and cannot be created!');
    }
    SessionUser._instance = this;
  }

  public static getInstance(): SessionUser {
    return SessionUser._instance;
  }

  public setToken(token: any) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }

  public setAuthenticated(auth: boolean) {
    this.auth = auth;
  }

  public getAuthenticated() {
    return this.auth;
  }

  public getIP() {
   // return  this.ipMiguel;
  //  return this.ip;
       return this.ip81;
     //  return this.ipJosi;
    // return this.ipSara;
     //return this.ipProduccionB;
     //return this.nuevaDev;
    //return this.dirOriginal;
    //return this.dirPruebas58;
    //return this.dirPruebasLocal;
    //return this.Desarrollo2;
    //return this.dirDesarrollo;
    //return this.ipDevUAT;
    //return this.ipFer;
    // return this.dirDesarrollo;
    // return this.QA;
     //return this.ipAle;
    //return this.ipVRA;
  }
  public getUser() {
    return this.user;
  }

  public setUser(user: Empleado) {
    this.user = Object.assign(new Empleado, user);
  }

  public setDataPost(dataPost: any) {
    this.dataPost = dataPost;
  }

  public getDataPost() {
    return this.dataPost;
  }

  public getSistemaActualizado() {
    return this.sistemaActualizado;
  }

  public setSistemaActualizado(actualizado: boolean) {
    this.sistemaActualizado = actualizado;
  }

}
