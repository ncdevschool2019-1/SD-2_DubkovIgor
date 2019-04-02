import {Component, OnInit} from '@angular/core';
import {enumCountry, enumSex, PersonalData} from '../personal-data';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  personalData: PersonalData = {

    firstName: 'Igor',
    lastName: 'Dubkov',
    // dateOfBirth: 1999.08.10,
    email: 'dubkovigor@mail.ru',
    sex: enumSex.man,
    country: enumCountry.Belarus
  }

  constructor() { }

  ngOnInit() {
  }

}
