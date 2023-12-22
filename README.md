# NEWLK API

# Авторизация

## Вход

`POST /login`

```json
{
  "username": "string",
  "password": "string"
}
```

Пример ответа: 200 ОК
```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "user": {
    "username": "string",
    "firstname": "string",
    "lastname": "string",
    "middlename": "string",
    "birthday": "string",
    "phone": "string",
    "email": "string",
    "citizenship": "string",
    "roles": [
      {
        "login": "string",
        "id": "string",
        "type": "OTHER"
      }
    ],
    "sessionId": "string",
    "sessionHash": "string",
    "allId": "string"
  }
}
```

## Обновление токена

`POST /token/refresh`

```json
{
  "refreshToken": "string"
}
```

Пример ответа: 200 ОК
```json
{
    "accessToken": "string"
}
```

## Получение открытого ключа JWT

`GET /token/jwks`

Пример ответа: 200 ОК

```json
string
```

# Формат ошибок

```json
{
    "error": "string",
    "details": [
        {
            "field": "string",
            "message": "string"
        }
    ]
}
```

# Регистрация

## Регистрация

`POST /register`

```json
{
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "email": "string@email.com",
  "password": "String1234",
  "agreement": true
}
```

Пример ответа: 201 CREATED

## Подтверждение регистрации

`POST /register/approve`

```json
{
  "id": 0,
  "hash": "string"
}
```

Пример ответа: 201 CREATED

# Обо мне

## Получение общих сведений

`GET /users/me`

Authorization: Bearer \<access-token\>

Пример ответа: 200 OK
```json
{
  "name": "string",
  "surName": "string",
  "patronymic": "string",
  "birthDay": "2023-12-19",
  "gender": "M",
  "phone": "string",
  "countryId": 0,
  "email": "string",
  "updatable": true
}
```

## Обновление общих сведений

`PUT /users/me`

Authorization: Bearer \<access-token\>

```json
{
  "name": "string",
  "surName": "string",
  "patronymic": "string",
  "birthDay": "2023-09-12",
  "gender": "M",
  "phone": "string",
  "countryId": 0
}
```

Пример ответа: 200 ОК

## Добавление общих сведений (при регистрации)

`POST /users/me`

Authorization: Bearer \<access-token\>

```json
{
  "name": "string",
  "surName": "string",
  "patronymic": "string",
  "birthDay": "2023-09-12",
  "gender": "M",
  "phone": "string",
  "countryId": 0
}
```

Пример ответа: 200 ОК

# Роли

## Получение ролей

`GET /users/me/role`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
[
  {
    "role": "string"
  }
]
```

## Обновление роли

`PUT /users/me/role`

Authorization: Bearer \<access-token\>

```json
[
  {
    "role": "ABIT"
  }
]
```

Пример ответа: 200 ОК

## Добавление роли (при регистрации)

`POST /users/me/role`

Authorization: Bearer \<access-token\>

```json
[
  {
    "role": "GUEST"
  }
]
```

Пример ответа: 200 ОК

# Обо мне: документ

## Получение документа

`GET /users/me/document`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
{
  "documentTypeId": 0,
  "passportSeries": "string",
  "passportNumber": "string",
  "issuedBy": "string",
  "dateIssue": "2023-12-19",
  "divisionCode": "string",
  "inn": "string",
  "snils": "string"
}
```

## Обновление документа

`PUT /users/me/document`

Authorization: Bearer \<access-token\>

```json
{
  "documentTypeId": 0,
  "passportSeries": "string",
  "passportNumber": "string",
  "issuedBy": "string",
  "dateIssue": "2023-09-12",
  "divisionCode": "string",
  "inn": "string",
  "snils": "string"
}
```

Пример ответа: 200 ОК

## Добавление документа (при регистрации)

`POST /users/me/document`

Authorization: Bearer \<access-token\>

```json
{
  "documentTypeId": 0,
  "passportSeries": "string",
  "passportNumber": "string",
  "issuedBy": "string",
  "dateIssue": "2023-09-12",
  "divisionCode": "string",
  "inn": "string",
  "snils": "string"
}
```

Пример ответа: 200 ОК

# Опыт работы

## Получение опыта работы

`GET /users/me/work-history`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
{
  "portfolioLink": "string",
  "items": [
    {
      "id": 0,
      "name": "string",
      "startDate": "2023-09-12",
      "endDate": "2023-09-12",
      "responsibilities": "string",
      "additionalInfo": "string"
    }
  ]
}
```

## Обновление опыта работы

`PUT /users/me/work-history`

Authorization: Bearer \<access-token\>

```json
{
  "portfolioLink": "string"
}
```

Пример ответа: 200 ОК

## Добавление опыта работы (при регистрации)

`POST /users/me/work-history`

Authorization: Bearer \<access-token\>

```json
{
  "portfolioLink": "string",
  "items": [
    {
      "name": "string",
      "startDate": "2023-09-12",
      "endDate": "2023-09-12",
      "responsibilities": "string",
      "additionalInfo": "string"
    }
  ]
}
```

Пример ответа: 200 ОК

## Обновление ячейки опыта работы

`PUT /users/me/work-history/items/{id}`

Authorization: Bearer \<access-token\>

```json
{
  "id": 0,
  "name": "string",
  "startDate": "2023-09-12",
  "endDate": "2023-09-12",
  "responsibilities": "string",
  "additionalInfo": "string"
}
```

Пример ответа: 200 ОК

## Удаление ячейки опыта работы

`DELETE /users/me/work-history/items/{id}`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

## Добавление ячейки опыта работы

`POST /users/me/work-history/items`

Authorization: Bearer \<access-token\>

```json
{
  "name": "string",
  "startDate": "2023-09-12",
  "endDate": "2023-09-12",
  "responsibilities": "string",
  "additionalInfo": "string"
}
```

Пример ответа: 200 ОК

# Обо мне: родители

## Получение родителей

`GET /users/me/parent`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
[
  {
    "id": 0,
    "name": "string",
    "surName": "string",
    "patronymic": "string",
    "documentTypeId": 0,
    "phone": "string",
    "passportSeries": "string",
    "passportNumber": "string",
    "dateIssue": "2023-09-12",
    "divisionCode": "string",
    "issuedBy": "string",
    "registrationAddress": "string",
    "residenceAddress": "string",
    "inn": "string",
    "snils": "string",
    "eMail": "string"
  }
]
```

## Обновление родителя

`PUT /users/me/parent`

Authorization: Bearer \<access-token\>

```json
{
  "id": 0,
  "name": "string",
  "surName": "string",
  "patronymic": "string",
  "documentTypeId": 0,
  "phone": "string",
  "passportSeries": "string",
  "passportNumber": "string",
  "dateIssue": "2023-09-12",
  "divisionCode": "string",
  "issuedBy": "string",
  "registrationAddress": "string",
  "residenceAddress": "string",
  "inn": "string",
  "snils": "string",
  "eMail": "string"
}
```

Пример ответа: 200 ОК

## Добавление родителя

`POST /users/me/parent`

Authorization: Bearer \<access-token\>

```json
{
  "name": "string",
  "surName": "string",
  "patronymic": "string",
  "documentTypeId": 0,
  "phone": "string",
  "passportSeries": "string",
  "passportNumber": "string",
  "dateIssue": "2023-09-12",
  "divisionCode": "string",
  "issuedBy": "string",
  "registrationAddress": "string",
  "residenceAddress": "string",
  "inn": "string",
  "snils": "string",
  "eMail": "string"
}
```

Пример ответа: 200 ОК

## Удаление родителя

`DELETE /users/me/parent`

Authorization: Bearer \<access-token\>

```json
{
  "id": 0
}
```

Пример ответа: 200 ОК

# Обо мне: образование

## Получение образования

`GET /users/me/education`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
[
  {
    "id": 0,
    "studentCountry": "string",
    "nameOfInstitute": "string",
    "educationLevelId": 0,
    "documentNumber": "string",
    "documentSeries": "string",
    "specialization": "string",
    "graduateYear": "string",
    "countryId": 0
  }
]
```

## Обновление образования

`PUT /users/me/education`

Authorization: Bearer \<access-token\>

```json
{
  "id": 0,
  "studentCountry": "string",
  "nameOfInstitute": "string",
  "educationLevelId": 0,
  "documentNumber": "string",
  "documentSeries": "string",
  "specialization": "string",
  "graduateYear": "string",
  "countryId": 0
}
```

Пример ответа: 200 ОК

## Добавление образования

`POST /users/me/education`

Authorization: Bearer \<access-token\>

```json
{
  "studentCountry": "string",
  "nameOfInstitute": "string",
  "educationLevelId": 0,
  "documentNumber": "string",
  "documentSeries": "string",
  "specialization": "string",
  "graduateYear": "string",
  "countryId": 0
}
```

Пример ответа: 200 ОК

## Удаление образования

`DELETE /users/me/education`

Authorization: Bearer \<access-token\>

```json
{
  "id": 0
}
```

Пример ответа: 200 ОК

# Обо мне: адрес

## Получение адреса

`GET /users/me/address`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК
```json
{
  "registrationAddress": {
    "countryId": 0,
    "city": "string",
    "street": "string",
    "house": "string",
    "apartment": "string",
    "index": "string"
  },
  "residenceAddress": {
    "countryId": 0,
    "city": "string",
    "street": "string",
    "house": "string",
    "apartment": "string",
    "index": "string"
  }
}
```

## Обновление адреса

`PUT /users/me/address`

Authorization: Bearer \<access-token\>

```json
{
  "registrationAddress": {
    "countryId": 0,
    "city": "string",
    "street": "string",
    "house": "string",
    "apartment": "string",
    "index": "string"
  },
  "residenceAddress": {
    "countryId": 0,
    "city": "string",
    "street": "string",
    "house": "string",
    "apartment": "string",
    "index": "string"
  }
}
```

Пример ответа: 200 ОК

# Подсказки

## Типы образования студента

`GET /student/institution`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

## Типы образования

`GET /education`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "type": "string"
  }
]
```

## Уровни образования

`GET /education/levels`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

## Уровни образования сотрудника

`GET /education/employee`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

## Типы документа

`GET /document`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "type": "string"
  }
]
```

## Страны

`GET /country`

Пример ответа: 200 OK
```json
[
  {
    "id": 0,
    "shortName": "string"
  }
]
```

# Настройки: пароль

## Смена пароля

`PUT /settings/password`

Authorization: Bearer \<access-token\>

```json
{
  "oldPassword": "string",
  "newPassword": "Bi$V|:ZMo!gpR:uUC0&J"
}
```

Пример ответа: 200 ОК

# Настройки: контактные электронные почты

## Получение электронных почт

`GET /settings/emails`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

```json
[
  {
    "id": 0,
    "email": "string",
    "verified": true
  }
]
```

## Добавление электронной почты

`POST /settings/emails`

Authorization: Bearer \<access-token\>

```json
{
  "email": "string"
}
```

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "email": "string",
  "verified": false
}
```

## Отправка подтверждения электронной почты

`POST /settings/emails/{id}/send-verification`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "email": "string",
  "verified": false,
  "cooldownMs": 0
}
```

## Подтверждение электронной почты

`POST /settings/emails/{id}/verify`

Authorization: Bearer \<access-token\>

```json
{
  "otp": "string"
}
```

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "email": "string",
  "verified": true
}
```

## Удаление электронной почты

`DELETE /settings/emails/{id}`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

# Настройки: контактные номера телефонов

## Получение номеров телефонов

`GET /settings/phones`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

```json
[
  {
    "id": 0,
    "phone": "string",
    "verified": true
  }
]
```

## Добавление номера телефона

`POST /settings/phones`

Authorization: Bearer \<access-token\>

```json
{
  "phone": "643355525896384"
}
```

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "phone": "string",
  "verified": false
}
```

## Отправка подтверждения номера телефона

`POST /settings/phones/{id}/send-verification`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "phone": "string",
  "verified": false,
  "cooldownMs": 0
}
```

## Подтверждение номера телефона

`POST /settings/phones/{id}/verify`

Authorization: Bearer \<access-token\>

```json
{
  "otp": "string"
}
```

Пример ответа: 200 ОК

```json
{
  "id": 0,
  "phone": "string",
  "verified": true
}
```

## Удаление номера телефона

`DELETE /settings/phones/{id}`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

# Настройки: идентификационная фотография

## Получение фото

`GET /settings/photo`

Authorization: Bearer \<access-token\>

Пример ответа: 200 ОК

```
blob
```

## Добавление фото

`POST /settings/photo`

Authorization: Bearer \<access-token\>

```
multipart_file
```

Пример ответа: 200 ОК

## Изменение фото

`PUT /settings/photo`

Authorization: Bearer \<access-token\>

```
multipart_file
```

Пример ответа: 200 ОК
