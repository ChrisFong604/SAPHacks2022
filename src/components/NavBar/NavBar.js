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
// import { images } from 'theme'

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
            src='https://cdn.discordapp.com/attachments/1025178974290194492/1026145251385147432/unknown.png'
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Workspaces/">Workspaces</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">Communities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">Events</NavLink>
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
