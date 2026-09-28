import {VideoPendienteService} from './services/camara/video-pendiente.service';
import {VideoPendienteGuard} from './guards/video-pendiente.guard';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { CoreContainerComponent } from "./components/core-container/core-container.component";
import { LoginComponent } from "./components/login/login.component";
import { PqFooterComponent } from "./components/core-container/pq-footer/pq-footer.component";
import { PqHeaderComponent } from "./components/core-container/pq-header/pq-header.component";
import { PqBotoneraComponent } from "./components/core-container/pq-botonera/pq-botonera.component";
import { LoginService } from "./services/login/login.service";
import { SessionUser } from "./services/session/session.service";
import { ComunService } from "./services/comun/comun.service";
import { HttpModule } from "@angular/http";
import { NgxElectronModule } from "ngx-electron";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RutasComponent } from "./components/configuracion/configuracion/rutas/rutas.component";
import { TarjetaRutasComponent } from "./components/shared/tarjeta-rutas/tarjeta-rutas.component";
import { GestionService } from "./services/gestion/gestion.service";
import { PipeModule } from "./pipes/accounting/accounting.module";
import { InspeccionService } from "./services/inspeccion/inspeccion.service";
// Graficos
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionService } from './services/gestion/consulta/facturacion/facturacion.service';
import { CobrosService } from './services/gestion/consulta/cobros/cobros.service';
import { IniciarInspeccionComponent } from './components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component';
import { VistaEscanearPedimentoComponent } from './components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component';
import { ComprasService } from './services/gestion/consulta/compras/compras.service';
import { CotizacionService} from './services/gestion/consulta/cotizaciones/cotizacion.service';
import { AsistenciasService } from './services/gestion/consulta/asistencias/asistencias.service';
import { UtilService } from './services/util/util.service';
import { DocumentosEnviadosService } from './services/gestion/consulta/documentos-enviados/documentos-enviados.service';
import { DocumentosRecibidosService } from './services/gestion/consulta/documentos-recibidos/documentos-recibidos.service'
import { EntregasService } from './services/gestion/consulta/entregas/entregas.service';
import { LlamadasService } from './services/gestion/consulta/llamadas/llamadas.service';
import { NotaCreditoService } from './services/gestion/consulta/nota-credito/nota-credito.service';
import {SeguimientoService} from './services/gestion/reportes/seguimiento/seguimiento.service';
import {ReporteCobrosService} from './services/gestion/reportes/reportecobros/reportecobros.service';
import { VendedorComponent } from "./components/vendedor/vendedor.component";
import { MenuSeccionComponent } from './components/shared/menu-seccion/menu-seccion.component';
import {EmbalarService} from './services/embalar/embalar.service';
import {InterfacturacionComponent} from './components/interfacturacion/interfacturacion.component';
import {TrabajarRutaService} from './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-service';
import {TrabajarRutasEnvioService} from './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services';
import {TrabajarRutasClienteDetalleService} from './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.service';
import {TrabajarRutasClienteService} from './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services';
import {GestorRutaComponent} from './components/gestor-ruta/gestor-ruta.component';

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AsignarMensajeroService} from './services/despachos/gestorRuta/asignar-mensajero.service';
import {AsignarRutaComponent} from './components/gestor-ruta/asignar-ruta/asignar-ruta.component';
import {CerrarRutaService} from './services/despachos/gestorRuta/cerrar-ruta.service';
import {MenuSeccionModule} from './components/shared/menu-seccion/menu-seccion.module';
import { AsuntosRegulatoriosComponent } from './components/asuntos-regulatorios/asuntos-regulatorios.component';
import {AsuntosRegulatoriosService} from './services/asuntos-regulatorios/asuntos-regulatorios.service';
import {MaterialReceptorService} from './services/material-receptor/material-receptor.service';
import { ControlarCobroComponent } from './components/controlar-cobro/controlar-cobro.component';
import { ProductosBoComponent } from './components/productos-bo/productos-bo.component';
import {ProductosBoService} from './services/productos-bo/productos-bo.service';

import { ProductosDocFaltanteComponent } from './components/productos-doc-faltante/productos-doc-faltante.component';
import {ArriboDocumentoService} from './services/arribo-documento/arribo-documento.service';
import { GestionCuarentenaComponent } from './components/gestion-cuarentena/gestion-cuarentena.component';
import {GestionarCuarentenaService} from './services/gestionar-cuarentena/gestionar-cuarentena.service';
import { RutaEnvioPorClienteComponent } from './components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component';
import {EnvioPorClienteService} from './services/trabajar-ruta/envio-por-cliente.service';
import { ProductoReclamoComponent } from './components/producto-reclamo/producto-reclamo.component';
import {ProductoReclamoService} from './services/gestor-producto-reclamo/producto-reclamo.service';
import {ConsolaPrioridadesService} from './services/consola/consola-prioridades.service';
import { ConsolaEnviosComponent } from './components/consola-envios/consola-envios.component';
import {ConsolaEnvioService} from './services/consola-envio/consola-envio.service';
import {SaldosFavorService} from './services/saldos-notas/saldos-favor.service';
import {CartaPorteService} from "./services/carta-porte/carta-porte.service";
import {ConsolaStockService} from './services/consola-stock/consola-stock.service';
import {MaterialDestruccionService} from './services/consola-destruccion/material-destruccion.service';




@NgModule({
  declarations: [
    AppComponent,
    CoreContainerComponent,
    LoginComponent,
    PqFooterComponent,
    PqHeaderComponent,
    PqBotoneraComponent,
    RutasComponent,
    TarjetaRutasComponent,
    VendedorComponent,
    // ConsolaProductosDestruccionComponent
    // PopUpSaldosComponent,
    // SaldosComponent,
    // SaldoNotaCreditoComponent
    // ConsolaEnviosComponent
    // ProductoReclamoComponent,
    // RutaEnvioPorClienteComponent,
    // ProductosBoComponent,

    // VistaTrabajarProductosComponent,
    // GestionCuarentenaComponent,
    // ProductosDocFaltanteComponent,

    // ControlarCobroComponent,
    // ReceptorMaterialGdComponent,
    // ReceptorMaterialComponent,
    // AsuntosRegulatoriosComponent,
    // GestorRutaComponent,
    // MenuSeccionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgxElectronModule,
    BrowserAnimationsModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    // MenuSeccionModule,
  ],

  providers: [
    VideoPendienteService,
    VideoPendienteGuard,
    // {provide: HTTP_INTERCEPTORS, useCss: InterceptorsService, multi: true},
    LoginService,
    SessionUser,
    GestionService,
    InspeccionService,
    ComunService,
    FacturacionService,
    AsistenciasService,
    CobrosService,
    ComprasService,
    UtilService,
    CotizacionService,
    DocumentosEnviadosService,
    DocumentosRecibidosService,
    EntregasService,
    LlamadasService,
    NotaCreditoService,
    SeguimientoService,
    ReporteCobrosService,
    EmbalarService,
    TrabajarRutaService,
    TrabajarRutasEnvioService,
    TrabajarRutasClienteDetalleService,
    TrabajarRutasClienteService,
    AsignarMensajeroService,
    CerrarRutaService,
    AsuntosRegulatoriosService,
    MaterialReceptorService,
    ProductosBoService,
    ArriboDocumentoService,
    GestionarCuarentenaService,
    EnvioPorClienteService,
    ProductoReclamoService,
    ConsolaPrioridadesService,
    ConsolaEnvioService,
    SaldosFavorService,
    CartaPorteService,
    ConsolaStockService,
    MaterialDestruccionService
  ], bootstrap: [AppComponent]
})
export class AppModule {}
