import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import en from 'date-fns/locale/en';

import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {

  state = {
    box: {}
  }

  async componentDidMount() {
    const boxId = this.props.match.params.id;
    const response = await api.get(`boxes/${boxId}`);

    this.setState({ box: response.data });
  }

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={ logo } alt="" />
          <h1>{ this.state.box.title }</h1>
        </header>
        <ul>
          { this.state.box.files && this.state.box.files.map(file => (
            <li>
              <a className="fileInfo" href={ file.url } target="_blank">
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{ file.title }</strong>
              </a>
              <span>{ distanceInWords(file.createdAt, new Date(), { locale: en } )} {" "}ago</span>
            </li>
          )) }
          
        </ul>
      </div>
    )
  }
}
