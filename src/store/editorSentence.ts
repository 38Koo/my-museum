import { create } from "zustand";

type EditorSentenceState = {
  sentence: string;
  updateSentence: (updateSentence: string) => void;
};

export const editorSentenceStore = create<EditorSentenceState>((set) => ({
  sentence: "",
  updateSentence: (updateSentence) =>
    set(() => ({
      sentence: updateSentence,
    })),
}));
