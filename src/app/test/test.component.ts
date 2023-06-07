import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   userName;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         userName: new FormControl("Tutorialspoint")
      });
   }
   onClickSubmit(data) {this.userName = data.userName;}
}
