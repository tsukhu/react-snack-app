import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';


import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import { action } from '@storybook/addon-actions';
import SideDrawer from '../src/components/Navigation/SideDrawer/SideDrawer';

storiesOf('Layout', module)
  .addDecorator(StoryRouter())
  .add('Toolbar with auth true', () => (
    <Toolbar drawToggleClicked={action('clicked')} isAuth={true} />
  ))
  .add('SideBar with auth true', () => (
    <SideDrawer closed={action('clicked')} open={true} isAuth={true} />
  ));
