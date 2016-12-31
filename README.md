# Tabs Field v1.6
### Tabbed Fields for Kirby CMS

![Preview](/preview.gif)

The tab field type is designed specifically for use within the fields.

![Error](/tabswitch.gif)

If there's an error in another tab, like an empty but required field, the tab will be automatically switched.


#### Blueprint Example
``` YAML
title: Project
pages: true
files: true
fields:
  tab1:
    label: General
    type:  tabs
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  tab2:
    label: Details
    type:  tabs
  technologies:
    label: Technologies
    type:  textarea
  link:
    label: Link
    type:  url
```
