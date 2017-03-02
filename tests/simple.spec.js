import React from 'react'
import LayoutField from '../src'
import renderer from 'react-test-renderer'
import Form from 'react-jsonschema-form'

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
  'ui:options': {
    layout: [
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
}


test('Layout should render correctly', () => {
  const component = renderer.create(
    <Form schema={schema} uiSchema={uiSchema} fields={fields} />
  )
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()

})
