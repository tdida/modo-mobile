---
category: Components
type: Data Entry
title: Stepper
---

`Stepper` can be used to increase or decrease value step by step.

## When To Use

- When you want to make small adjustments to the value, you can use `Stepper`.

## API

| Property     | Description                                 | Type             | Default   |
| ------------ | ------------------------------------------- | ---------------- | --------- |
| min          | Specifies the minimum value                 | Number or String | -Infinity |
| max          | Specifies the maximum value                 | Number or String | Infinity  |
| value        | Specifies the value of the `Stepper`        | Number or String |           |
| step         | Specifies the legal number intervals        | Number or String | 1         |
| defaultValue | Specifies the defaultValue of the `Stepper` | Number           |           |
| onChange     | Called when value of the `Stepper` changed  | (): void         |           |
| disabled     | Specifies the `Stepper` should be disabled  | Boolean          | false     |
| readOnly     | Specifies the `Stepper` is read only        | Boolean          | false     |
| integer      | only integers                               | Boolean          | false     |
