import React from 'react';
import * as S from "./styles";

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import nexus from '../../assets/nexusplanet3.png';



function Footer() {
  return (
    <S.Container>
        <img src={nexus}></img>
        <span> Simplificando sua vida</span>
    </S.Container>

  )
}

export default Footer;
