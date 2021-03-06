import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderHack from '../../containers/HeaderHack';
import { Main, Content } from './styles';
import FormDream from '../../containers/FormDream';
import FormDreamMoney from '../../containers/FormDreamMoney';
import FormMonthMoney from '../../containers/FormMonthMoney';
import FormDoYouInvest from '../../containers/FormDoYouInvest';
import SuccessSurvey from '../../containers/SuccessSurvey';
import PerfilInvestor from '../../containers/PerfilInvestor';

function Survey() {
  const { question } = useParams();

  function whatShowForm() {
    const questions = [
      <FormDream nextPage="/survey/1" />,
      <FormDreamMoney nextPage="/survey/2" />,
      <FormMonthMoney nextPage="/survey/3" />,
      <FormDoYouInvest nextPage="/survey/4" />,
      <SuccessSurvey nextPage="/survey/5" />,
      <PerfilInvestor nextPage="/tree" />
    ];

    return questions[question];
  }

  return (
    <Main>
      <HeaderHack />
      <Content>{whatShowForm()}</Content>
    </Main>
  );
}

export default Survey;
