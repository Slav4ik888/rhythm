
export function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Удаляем спецсимволы
    .trim()
    .replace(/\s+/g, '-');   // Заменяем пробелы на дефисы
}

// generateSlug('ACME Inc.'); // 'acme-inc'
