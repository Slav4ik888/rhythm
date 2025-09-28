
export interface StateSchemaHints {
  hintsQueue  : string[]       // Очередь подсказок
  shownHints  : string[]       // Уже показанные подсказки
  currentHint : string | null, // Текущая активная подсказка
}
