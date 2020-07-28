/*
 * Club
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import TableOrder from '../TableOrder/Loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import hallImage from '../Club/images/hall.png';
import tableImage from '../Club/images/table-icon.png';
import leftButton from '../Club/images/left-button.png';
import rightButton from '../Club/images/right-button.png';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Hall from '../Hall/hall'

export default class Club extends React.Component {
  state = {
    index: 0,
    selectedHall: null,
    selectedTable: null
  }
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  componentWillMount() {
    if (!this.state.selectedHall) {
      this.setState({
        selectedHall: this.props.halls.get(0)
      })
    }
    return true;
  }
  unSelectTable() {
    this.setState({
      selectedTable: null
    });
  }
  selectTable(table) {
    console.log(table.get('name'));
    this.setState({
      selectedTable: table
    });
  }

  nextHall(evt) {
    if (this.props.halls.get(this.state.index + 1)) {
      this.setState({ selectedHall: this.props.halls.get(++this.state.index) });
    }
  }
  prevHall(evt) {
    if (this.props.halls.get(this.state.index - 1)) {
      this.setState({ selectedHall: this.props.halls.get(--this.state.index) });
    }
  }
  render() {



    return (
      <div className="club-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="Picasso Italino"
          />
        </Helmet>
        <div>

          

          <TableOrder unSelectTable ={this.unSelectTable.bind(this)} managingOrder={this.state.selectedTable} />

          <div className="hall-IMG-SET">
            <div className="main-hall-title">{this.state.selectedHall.get('name')}</div>
            <img className="hall-bk" src={hallImage} />
            <div className="tables-container">

              {this.state.selectedHall.get('tables').map((table) => {
                return <div className="table cbtn" onClick={() => { this.selectTable(table) }}>
                  <a href="#modal1" class="modal-trigger"> <img src={tableImage} />
                    <span>{table.get('name')}</span>
                  </a>
                </div>
              })}

            </div>
            <div className="row controls-panel">
              <div className="col s4">

              </div>
              <div className="col s4">
                <img className={this.state.index == 0 ? 'disabled st-btn' : 'st-btn'} onClick={(evt) => { this.prevHall(evt) }} title="Show Previous Hall" src={leftButton} />
                <img className={this.state.index == (this.props.halls.size - 1) ? 'disabled st-btn' : 'st-btn'} onClick={(evt) => { this.nextHall(evt) }} title="Show Next Hall" src={rightButton} />
              </div>
              <div className="col s4">

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
