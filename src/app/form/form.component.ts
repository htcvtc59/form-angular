import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from "@angular/forms";


function passwordMatcher(c: AbstractControl) {
  if (!c.get('password') || !c.get('confirm')) return null;
  return c.get('password').value === c.get('confirm').value
    ? null : { 'nomatch': true }
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher }
  ]
})
export class PasswordMatcher {

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = { first: 'Nancy', last: 'Drew' }

  constructor() { }

  ngOnInit() {
  }

}
