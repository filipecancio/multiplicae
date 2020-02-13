import React from 'react';

import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';

import { Error } from './styles';

function FieldHack({
  contentLabel,
  name,
  value,
  type = 'text',
  msgError,
  onChange
}) {
  return (
    <LabelHack>
      {contentLabel}
      <InputHack name={name} value={value} onChange={onChange} type={type} />
      <Error>{msgError}</Error>
    </LabelHack>
  );
}

export default FieldHack;