import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from "./styles";

import iconDefault from "../../assets/default2.png";



function TaskCard({ type, title, when, valor, done }) {

  const date = useMemo(() => {
    format(new Date(when), 'dd/MM/yyyy');
  });

  const hour = useMemo(() => {
    format(new Date(when), 'HH:mm');
  });


  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Icone da tarefa" />
        <h3>{title}</h3>
        <span>R$ {valor} - {type}</span>
        
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>

  )
}

export default TaskCard;
