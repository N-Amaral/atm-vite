export function OnScreenKeyboard(event: any, state: {}, setInputValue: Function) {
  const keyValue: string = event.target.innerText;
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

function checkFormStatus(state: {}) {
  const entries = Object.entries(state);
  for (const [key, value] of Object.entries(entries)) {
    console.log(`${key}: ${value}`);
  }
}

function setValueOnForm(value: string, formstate: object, setFormState: Function) {
  const form = document.querySelectorAll(".inputForm");
  const currentForm: HTMLCollection[] = [];
  form.forEach((list, i) => {
    currentForm.push(list.children);
  });

  const input: ChildNode | null = currentForm[0][0].firstChild;
}
