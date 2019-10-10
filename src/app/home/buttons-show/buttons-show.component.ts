import { Component, OnInit,Input ,Output,OnChanges,SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons-show',
  templateUrl: './buttons-show.component.html',
  styleUrls: ['./buttons-show.component.css']
})
export class ButtonsShowComponent implements OnChanges {
  selectedRadioValue:string='all';

  @Output()
  countSelectionChange:EventEmitter<string> = new EventEmitter<string>(); //this is  a custom event;

  //down is a custom method which will raise our custom event payload
  @Input() enteredValue:string;

  @Input() 
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    for(let propertyName in changes){
      let change= changes[propertyName];
      let current=JSON.stringify(change.currentValue);
      let previous= JSON.stringify(change.previousValue);
      console.log(propertyName +"currentValue" +current );
    }

  }
  onRadioSelectionChange(){
    this.countSelectionChange.emit(this.selectedRadioValue);
    console.log(this.selectedRadioValue);
  }
}
