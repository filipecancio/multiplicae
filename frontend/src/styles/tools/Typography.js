import { css } from 'styled-components';

const weight = {
  regular: 400,
  bold: 7000
};

export const _h1 = css`
  font-size: 20px;
  line-height: 23px;
  font-weight: ${weight.bold};
`;

export const _body1 = css`
  font-size: 17px;
  line-height: 20px;
  font-weight: ${weight.regular};
`;
