import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DingoPlayerService {

    public volumeValue: number;

    constructor() {
        console.log('test')
    }

}