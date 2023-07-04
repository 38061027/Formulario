import { Component } from '@angular/core';

import { FormBuilder, Validators, FormGroup, MinLengthValidator } from '@angular/forms';




@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  public cadastroForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required]],
    sobrenome: [''],
    email: [''],
    stack: [''],
    nivel: [''],
    linguagens: [''],
    estilo: [''],
    frameworks: [''],
    textarea: ['', Validators.minLength(10)]
  });





  constructor(private formBuilder: FormBuilder) { }



  public stacklist: Array<any> = [
    {stack: 'Front-end'},
    {stack: 'Back-end'},
    {stack: 'Full-Stack'}
  ]

  public nivellist: Array<{nivel : string}> = [
    {nivel: 'Trainee'},
    {nivel: 'Estágio'},
    {nivel: 'Júnior'},
    {nivel: 'Pleno'},
    {nivel: 'Sênior'}
  ]


  public langlist: Array<{lang : string}> = [
    {lang: 'Javascript'},
    {lang: 'Java'},
    {lang: 'Python'},
    {lang: 'Ruby'},
    {lang: 'C++'},
    {lang: 'C#'},


  ]

  public stylelist: Array<{style : string}> = [
    {style: 'Css'},
    {style: 'Sass'},
    {style: 'Less'},
    {style: 'Bootstrap'},
    {style: 'Scss'},
    {style: 'Tawind'},


  ]


  public framelist: Array<{framework : string}> = [
    {framework: 'Angular'},
    {framework: 'React'},
    {framework: 'Vue.js'},


  ]


  get textarea(){
    return this.cadastroForm.get('textarea')!
  }


  get nome(){
    return this.cadastroForm.get('nome')!
  }
  get sobrenome(){
    return this.cadastroForm.get('sobrenome')!
  }
  get email(){
    return this.cadastroForm.get('email')!
  }


  public submitForm(){
    console.log(this.cadastroForm.value)
  }

}
