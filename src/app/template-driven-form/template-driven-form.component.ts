import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

@ViewChild('myForm') myForm:NgForm;

defualtStylist='Tom';
// username='';
  ngOnInit() {

  }

  onSubmit(form:NgForm) {
    console.log(this.myForm);

  }

}
