import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import Button from "../../shared/ui/button";
import { buttonsStore } from "../model";

export const LeftRightButtons = observer(() => {
  const handleButtonNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      buttonsStore.setButtonName(e.target.value);
    },
    []
  );

  const handleFuncChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      buttonsStore.setButtonFunc(e.target.value);
    },
    []
  );

  const handleAddLeftButton = useCallback(() => {
    buttonsStore.addButton({
      name: buttonsStore.buttonName,
      callback: eval(buttonsStore.buttonFuncText),
    });
  }, []);

  const handleAddRightButton = useCallback(() => {
    buttonsStore.addButton(
      {
        name: buttonsStore.buttonName,
        callback: eval(buttonsStore.buttonFuncText),
      },
      "right"
    );
  }, []);

  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-5 p-4 w-full h-full">
        {buttonsStore.leftButtons.map((button, index) => (
          <Button key={index} onClick={button.callback}>
            {button.name}
          </Button>
        ))}
      </div>
      <div>
        <div className="min-h-4" />
        <div className="flex flex-col max-w-80 h-full">
          <input
            onChange={handleButtonNameChange}
            value={buttonsStore.buttonName}
            className="min-h-10 p-2 outline outline-2 outline-gray-500 rounded-t-md"
          />
          <textarea
            rows={10}
            cols={50}
            className="p-2 outline outline-2 outline-gray-500"
            value={buttonsStore.buttonFuncText}
            onChange={handleFuncChange}
          />
          <div className="flex">
            <button
              className="grow bg-white min-h-10 p-2 outline outline-2 outline-gray-500 rounded-bl-md"
              onClick={handleAddLeftButton}
            >
              Создать кнопку слева
            </button>
            <button
              className="grow bg-white min-h-10 p-2 outline outline-2 outline-gray-500 rounded-br-md"
              onClick={handleAddRightButton}
            >
              Создать кнопку справа
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 p-4 w-full h-full">
        {buttonsStore.rightButtons.map((button, index) => (
          <Button key={index} onClick={button.callback}>
            {button.name}
          </Button>
        ))}
      </div>
    </div>
  );
});
