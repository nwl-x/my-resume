const splitArray = <T>(arr: T): T[] => {
  const myArray = Array.isArray(arr) ? [...arr] : []
  const size = 2

  const arrayLength = myArray.length
  const arraySlice = (arrayLength % size ? arrayLength + 1 : arrayLength) / size

  return [myArray.slice(0, arraySlice), myArray.slice(arraySlice)] as T[]
}

export default splitArray
