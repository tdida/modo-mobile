---
category: Components
type: Data Entry
title: InputItem
---

## When To Use

- Single-line text input, supports text formatting in exact scenarios

## API

| Property                 | Description                                                                                                                             | Type                | Default |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| type                     | input type, special type has text formatting `text`,`bankCard`,`phone`,`digit`,`password`,`money(analog numeric keyboard with decimal)` | String              | `text`  |
| name                     | name of input                                                                                                                           | String              | -       |
| value                    | the value of input                                                                                                                      | String              | -       |
| defaultValue             | provides an initial value that will change when the user starts typing.                                                                 | String              | -       |
| title                    | title of input                                                                                                                          | String              | -       |
| placeholder              | placeholder of input                                                                                                                    | String              | -       |
| brief                    | description                                                                                                                             | String              | -       |
| maxLength                | limits the maximum number of characters that can be entered                                                                             | Number              | -       |
| align                    | text alignment `left`,`center`,`right`                                                                                                  | String              | `left`  |
| error                    | error message                                                                                                                           | String              | -       |
| readOnly                 | whether is readonly                                                                                                                     | Boolean             | `false` |
| disabled                 | whether is disabled                                                                                                                     | Boolean             | `false` |
| clear                    | use clear control or not                                                                                                                | Boolean             | `false` |
| onChange                 | callback that is called when the text input's text changes                                                                              | (val: string): void | -       |
| onBlur                   | callback that is called when the text input is blurred                                                                                  | (val: string): void | -       |
| onFocus                  | callback that is called when the text input is focused                                                                                  | (val: string): void | -       |
| onVirtualKeyboardConfirm | callback that is called when the text input is virtualKeyboard confirm                                                                  | (val: string): void | -       |
