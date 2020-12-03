import { templateJitUrl } from '@angular/compiler';
import {Component} from '@angular/core';

@Component({
    selector : 'shelves',
    template : `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor = "let shelf of shelves">
            {{ shelf }}
        </li>
    </ul>
    `
})
export class ShelevsComponents{
    title = "Shelves here"

    getTitle(){
        return this.title;
    }

    shelves = ["green veg", "yello veg", "red veg"];
}