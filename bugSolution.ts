function combine(arr1: number[] | null | undefined, arr2: number[] | null | undefined): number[] {
  const arr1Safe = arr1 ?? [];
  const arr2Safe = arr2 ?? [];
  return arr1Safe.concat(arr2Safe);
}

//Example Usage
const arr1: number[] | undefined = [1,2,3];
const arr2: number[] | null = null;
const result = combine(arr1, arr2);
console.log(result); // Output: [1,2,3]