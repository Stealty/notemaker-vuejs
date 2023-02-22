import { watch, type Ref } from "vue";

export function useWatchCharacters(
  valueToWatch: Ref<any>,
  maxCharacters: number
) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length >= maxCharacters) {
      alert(`Only ${maxCharacters} characters allowed`);
    }
  });
}
