import { cloneObj, setValueByScheme } from 'shared/helpers/objects';
import { TuplesGroup, UseGroup } from "../types";


/**
 * v.2023-11-23
 */
export function changeGroup<O extends object>(
  G           : UseGroup<O>,
  tuple       : TuplesGroup,
  noChanges?  : boolean
) {
  if (! G || ! G.group || ! tuple.length) return null;

  const newGroup = cloneObj(G.group);
  
  tuple.forEach(v => setValueByScheme(newGroup, v.scheme, v.value));

  G.updateGroup(newGroup, { isChanges: ! noChanges });
}
