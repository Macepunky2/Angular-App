import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name:string;
  email:string;
  pass:string;
  passConfirm:string;

  users : User[];
  

  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
    
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });


  }

  onLogin(logUserName,logPassword)
  {
    let valid = true;
    
    if(logUserName != this.users[0].username)
    {
      valid= false; 
      console.log('missmatch');
      alert(logUserName + 'is not a valid User Name');
    }else{
      console.log('match!');
    }

    if(logPassword != this.users[0].password)
    {
      valid= false; 
      console.log('pass missmatch');
      alert(logPassword + 'invalid Password');
    }else{
      console.log('pass match!');
    }

    if(valid == true)
    
        {
          alert('Logged in successful! welcome ' +this.users[0].name);
        }
    
  }
  
        

}

