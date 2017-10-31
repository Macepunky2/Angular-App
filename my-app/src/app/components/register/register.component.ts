import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 

    name: null;
    username: null;
    password: null;
    email: null;
    website: null;
    phone: null
 

  users: User[];
  form: FormGroup; 


  constructor(private dataService:DataService, private fb:FormBuilder) {
    this.createForm(); 
  }

  private createForm() {
    this.form = this.fb.group({
      nombre: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      apellido: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      confirmEmail: [null, [
        Validators.required,
        Validators.email/*,
        EmailValidation.MatchEmailValues(this.form.get('email').value, this.form.get('confirmEmail').value)*/
      ]],
      dob: [null],
      pais: [null],
      acepto: [false, Validators.requiredTrue]
    }, {
      
    });
  }


  

  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
     });
      }

      
  onSubmit(form) {
    
    this.users.push
    ({
          name: this.name,
          username: name,
          email: this.email,
          password: this.password,
          website: this.website,
          phone: this.phone
 
    });
    console.log(this.users) ; 
  }
  
}
