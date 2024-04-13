import { makeAutoObservable, reaction } from "mobx";
import { CountryInfo, getCountryByName } from "../../../api/apiService";
import { RaceConditionGuard } from "../../../model/race-condition-guard";
import { removeDuplicates } from "../../../model/remove-duplicates";

class WordTipStore {
  word: string = "";
  maxWords: number = 10;
  words: Array<CountryInfo> = [];
  pending: boolean = false;
  wordsRaceConditionGuard = new RaceConditionGuard();

  constructor() {
    makeAutoObservable(this);

    reaction(() => this.word, this.getWords);
    reaction(
      () => this.maxWords,
      () => this.getWords(this.word)
    );
  }

  getWords = async (word: string) => {
    try {
      this.setPending(true);
      this.wordsRaceConditionGuard
        .getGuardedPromise(getCountryByName(word))
        .then((r) => {
          this.setWords(removeDuplicates(r).slice(0, this.maxWords));
          this.setPending(false);
        });
    } catch (error) {
      console.error("Error fetching country info:", error);
    }
  };

  setPending(isPending: boolean) {
    this.pending = isPending;
  }

  setWord(text: string) {
    this.word = text;
  }

  setMaxWords(count: number) {
    this.maxWords = count;
  }

  setWords(newWords: Array<CountryInfo>) {
    this.words = newWords;
  }
}

export const wordTipStore = new WordTipStore();
