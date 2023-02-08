import React, { SetStateAction } from "react";

export function OnScreenKeyboard(event: any, state: string[], setInputValue: Function) {
  const keyValue: string = event.target.innerText;
  setInputValue((prev: string[]) => [...prev, keyValue]);
  setValueOnForm(keyValue, state, setInputValue);
}

export function formsNumber(formState: object, setFormState: Function) {
  const forms: number = document.querySelectorAll(".inputForm").length;
  const result = formState;

  for (let i = 0; i < forms; i++) {
    Object.defineProperties(result, {
      [`formInput${i}`]: {
        value: {
          inputs: [""],
          lastInputFlag: false,
        },
        writable: true,
      },
    });
  }
  setFormState((prev: object) => Object.assign(prev, result));
}

function checkFormStatus(form: Element[]) {}

function setValueOnForm(value: string, formstate: object, setFormState: Function) {
  const form = document.querySelectorAll(".inputForm");
  const currentForm = Array.from(form[0].children);
  currentForm[0].textContent = value;
  console.log(currentForm[0].textContent);
}
