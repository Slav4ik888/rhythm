import { Errors } from 'shared/lib/validators';


export interface StateSchemaHints {
  loading     : boolean
  errors      : Errors

  hintsQueue  : string[]       // Очередь подсказок
  shownHints  : string[]       // Уже показанные подсказки
  currentHint : string | null, // Текущая активная подсказка
}
