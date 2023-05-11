import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import  { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  public urlAPI: string = "https://localhost:44391/api/Alunos";

  
}
