import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from "./styles";

import typeIcons from "../../utils/typeIcons";


function TaskCard({ type, title, when, valor, done, description }) {

  const date = useMemo(() => 
    format(new Date(when), 'dd/MM/yyyy')
  );

  const hour = useMemo(() => 
    format(new Date(when), 'HH:mm')
  );

  const valorConvertido = useMemo(() =>
    parseFloat(valor).toFixed(2)
  );


  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={typeIcons[type]} alt="Icone da tarefa" />
        <h3>{title}</h3>
        <span>{description}</span>
        <span>Agendado para: {date}</span>        
      </S.TopCard>
      <S.BottomCard>
        <h4>{hour} hrs</h4>
        <h4>Valor: R$ {valorConvertido}</h4>
      </S.BottomCard>
    </S.Container>

  )
}

export default TaskCard;
