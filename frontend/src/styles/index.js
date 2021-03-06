import React from 'react';

import Colors from './settings/Colors';
import Icons from './settings/Icons';
import Gaps from './settings/Gaps';
import Radius from './settings/Radius';
import Size from './settings/Size';
import Reset from './generic/Reset';
import Base from './elements/Base';
import Form from './elements/Form';

function Styles() {
  return (
    <>
      <Colors />
      <Icons />
      <Gaps />
      <Radius />
      <Size />
      <Reset />
      <Base />
      <Form />
    </>
  );
}

export default Styles;
