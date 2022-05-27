// https://github.com/nejcm/docz-theme-extended

import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import {TabsContext, useTabsContext} from './context';
import {TabPane, Tabs as TabList, Wrapper} from './styles';
import {Tab} from './tab';

const self = typeof window !== 'undefined' ? window : global;
if(!self.__list) {
  self.__list = (items) => {
    const ret = items.map(([name, desc, link, author]) => {
      return `<dt><h3><a href="${link}" target="_blank">${name}</a></h3></dt>
      <dd><a href="${link}" target="_blank">${desc}${author?`<author>作者：${author}</author>`:''}</a></dd>`
    }).join('');
    return `<dl class="jj-articles">${ret}</dl>`;
  }
}

const Pane = () => {
  const {current} = useTabsContext();
  if(current) {
    const children = current.children;
    if(typeof children === 'string') {
      return <TabPane dangerouslySetInnerHTML={{__html: children}}></TabPane>
    }
    return <TabPane>{children}</TabPane>
  }
  return null;
};
Pane.propTypes = {
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Children = React.memo(({children}) => {
  return <TabList>{children}</TabList>;
});
Children.propTypes = {
  children: PropTypes.node.isRequired,
};

const Tabs = ({activeId, children}) => {
  const [current, setCurrent] = useState(undefined);

  const value = useMemo(
    () => ({
      activeId,
      current,
      setCurrent,
    }),
    [current, activeId],
  );

  return (
    <TabsContext.Provider value={value}>
      <Wrapper>
        <Children children={children} />
        <Pane />
      </Wrapper>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  /**
   * Active tab key
   */
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Tabs
   */
  children: PropTypes.node.isRequired,
};
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;
export {Tabs};