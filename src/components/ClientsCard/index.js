import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from "./styles";

import TypeIcons from "../../utils/typeIcons";


function ClientsCard({ nome, type, description, phone, rua, bairro, numero, cidade, estado }) {

  return (
    <S.Container>
      <S.TopCard>
          <img src={TypeIcons[type]} alt="Icone da tarefa" />
          <h1>{nome}</h1>
          <h2><strong>Telefone:</strong></h2>
          <p>{phone}</p>
      </S.TopCard>
      <S.BottomCard>
          <p><strong>Endereço:</strong></p>
          <p>{rua + " Nº " + numero + ", " + bairro + ", " + cidade + " - " + estado}</p>
      </S.BottomCard>
    </S.Container>

  )
}

export default ClientsCard;
