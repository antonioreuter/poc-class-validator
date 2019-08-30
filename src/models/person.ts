"use strict";

import { Gender } from "./gender";
import { IsNotEmpty, IsEmail, MaxLength, MinLength } from "class-validator";

const emptyPerson: IPerson = {
  name: "",
  email: "",
  membershipNumber: "",
  gender: Gender.MALE
}

export interface IPerson {
  name: string,
  email: string,
  birthDate?: Date,
  membershipNumber: string,
  gender: Gender
}

export class Person implements IPerson {
  @IsNotEmpty({
    message: "The name can not be empty."
  })
  @MinLength(5, {
    message: "Name must be longer than or equal to $constraint1 characters."
  })
  @MaxLength(50, {
    message: "Name must be shorter than or equal to $constraint1 characters."
  })
  public readonly name: string;

  @IsNotEmpty({
    message: "Email address is required."
  })
  @IsEmail(undefined, {
    message: "Email address must be an email address."
  })
  @MinLength(50, {
    message: "Email must be longer than or equal to $constraint1 characters."
  })
  @MaxLength(100, {
    message: "Email address must be shorter than or equal to $constraint1 characters."
  })
  public readonly email: string;

  public readonly birthDate?: Date;

  @IsNotEmpty({
    message: "Membership number is required."
  })
  @MaxLength(100, {
    message: "Membership number must be shorter than or equal to $constraint1 characters."
  })
  public readonly membershipNumber: string;

  public readonly gender: Gender;

  constructor(person: IPerson = emptyPerson) {
    this.name = person.name;
    this.email = person.email;
    this.birthDate = person.birthDate;
    this.membershipNumber = person.membershipNumber;
    this.gender = person.gender;
  }
}