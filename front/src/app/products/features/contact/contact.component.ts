import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";

@Component({
  selector: "panier",
  standalone: true,
  imports: [  CommonModule ,
    FormsModule,ReactiveFormsModule,     
    ButtonModule,
    InputTextModule,
    InputTextareaModule  ],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],

})
export class ContactComponent {
  message= "";
  email="";

  constructor( private formBuilder: FormBuilder ) {

  }

   contactForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl('')
  });


  onEnvoyer() {
    //this.cancel.emit();
    console.log(""+this.contactForm.controls["email"].value);
    this.contactForm.reset();

  }

  onSave() {
    //this.save.emit(this.editedProduct());

    this.contactForm.reset();

  }

}
  