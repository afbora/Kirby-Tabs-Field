# Tabs Field v1.7
### Tabbed Fields for Kirby CMS

![Preview](/preview.gif)

The tab field type is designed specifically for use within the fields.

![Error](/tabswitch.gif)

If there's an error in another tab, like an empty but required field, the tab will be automatically switched.

## Installation guide

### 1. With Kirby CLI

```bash
$ cd /your/kirby/installation
$ kirby plugin:install afbora/Kirby-Tabs-Field
```

### 2. With Git

###### 2.1. Cloning
```bash
$ cd /your/kirby/instalation/site/fields
$ git clone https://github.com/afbora/Kirby-Tabs-Field.git tabs
```

###### 2.2. Submodule
```bash
$ cd /your/kirby/instalation/
$ git submodule add https://github.com/afbora/Kirby-Tabs-Field site/fields/tabs
```

### 3. Tarball

Simply [download this repository](https://github.com/afbora/Kirby-Tabs-Field/archive/master.zip) and extract it into `/your-kirby-installation/site/fields/`.


## Blueprint Example
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
