import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
   selector: 'app-test2',
   templateUrl: './test2.component.html',
   styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
   userName;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         userName: new FormControl("Tutorialspoint")
      });
   }
   onClickSubmit(data) {this.userName = data.userName;}
}