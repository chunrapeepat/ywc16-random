const groupsObject = {
  aprodrite: 1,
  ares: 2,
  demiter: 3,
  dionisus: 4,
  hades: 5,
  hestia: 6,
}

export function groupidToString(groupID) {
  const keys = Object.keys(groupsObject)
  const values = Object.values(groupsObject)
  return keys[values.indexOf(groupID)]
}

// 1. hades

export const removed = [
  // groupsObject.aprodrite,
  // groupsObject.ares,
  // groupsObject.demiter,
  // groupsObject.dionisus,
  groupsObject.hades,
  // groupsObject.hestia,
]
export const target = groupsObject.ares
export const groups = groupsObject

// special1 (vi###) special2(JWC48) or normal
export const SoundMode = "epic"
export const WindowWidth = 1680
