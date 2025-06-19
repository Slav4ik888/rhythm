import { AccessLevel } from '../types';

interface AccessType {
  label: string
}

export const ACCESS_TYPE: Record<AccessLevel, AccessType> = {
  'n': {
    label: 'Закрыт'
  },
  'v': {
    label: 'Просмотр'
  },
  'e': {
    label: 'Редактирование'
  },
};

export const ACCESS_LABELS = Object.values(ACCESS_TYPE).map(item => item.label);

export const ACCESS_LABEL_TYPE: Record<string, AccessLevel> = {
  [ACCESS_TYPE.n.label]: 'n',
  [ACCESS_TYPE.v.label]: 'v',
  [ACCESS_TYPE.e.label]: 'e',
}
