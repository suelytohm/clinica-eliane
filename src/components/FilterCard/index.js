import React from 'react';
import * as S from "./styles";

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import filterCard from '../../assets/filter.png';


function FilterCard({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={filterCard} alt="filter" />
      <span>{title}</span>
    </S.Container>

  )
}

export default FilterCard;
