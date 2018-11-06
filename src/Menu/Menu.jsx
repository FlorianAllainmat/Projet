import React from 'react';
import { Nav, NavItem, NavLink, Row } from 'reactstrap';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Nav>
            <p>Antoine Dupond</p>
            <Row>
                <NavItem>
                    <NavLink href="#">Donnée Génétique</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Donnée Standard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Historique Nationnal</NavLink>
                </NavItem>
            </Row>
        </Nav>
      </div>
    );
  }
}