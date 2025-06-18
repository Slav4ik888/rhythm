import { AccessLevel } from '../types';

interface AccessType {
  label: string
}

export const ACCESS_TYPE: Record<AccessLevel, AccessType> = {
  'none': {
    label: 'Закрыт'
  },
  'view': {
    label: 'Просмотр'
  },
  'edit': {
    label: 'Редактирование'
  },
};
