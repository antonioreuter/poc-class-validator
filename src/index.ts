"use strict";

import { validate } from "class-validator";

import { Person, IPerson } from "./models/person";
import { Gender } from "./models/gender";


const data: IPerson = {
  name: "John",
  email: "john.doe@gmailcom",
  membershipNumber: "435jl0-4lk424-2lk3j4",
  birthDate: new Date(),
  gender: Gender.MALE
};

const personA: IPerson = new Person(data);

validate(personA).then((errors) => {
  if (errors.length > 0) {
    const errData = errors.map(error => ({
      property: error.property,
      value: error.value,
      constraints: error.constraints
    }));

    console.log(errData);
  } else {
    console.log("There are no errors.");
  }
})