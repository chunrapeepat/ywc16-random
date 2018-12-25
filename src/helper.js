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

export const removed = [
  groupsObject.C,
  groupsObject.E,
  groupsObject.A,
  groupsObject.F,
]

function random() {
  const teams = Object.values(groupsObject).filter(x => removed.indexOf(x) === -1)
  return teams[Math.floor(Math.random() * teams.length)] 
}

export const target = random()
export const groups = groupsObject

// random mode
const RandomMode = {
  normal: {val: `cubic-bezier(0.1,0.7,0.6,0.1)`},
  custom: {val: `cubic-bezier(0.1,0.7,0.1,0.8)`},
  advanced: {val: `cubic-bezier(.59,1.18,.91,-0.3)`},
  linear: {val: `ease-in-out`},
}

export const mode = RandomMode.advanced

// special1 (vi###) special2(JWC48) or normal
export const SoundMode = "epic"
export const WindowWidth = 1680
