function quickSort(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  quickSort(arr, lo, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let j = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      j++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  j++;
  [arr[j], arr[hi]] = [arr[hi], arr[j]];

  return j;
}

function test(): void {
  const arr = [3, 2, 1, 5, 4];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
}

test();
