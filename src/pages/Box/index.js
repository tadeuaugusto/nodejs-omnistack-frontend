import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import en from 'date-fns/locale/en';

import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import './styles.css';

import Dropzone from 'react-dropzone';

export default class Box extends Component {

  state = {
    box: {}
  }

  async componentDidMount() {
    const boxId = this.props.match.params.id;
    const response = await api.get(`boxes/${boxId}`);

    this.setState({ box: response.data });
  }

  handleUpload = files => {
    files.forEach(file => {

      const data = new FormData();
      const boxId = this.props.match.params.id;

      data.append('file', file);
      api.post(`boxes/${box}/files`, data);
    });
  };

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={ logo } alt="" />
          <h1>{ this.state.box.title }</h1>
        </header>

        <Dropzone onDropAccepted={ this.handleUpload }>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arraste arquivos ou clique aqui</p>
            </div>
          )}
        </Dropzone>

        <ul>
          { this.state.box.files && this.state.box.files.map(file => (
            <li key={ file._id }>
              <a className="fileInfo" href={ file.url } target="_blank">
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{ file.title }</strong>
              </a>
              <span>há { distanceInWords(file.createdAt, new Date(), { locale: en } )}</span>
            </li>
          )) }
          
        </ul>
      </div>
    )
  }
}
