import { create } from "zustand";
import { Descriptions, descriptions } from "../const/descriptions";

type EditorSentenceState = {
  sentence: Descriptions;
  updateSentence: (updateSentence: Descriptions) => void;
};

export const editorSentenceStore = create<EditorSentenceState>((set) => ({
  sentence: descriptions,
  updateSentence: (updateSentence) =>
    set(() => ({
      sentence: updateSentence,
    })),
}));
