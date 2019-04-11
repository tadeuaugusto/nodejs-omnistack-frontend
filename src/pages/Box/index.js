import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={ logo } alt="" />
          <h1>Rocketseat</h1>
        </header>
        <ul>
          <li>
            <a href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Everblast (Earthling & Chromatone) LIVE @ Shiva Valley, Anjuna Goa 2019</strong>
            </a>
            <span>3 minutes ago</span>
          </li>
          <li>
            <a href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>DigiCult Psy-Fi Compilation 2019</strong>
            </a>
            <span>30 minutes ago</span>
          </li>
        </ul>
      </div>
    )
  }
}
