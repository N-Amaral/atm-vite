export function OnScreenKeyboard(event: any, state: string[], setInputValue: Function) {
  const keyValue: string = event.target.innerText;
  setInputValue((prev: string[]) => [...prev, keyValue]);
}
