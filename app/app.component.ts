import {Component} from "@angular/core";
export class Hero{
    id: number;
    name:string;
}
//Decorator
//Tels Angular what template to use and
//how to create the component
@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
                <h2> My Heroes </h2>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
                        [class.selected]="hero == shero">
                        <span class="badge" >{{hero.id}}</span>{{hero.name}}
                    </li>
                </ul>
                <div *ngIf="shero">
                <h2>{{shero.name}} details!</h2>
                <div><label>id: </label>{{shero.id}}</div>
                <div><label>name: </label>
                    <input [(ngModel)]="shero.name" placeholder="name"> 
                </div>
                </div>`
                
})

//AppComponent is the root of the Application
export class AppComponent{
    public heroes = HEROES;
    title = 'Tour of Heroes';
    shero: Hero;
    onSelect(hero: Hero){this.shero = hero;}
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
