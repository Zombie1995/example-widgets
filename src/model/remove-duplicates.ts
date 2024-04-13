export function removeDuplicates(arr: Array<any>) {
  const uniqueSet = new Set(arr);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
