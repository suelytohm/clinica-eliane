import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from "./styles";

import typeIcons from "../../utils/typeIcons";


function ClientsCard({ nome, type, description, phone, rua, bairro, numero, cidade, estado }) {

  return (
    <S.Container>
      <S.TopCard>
          <h1>{nome}</h1>
          <p><strong>Telefone:</strong></p>
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
