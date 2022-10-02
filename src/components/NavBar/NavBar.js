import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { actions } from 'slices/app.slice'


function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar 
      style={{ textDecoration: 'none'}} {...args}>
        <NavbarBrand href="/">
          <img
            alt="nav logo"
            style={{ height: 75, marginBottom: '5px' }}
            src='https://cdn.discordapp.com/attachments/1025178974290194492/1026145251385147432/unknown.png'
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Workspaces/">
              <img
                alt="workspaces logo"
                style={{ height: 25, marginBottom: '6px'}}
                src='https://media.discordapp.net/attachments/1025178974290194492/1026150840718872576/home.png'
              />
              Workspaces
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">
              <img
                alt="teams logo"
                style={{ height: 25 }}
                src='https://cdn.discordapp.com/attachments/1025178974290194492/1026151786882535495/unknown.png'
              />
              Teams
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">
                <img
                  alt="communities logo"
                  style={{ height: 25 }}
                  src='https://cdn.discordapp.com/attachments/1025178974290194492/1026152676783829060/unknown.png'
                />
              Communities
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Workspaces/">
                <img
                  alt="communities logo"
                  style={{ height: 25 }}
                  src='https://cdn.discordapp.com/attachments/1025178974290194492/1026152886486446230/unknown.png'
                />
              Events
              </NavLink>
            </NavItem>
            <UncontrolledDropdown right nav inNavbar>
              <DropdownToggle nav caret>
                <img
                  alt="account img"
                  style={{ height: 35 }}
                  src='https://cdn.discordapp.com/attachments/1025178974290194492/1026153141743399012/unknown.png'
                />
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Profile Settings</DropdownItem>
                <DropdownItem>Manage Events</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => dispatch(actions.logout())}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
