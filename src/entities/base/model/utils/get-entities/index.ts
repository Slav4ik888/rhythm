
type Item = {
  id: string
}

interface Entities<T extends Item> {
  [key: string]: T;
}

/** Add new items into the entities */
export function addEntities<T extends Item>(entities: Entities<T>, payload  : T[]): Entities<T> {
  return {
    ...entities,
    ...payload.reduce((acc: Entities<T>, entity: T) => {
      acc[entity.id] = entity;
      return acc;
    }, {})
  }
};
