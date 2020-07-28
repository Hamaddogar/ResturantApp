/*
 * Club
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import Hall from '../Hall/hall'

class Dish extends React.Component {

  render() {
    return <div className="dish">
      <h1>This is dish</h1>
    </div>
  }

}

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      orderedDishes: [],
      dropdownOpen: false,
      selectedCategory: null
    };

    // this.toggle = this.toggle.bind(this);
  }
  addOrder() {

    let orderedDishes = this.state.orderedDishes;

    let newDish = {};
    orderedDishes.push(newDish);

    this.setState({ orderedDishes: orderedDishes });

  }
  toggle() {
    this.props.unSelectTable();
  }

  toggleDrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectCategory(category) {
    debugger;
    this.setState({ selectedCategory: category });
  }

  render() {


    debugger;



    return (
      <div>
        <Modal id="test" isOpen={this.props.managingOrder} toggle={this.toggle.bind(this)} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Manage Order for Table {this.props.managingOrder ? this.props.managingOrder.get('name') : ''}</ModalHeader>
          <ModalBody>

            {this.state.orderedDishes.map(() => {

              return <Dish />
            })}


          </ModalBody>
          <ModalFooter>

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop.bind(this)}>
              <DropdownToggle caret>{this.state.selectedCategory ? this.state.selectedCategory.get('name') : 'Category'}</DropdownToggle>
              <DropdownMenu>
                {this.props.menu.get('menu').map((category) => {

                  return <div>
                    <DropdownItem onClick={this.selectCategory.bind}>{category.get('category')}</DropdownItem>
                  </div>
                })}
              </DropdownMenu>
            </Dropdown>

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop.bind(this)}>
              <DropdownToggle caret>Category</DropdownToggle>
              <DropdownMenu>
                {this.state.selectedCategory && this.state.selectedCategory.get('dishes').map((dish) => {

                  return <div>
                    <DropdownItem>{dish.get('name')}</DropdownItem>
                  </div>
                })}
              </DropdownMenu>
            </Dropdown>



            <a onClick={this.addOrder.bind(this)} href="#" class="float-btn-add">
              <i class=" my-float">+</i>
            </a>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
