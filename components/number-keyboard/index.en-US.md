---
category: Components
type: Data Entry
title: NumberKeyboard
---

## When To Use

- Generally used such as password, verification code or payment amount input

## API

| Property  | Description                                                                                                                                                                      | Type                          | Default        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| type      | keyboard type, `professional`with confirmation key and decimal point is often used for price or amount input, `simple` is generally used for password or verification code input | String                        | `professional` |
| disorder  | if numeric keys of keyboard are out of order                                                                                                                                     | Boolean                       | `false`        |
| okText    | text of confirmation key                                                                                                                                                         | String                        | `确认`         |
| onHide    | Click hide key                                                                                                                                                                   | (): void                      | -              |
| onEnter   | Click numeric key                                                                                                                                                                | (val: Number or String): void | -              |
| onConfirm | Click confirmation key                                                                                                                                                           | (): void                      | -              |
| onDelete  | Click delete key                                                                                                                                                                 | (): void                      | -              |
