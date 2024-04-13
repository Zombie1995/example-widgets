import { makeAutoObservable } from "mobx";

export type ButtonConfig = {
  name: string;
  callback: any;
};

class ButtonsStore {
  leftButtons: Array<ButtonConfig> = [];
  rightButtons: Array<ButtonConfig> = [];
  buttonName: string = "buttonName";
  buttonFuncText: string = "// Enter js function";

  constructor() {
    makeAutoObservable(this);
  }

  setButtonName(name: string) {
    this.buttonName = name;
  }

  setButtonFunc(funcText: string) {
    this.buttonFuncText = funcText;
  }

  addButton(button: ButtonConfig, position: "left" | "right" = "left") {
    switch (position) {
      case "left":
        this.leftButtons.push(button);
        break;
      case "right":
        this.rightButtons.push(button);
        break;
    }
  }
}

export const buttonsStore = new ButtonsStore();
