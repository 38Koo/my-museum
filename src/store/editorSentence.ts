import { create } from "zustand";

type EditorSentenceState = {
  sentence: string;
  update: (updateSentence: string) => void;
};

export const editorSentenceStore = create<EditorSentenceState>((set) => ({
  sentence: "",
  update: (updateSentence) =>
    set(() => ({
      sentence: updateSentence,
    })),
}));
