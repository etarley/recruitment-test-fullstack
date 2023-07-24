export function reverseKeepSpecials(
  arr: (string | number)[]
): (string | number)[] {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (
      !(
        typeof arr[start] === 'number' ||
        arr[start].toString().match(/[a-z0-9]/i)
      )
    ) {
      start++;
    } else if (
      !(typeof arr[end] === 'number' || arr[end].toString().match(/[a-z0-9]/i))
    ) {
      end--;
    } else {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr;
}
