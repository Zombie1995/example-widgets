import "./App.css";
import { buttonsStore } from "./components/left-right-buttons/model";
import { LeftRightButtons } from "./components/left-right-buttons/ui";
import TestButton from "./components/shared/ui/test-button";
import { wordTipStore } from "./components/word-tip/model";
import { WordTip } from "./components/word-tip/ui";

function App() {
  return (
    <div>
      <p className="text-[24px] text-center font-bold">Виджет 1</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-end gap-2 p-4">
          <TestButton
            onClick={() => {
              buttonsStore.setButtonName("");
              buttonsStore.setButtonFunc("");
            }}
          >
            Очистить
          </TestButton>
          <TestButton
            onClick={() => {
              buttonsStore.setButtonName("Hello World!");
              buttonsStore.setButtonFunc("// Hello World!");
            }}
          >
            Hello World!
          </TestButton>
        </div>
        <div className="flex justify-between gap-2 p-4">
          <TestButton
            onClick={() => {
              function isNumber(str: string) {
                return /^\d+$/.test(str);
              }

              if (isNumber(buttonsStore.buttonName)) {
                alert(buttonsStore.buttonName);
              } else {
                alert("Это не число");
              }
            }}
          >
            Вывести число
          </TestButton>
          <TestButton
            onClick={() => {
              alert(buttonsStore.buttonName);
            }}
          >
            Вывести любое содержание
          </TestButton>
        </div>
        <LeftRightButtons />
      </div>
      <p className="text-[24px] text-center font-bold">Виджет 2</p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <TestButton
            onClick={() => {
              wordTipStore.setMaxWords(3);
            }}
          >
            Максимальное количество - 3
          </TestButton>
          <TestButton
            onClick={() => {
              wordTipStore.setMaxWords(10);
            }}
          >
            Максимальное количество - 10
          </TestButton>
        </div>
        <WordTip />
      </div>
    </div>
  );
}

export default App;
