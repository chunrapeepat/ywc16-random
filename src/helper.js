const groupsObject = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
}

export function groupidToString(groupID) {
  const keys = Object.keys(groupsObject)
  const values = Object.values(groupsObject)
  return keys[values.indexOf(groupID)]
}

export const removed = []

export const target = groupsObject.A
export const groups = groupsObject

// special1 (vi###) special2(JWC48) or normal
export const SoundMode = "special1"
export const WindowWidth = 1680
