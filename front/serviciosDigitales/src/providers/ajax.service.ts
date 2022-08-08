import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * @description Clase que encapsula todas las peticiones http y otorga la posibilidad de encriptar la data
 */
@Injectable()
export class AjaxService {

    host: string = environment.URL_BACK; // URL base del API
    private modoDebug: boolean = false; // Definir si hace logs o no
    private usingEnc = false; // Para configurar si se debe o no encriptar toda la data
    private token: string; // Token del usuario que va en todas las peticiones
    private csrftk: string;
    constructor(private $http: HttpClient) {
        this.$http = $http;
        let t = window.localStorage.getItem('tk');
        if (t) {
            this.token = window.localStorage.getItem('tk');
        }
    }

    /**
     * @description Almacena el token a nivel de aplicacion para utilizarlo en las peticiones http
     * @param {string} tk - El token de la sesión unica
     */
    setcsrf(tk: string) {
        this.csrftk = tk;
    }


    /**
     * @description Obtiene el token de la sesión
     * @returns {string} token
     */
    getcsrf() {
        return this.csrftk;
    }

    /** 
     * @description Se encarga de definir la URL base para todas las peticiones http
     * @param  {string} value - URL base
     */
    sethost(value: string) {
        this.host = value;
    }
    /**
     * @description Decide si se activa o no el modo debug
     * @param  {boolean} value
     */
    setDebbug(value: boolean) {
        this.modoDebug = value;
    }

    /**
     * @description Encapsula todas las peticiones GET de la aplicación
     * @param  {string} ruta Endpoint especifico
     * @param  {any} params - Payload de la petición
     * @returns {Observable<any>} Observable 
     */
    get(ruta: string, params?: any): Observable<any> {
        if (!params) {
            params = {};
        }
        let parametros: HttpParams = new HttpParams();

        if (this.modoDebug) {
            
        }
        params.access_token = this.token;
        parametros = parametros.append('data', (JSON.stringify(params)));
        parametros = parametros.append('csrftk', this.csrftk);
        let obs: Observable<any> = this.$http.get(this.host + ruta, { params: parametros }, );

        return obs;

    }

    /**
     * @description Encapsula todas las peticiones POST de la aplicación
     * @param  {string} ruta - Endpoint especifico
     * @param  {any} params - Payload de la petición
     * @returns {Observable<any>} Observable 
     */
    post(ruta: string, params: any): Observable</*Comment*/any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        if (this.modoDebug) {
            
        }
        let data: any = {};
        data.encrypt = this.usingEnc;
        params.access_token = this.token;
        data.csrftk = this.csrftk;
        data.data = params;
        let obs = this.$http.post(this.host + ruta, (data), { headers: headers });

        return obs;

    }

}