# react-jsonschema-form-layout

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Just a small custom field for the awesome [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form).

# Key features:

* support bootstrap's grid
* add non-form elements in between
* ability to control display of elements based on form-state

[build-badge]: https://img.shields.io/travis/audibene-labs/react-jsonschema-form-layout/master.png?style=flat-square
[build]: https://travis-ci.org/audibene-labs/react-jsonschema-form-layout

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/audibene-labs/react-jsonschema-form-layout/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/audibene-labs/react-jsonschema-form-layout


![2017-03-02 14 09 19](https://cloud.githubusercontent.com/assets/179281/23513296/ce427434-ff63-11e6-8cfd-d3d3ae8467bd.gif)


# Installation

```
yarn add react-jsonschema-form-layout
```

# Usage:

```javascript
const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    'password': {
      'type': 'string',
      'title': 'Password'
    },
    'lastName': {
      'type': 'string',
      'title': 'Last name'
    },
    'bio': {
      'type': 'string',
      'title': 'Bio'
    },
    'firstName': {
      'type': 'string',
      'title': 'First name'
    },
    'age': {
      'type': 'integer',
      'title': 'Age'
    }
  }
}

const fields = {
  layout: LayoutField
}

const uiSchema = {
  'ui:field': 'layout',
  'ui:layout': [
    {
      firstName: { md: 6 },
      lastName: { md: 6 }
    }, {
      bio: { md: 12 }
    }, {
      age: { md: 6 },
      password: { md: 6 }
    }
  ]
}
```
