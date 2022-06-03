// https://github.com/nejcm/docz-theme-extended

import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import {Unsafe} from '../Unsafe';
import {TabsContext, useTabsContext} from './context';
import {TabPane, Tabs as TabList, Wrapper} from './styles';
import {Tab} from './tab';

const Pane = ({minHeight}) => {
  const {current} = useTabsContext();
  if(current) {
    const children = current.children;
    return <TabPane style={{minHeight}}><Unsafe>{children}</Unsafe></TabPane>
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

const Tabs = ({activeId, children, minHeight}) => {
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
        <Pane minHeight={minHeight}/>
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