
/**
 * Выводит сообщение в консоль, если не продакшен.
 *  flag '--force' чтобы показать в production
 * @param args - аргументы для вывода
 * Варианты использования:
 *  devLog('Лог только в development'); // Не покажется в production
 *  devLog('Важное сообщение', '--force'); // Покажется даже в production
 */
export function __devLog(...args: any[]): void {
  // const isProduction = process.env.NODE_ENV === 'production';
  const hasForceFlag = args.includes('--force');

  if (__IS_DEV__ || hasForceFlag) {
    // Фильтруем аргументы, исключая флаг '--force'
    const filteredArgs = args.filter(arg => arg !== '--force');
    // eslint-disable-next-line no-console
    console.log(...filteredArgs);
  }
}
