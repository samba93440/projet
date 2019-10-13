import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  onFrmSumbmit(f) {
    if (!f.valid) {
      console.log('des champs non conformes avant validation');
      return ;
    }
    console.log(f.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
