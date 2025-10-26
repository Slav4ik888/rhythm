#!/bin/bash

set -e # Остановить выполнение при любой ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
  echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
  echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
  exit 1
}

warning() {
  echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Функция для выполнения команды с проверкой
run_command() {
  log "Выполняю: $1"
  if eval "$1"; then
    log "✅ Успешно: $1"
  else
    error "❌ Ошибка при выполнении: $1"
  fi
}

# Основной процесс деплоя
main() {
  log "🚀 Запуск процесса деплоя..."

  # Серверная часть
  run_command "cd /var/www/vtempe/data/rhythm-server"
  run_command "git pull"
  run_command "npm run build"

  # Клиентская часть
  run_command "cd /var/www/vtempe/data/rhythm"
  run_command "git pull"
  run_command "npm run build:prod"

  # Перезапуск сервиса
  run_command "service rhythm-server restart"

  log "🎉 Деплой успешно завершен!"
}

# Запускаем основной процесс
main "$@"
