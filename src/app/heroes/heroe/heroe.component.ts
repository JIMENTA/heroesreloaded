import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age :number = 45;

  get capitalizaedName():string{
    return this.name.toUpperCase()
  }

  getheroeDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHeroe():void{
    this.name = ' Spiderman'
  }
  changeAge():void{
    this.age = 25
  }
  resetForm(){
    return 
  }
}
