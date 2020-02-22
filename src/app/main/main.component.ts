import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainService} from '../shared/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  form: FormGroup;

  constructor(public getItems: MainService) { }

  ngOnInit() {
    this.getItems.getCategoriesList();
    this.form = new FormGroup({
      checkbox: new FormControl('')
    });
  }

  submit() {
    this.getItems.getCategoriesItems();
  }
}
