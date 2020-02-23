import { HttpHeaders } from '@angular/common/http';

export class AbstractService {
    httpHeaders = new HttpHeaders();
    url_base = "http://localhost:3000/api/";

    constructor() {
        this.httpHeaders.set('Content-Type', 'application/json');
    }
}