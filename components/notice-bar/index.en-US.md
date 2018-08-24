---
category: Components
type: Feedback
title: NoticeBar
---

Component to display a system message, event notice and etc. Which is under the navigation bar.

## When To Use

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## API

| Property | Description                                                                                   | Type         | Default                           |
| -------- | --------------------------------------------------------------------------------------------- | ------------ | --------------------------------- |
| mode     | Type of NoticeBar, options: `closable` `link`                                                 | String       | ''                                |
| icon     | Set the icon at the start position                                                            | ReactNode    | `<Icon type="question-circle" />` |
| onClick  | A callback function, can be executed when you close the notice or click on the operating area | (): void     |                                   |
| action   | text which is used to replace icon                                                            | ReactElement |                                   |
| duration | shows time                                                                                    | Number       | 0                                 |
