import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ImageUploadWidget extends Component {
  defaultProps = {
    multiple: false
  };

  constructor(props) {
    super(props)
    const { value } = props
    this.state = {
      values: null
    }
    // const values = Array.isArray(value) ? value : [value]
    // this.state = { values, filesInfo: extractFileInfo(values) }
  }

  onDrop(files) {
    const { onChange, multiple } = this.props

    const state = {
      values: files.map(fileInfo => fileInfo.preview),
      fileInfo: files
    }
    this.setState(state, () => {
      if (multiple) {
        onChange(state.values)
      } else {
        onChange(state.values[0])
      }

    })
  }

  render() {
    console.log('state?', this.state)
    const { multiple, id, readonly, disabled, autofocus } = this.props
    const { values } = this.state
    const preview = values ? values[0] : false

    const empty = (
      <div className="empty"><i className="fa fa-fw fa-2x fa-photo" /><p><span>Foto ändern</span></p></div>
    )
    return (
      <Dropzone onDrop={::this.onDrop} accept="image/*" className="dndzone">
        {!preview && empty}
        {preview && <div style={{ background: `url(${preview}) no-repeat center center`, 'backgroundSize': 'cover', width: '100%', height: '100%' }}/> }
      </Dropzone>
    )
  }
}

export default ImageUploadWidget
