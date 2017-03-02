import React from 'react'
import ObjectField from 'react-jsonschema-form/lib/components/fields/ObjectField'
import { retrieveSchema } from 'react-jsonschema-form/lib/utils'
import { Col } from 'react-bootstrap'

export default class GridField extends ObjectField {
  state = { firstName: 'hasldf' }
  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      required,
      disabled,
      readonly,
      onBlur,
      formData
    } = this.props
    const { definitions, fields, formContext } = this.props.registry
    const { SchemaField, TitleField, DescriptionField } = fields
    const schema = retrieveSchema(this.props.schema, definitions)
    const title = (schema.title === undefined) ? '' : schema.title

    const layout = uiSchema['ui:layout']

    return (
      <fieldset>
        {title ? <TitleField
            id={`${idSchema.$id}__title`}
            title={title}
            required={required}
            formContext={formContext}/> : null}
        {schema.description ?
          <DescriptionField
            id={`${idSchema.$id}__description`}
            description={schema.description}
            formContext={formContext}/> : null}
        {
          layout.map((row, index) => {
            console.log('rendering:', row, index)
            return (
              <div className="row" key={index}>
                {
                  Object.keys(row).map((name, index) => {
                    const { doShow, ...rowProps } = row[name]
                    console.log('name?', doShow)
                    let style = {}
                    if (doShow && !doShow({ formData })) {
                      style = { display: 'none' }
                    }
                    if (schema.properties[name]) {
                      return (
                          <Col {...rowProps} key={index} style={style}>
                            <SchemaField
                               name={name}
                               required={this.isRequired(name)}
                               schema={schema.properties[name]}
                               uiSchema={uiSchema[name]}
                               errorSchema={errorSchema[name]}
                               idSchema={idSchema[name]}
                               formData={formData[name]}
                               onChange={this.onPropertyChange(name)}
                               onBlur={onBlur}
                               registry={this.props.registry}
                               disabled={disabled}
                               readonly={readonly}/>
                          </Col>
                      )
                    } else {
                      const { render, ...rowProps } = row[name]
                      let UIComponent = () => null

                      console.log('render custom?', this.state, name, uiSchema)
                      if (render) {
                        UIComponent = render
                      }

                      console.log('got uicomponent', UIComponent)
                      return (
                            <Col {...rowProps} key={index} style={style}>
                              <UIComponent
                                name={name}
                                formData={formData}
                                errorSchema={errorSchema}
                                uiSchema={uiSchema}
                                schema={schema}
                                registry={this.props.registry}
                              />
                            </Col>
                      )
                    }
                  })
                }
              </div>
            )
          })
        }</fieldset>
    )
  }
}
