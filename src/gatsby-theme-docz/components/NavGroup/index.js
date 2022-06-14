/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useRef } from 'react'
import { useCurrentDoc } from 'docz'

import * as styles from './styles'
import { NavLink } from '~components/NavLink'
import { ChevronDown } from '~components/Icons'

const crypto = require('crypto')
const digest = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

const wipStyle = {opacity: 0.5};

export const NavGroup = ({ item, sidebarRef, nested }) => {
  const currentDoc = useCurrentDoc()
  const currentDocRef = useRef()
  const { name, menu } = item
  const [subheadingsVisible, setShowsubheadings] = useState(
    currentDoc.menu === name || currentDoc.submenu === name || nested
  )
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible)
  const submenus = {}
  const menus = [];
  if(menu) {
    let currentSubment;
    for(let i = 0; i < menu.length; i++) {
      const {submenu, ...m} = menu[i]
      m.name = m.displayName || m.name;
      if(submenu) currentSubment = submenu;
      if(submenu && !submenus[submenu]) {
        const s = {
          name: submenu,
          id: digest(submenu + Math.random()),
          menu: [m],
        };
        submenus[submenu] = s;
        menus.push(s);
      } else if(submenu) {
        submenus[submenu].menu.push(m);
      } else {
        if(!m.route) {
          m.route = `###`
          if(currentSubment) {
            submenus[currentSubment].menu.push(m);
            m.WIP = true;
          }
        } else {
          menus.push(m)
        }
      }
    }
  }
  return (
    <div sx={styles.wrapper} data-testid="nav-group">
      <div sx={styles.title} onClick={toggleSubheadings}>
        {item.name}
        <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
      </div>
      <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
        {menus &&
          subheadingsVisible &&
          menus.map(menu => {
            if (!menu.route && menu.menu) {
              // setShowsubheadings(true)
              return <NavGroup key={menu.id} item={menu} sidebarRef={sidebarRef} nested={true}/>
            }
            if (currentDoc.route === menu.route) {
              if(menu.WIP) {
                return (
                  <NavLink key={menu.id} item={menu} ref={currentDocRef} style={wipStyle}>
                    {`🕓 ${menu.name}`}
                  </NavLink>
                )
              }
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            if(menu.WIP) {
              return (
                <NavLink key={menu.id} item={menu} style={wipStyle}>
                  {`🕓 ${menu.name}`}
                </NavLink>
              )
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
      </div>
    </div>
  )
}
