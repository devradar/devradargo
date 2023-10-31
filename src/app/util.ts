import { v4 as uuidv4 } from 'uuid'

// generate hash from string
function getHash (str: string): number {
  let h = 0
  for (const char of str) {
    h = ((h << 5) - h) + char.charCodeAt(0)
    h |= 0
  }
  return h
}
// create 0..1 pseudo random from string
function getPseudoRand (str: string): number {
  const h = getHash(str)
  // convert signed int32 space to 0..1 float
  return (h + Math.pow(2, 31)) / Math.pow(2, 32)
}

function getUUID (): string {
  return uuidv4()
}

export {
  getHash,
  getPseudoRand,
  getUUID
}
