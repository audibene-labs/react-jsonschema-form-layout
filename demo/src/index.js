import React from 'react'
import { render } from 'react-dom'
import LayoutField from '../../src'
import Form from 'react-jsonschema-form'
import ImageUploadWidget from './ImageUploadWidget'

import './dnd.less'

export const TitleField = (props) => {
  console.log('titlefield', props)
  const { title, required, id } = props

  let legend = legend = `${title}${(required ? '*' : '')}`
  return <label className="control-label" for={id}>{legend}</label>
}

const schema = {
  title: 'Tell m',
  type: 'object',
  required: ['firstName'],
  properties: {
    'image': {
      type: 'string'
    },
    user: {
      type: 'object',
      'properties': {
        'password': {
          'type': 'string',
          'title': 'Password'
        },
        'username': {
          'type': 'string'
        }
      }
    },
    'details': {
      type: 'boolean'
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
  layout: LayoutField,
  TitleField: TitleField
}

const widgets = {
  ImageUpload: ImageUploadWidget
}

const isFilled = (fieldName) => ({ formData }) => (formData[fieldName] && formData[fieldName].length) ? true : false
const isTrue = (fieldName) => ({ formData }) => (formData[fieldName])

const uiSchema = {
  'ui:field': 'layout',
  'ui:layout': [
    {
      firstName: { md: 6 },
      lastName: { md: 6, doShow: isFilled('firstName') }
    }, {
      image: { md: 3, doShow: isFilled('lastName')  },
      user: { md: 9 ,  doShow: isFilled('lastName') }
    }, {
      details: { md: 12 }
    }, {
      'description': {
        md: 12,
        doShow: isFilled('lastName'),
        render: (props) => {
          const { formData, errorSchema } = props
          const { firstName, lastName } = formData

          return (
            <div>
              <h3>Hello, {firstName} {lastName}!</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sad</p>
            </div>
          )
        }
      }
    }, {
      age: { md: 12, doShow: isTrue('details') }
    }, {
      bio: { md: 12, doShow: isTrue('details')  }
    }
  ],
  'bio': {
    'ui:widget': 'textarea'
  },
  'image': {
    'ui:widget': 'ImageUpload'
  },
  'user': {
    'ui:field': 'layout',
    'ui:layout': [
      { username: { md: 12 } }, { password: { md: 12 } },
    ],

  }
}

class MyForm extends React.Component {
  onSubmit(e) {
    console.log('onSubmit', e)
  }
  render() {
    const { formData } = this.props
    return (
      <div className='container'>
        <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <Form
                formData={formData}
                schema={schema}
                uiSchema={uiSchema}
                fields={fields}
                widgets={widgets}
                onSubmit={this.onSubmit}
                noHtml5Validate={true}/>
            </div>
        </div>
      </div>
    )
  }
}

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h3>Demo form</h3>
        <MyForm formData={{ firstName: 'hello' }} />
      </div>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
