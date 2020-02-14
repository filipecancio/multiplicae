import React from 'react';

import { Area,Content,Border,Progress,Center,Icon,Title } from './styles';

function StartTree(props) {
  var money ="M55.48 53.9C53.21 53.31 52.48 52.7 52.48 51.75C52.48 50.66 53.49 49.9 55.18 49.9C56.96 49.9 57.62 50.75 57.68 52H59.89C59.82 50.28 58.77 48.7 56.68 48.19V46H53.68V48.16C51.74 48.58 50.18 49.84 50.18 51.77C50.18 54.08 52.09 55.23 54.88 55.9C57.38 56.5 57.88 57.38 57.88 58.31C57.88 59 57.39 60.1 55.18 60.1C53.12 60.1 52.31 59.18 52.2 58H50C50.12 60.19 51.76 61.42 53.68 61.83V64H56.68V61.85C58.63 61.48 60.18 60.35 60.18 58.3C60.18 55.46 57.75 54.49 55.48 53.9Z";
  return (
    <Area{...props}>
    <Title>{props.title}</Title>
      <Content>
        <Border />
        <Progress {...props} />
        <Center />
        <Icon d={money}/>
      </Content>

    </Area>
  );
}

export default StartTree;
