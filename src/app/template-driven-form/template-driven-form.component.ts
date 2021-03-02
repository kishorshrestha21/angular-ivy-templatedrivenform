import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  @ViewChild("myForm") myForm: NgForm;

  defualtStylist = "Tom";
  username = "";
  defaultGender = "Male";



  ngOnInit() {}
// for radio
  genders = [{ id: "1", value: "Male" }, { id: "2", value: "Female" }];

submited:boolean=false;
formData={
  username:'',
  email:'',
  course:'',
  gender:''
}
  onSubmit(form: NgForm) {
    console.log(this.myForm);
    this.submited=true;
    this.formData.username = this.myForm.value.username;
    this.formData.email = this.myForm.value.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
  }

  onSetValue(){
    this.myForm.setValue({
      username:'kishor',
      email:'kishor@gmail.com',
      stylist:'Ram',
      gender:'Male'

    })
  }

  onpatchValue() {
    this.myForm.form.patchValue({
      username: "kishor shrestha"
    });
  }
}
