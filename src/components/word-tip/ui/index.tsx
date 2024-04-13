import { observer } from "mobx-react-lite";
import { wordTipStore } from "../model";

export const WordTip = observer(() => {
  return (
    <div className="max-w-[500px]">
      <input
        value={wordTipStore.word}
        onChange={(e) => {
          wordTipStore.setWord(e.target.value);
        }}
        className="w-full outline outline-2 outline-gray-500 p-1"
      />
      <div className="divide-y-2 divide-gray-500 outline outline-2 outline-gray-500">
        {wordTipStore.pending ? "Данные грузятся" : ""}
        {wordTipStore.words.map((word, index) => (
          <button
            key={index}
            className="bg-white grid grid-cols-3 w-full"
            onClick={() => {
              wordTipStore.setWord(word.name);
            }}
          >
            <div className="h-full border-r-2 border-gray-500">{word.name}</div>
            <div className="h-full">{word.fullName}</div>
            <div className="border-l-2 h-full border-gray-500">
              <img src={word.flag} alt="flag" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
});
