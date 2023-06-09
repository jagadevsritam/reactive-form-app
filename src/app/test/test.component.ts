import { Component, OnInit } from '@angular/core';

//import validator and FormBuilder
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
   selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
   //Create FormGroup
   requiredForm: FormGroup;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }

   //Create required field validator for name
   myForm() {
      this.requiredForm = this.fb.group({
      name: ['', Validators.required ]
      });
   }
   ngOnInit()
   {

   }
}