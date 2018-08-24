---
category: Components
type: Data Display
title: List
---

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

## When To Use

- Generally `List` consists of main infomation, main operations, secondary infomation and secondary operations.
- The main infomation and main operations are placed on the left side of list, and secondary infomation and secondary operations are placed on the right side.

## API

| Property | Description                | Type                 | Default |
| -------- | -------------------------- | -------------------- | ------- |
| title    | title                      | String               | -       |
| extra    | extra content on the right | String/React.Element | -       |

### List.Item

| Property | Description                                                              | Type          | Default |
| -------- | ------------------------------------------------------------------------ | ------------- | ------- |
| title    | title                                                                    | String        | -       |
| brief    | subtitle                                                                 | String        | -       |
| extra    | title assist content, such as`Icon`                                      | React.Element | -       |
| arrow    | arrow direction, options: `left`,`right`,`up`,`down`,`empty`, `""`       | String        | `right` |
| align    | vertical alignment of child elements, options: `left`, `right`, `center` | String        | `right` |
| onClick  | callback is called when list is clicked                                  | (): void      | -       |
