# GitHub Pages — инструкция по развёртыванию

## Шаг 1 — Установить Git (если ещё нет)

Скачать с: https://git-scm.com/download/win
После установки перезапустить терминал.

## Шаг 2 — Создать репозиторий на GitHub

1. Открыть https://github.com и войти в аккаунт
2. Нажать кнопку **"New"** (зелёная кнопка)
3. Название репозитория: `lego-catalog` (или любое другое)
4. Видимость: **Public** (обязательно для GitHub Pages)
5. НЕ ставить галочки (без README, .gitignore, license)
6. Нажать **"Create repository"**

## Шаг 3 — Загрузить проект

Открыть PowerShell в папке `c:\Users\MSI\Desktop\site` и выполнить:

```powershell
# Настройка Git (только один раз)
git config --global user.name "Ваше Имя"
git config --global user.email "ваш@email.com"

# Инициализация и загрузка
cd c:\Users\MSI\Desktop\site
git init
git add .
git commit -m "Initial commit — LEGO Catalog"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/lego-catalog.git
git push -u origin main
```

> ⚠️ Замените `ВАШ_ЛОГИН` на ваш GitHub логин и `lego-catalog` на имя репозитория.
> Загрузка займёт время (файлы весят ~1 ГБ) — не прерывайте процесс.

## Шаг 4 — Включить GitHub Pages

1. Открыть репозиторий на GitHub
2. Перейти в **Settings** → **Pages** (левое меню)
3. В разделе **Source** выбрать:
   - Branch: **main**
   - Folder: **/ (root)**
4. Нажать **Save**

## Шаг 5 — Открыть сайт

После ~1-2 минут сайт будет доступен по адресу:
```
https://ВАШ_ЛОГИН.github.io/lego-catalog/
```

---

## ⚠️ Если git push не работает

GitHub может попросить авторизацию. Используйте Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. Дать разрешения: `repo`
3. При запросе пароля в git — вставить токен вместо пароля
