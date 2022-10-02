import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { images } from 'theme'

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar style={{ textDecoration: 'none' }} {...args}>
        <NavbarBrand href="/">
          <img
            alt="nav logo"
            style={{ height: 75, marginBottom: '25px' }}
            src={images.cosync}
          />
          CoSync
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/app/workspaces/">Workspaces</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/teams/">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/communities">Communities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/events">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown right nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Profile Settings</DropdownItem>
                <DropdownItem>Manage Events</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
