---
category: Components
type: Data Entry
title: Picker
---

Choose from a set of data, e.g. Country choice.

## When To Use

- Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input.

## API

- Picker's children is best to `List.Item`, if not, need to be a custom component (the `onClick` props need to be handled in the component)

| Property       | Description                                                                                                   | Type                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------- |
| data           | data source                                                                                                   | `Array<{value, label, children: Array}>` | -       |
| value          | the value, the format is`[value1, value2, value3]`, corresponds to the level value of the data source         | Array                                    | -       |
| defaultValue   | the defaultValue, the format is `[value1, value2, value3]`, corresponds to the level value of the data source | Array                                    | -       |
| isView         | inline display in page, otherwise it shows as `Popup`                                                         | Boolean                                  | false   |
| cols           | col numbers                                                                                                   | Number                                   | `3`     |
| disabled       | set disabled                                                                                                  | Boolean                                  | false   |
| cascade        | whether is cascade mode                                                                                       | Boolean                                  | false   |
| children       | usually `List.Item`                                                                                           | Object                                   | -       |
| title          | title                                                                                                         | String                                   | -       |
| okText         | ok text                                                                                                       | String                                   | `确定`  |
| cancelText     | cancel text                                                                                                   | String                                   | `取消`  |
| onConfirm      | handler called when click ok                                                                                  | (val): void                              | -       |
| onCancel       | handler called when click cancel                                                                              | (): void                                 | -       |
| onChange       | selected callback function                                                                                    | (val): void                              | -       |
| onColumnChange | trigger on each column of selected data is changed                                                            | (val, col): void                         | -       |
