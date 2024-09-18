import { urgencyRelation } from "../../../../../utils/@types/data/patient"
import * as S from "./styles"

const SacrSubPage = () => {
  const user = {
    classification: "Pouco Urgente",
    urgency: 3,
    allergy: [],
    meds: [],
    mainClaim: ["Dor de garganta"],
    flowSigns: ["Enxaqueca"],
    specialities: ["Enxaqueca"],
    gettedData: [
      "Frequência cardíaca",
      "Avaliação Sepse 1",
      "Régua de dor",
      "Temperatura: 36.0 ºC",
    ],
    attendment: "1164",
    discriminators: ["Evento recente"],
  }

  const renderList = (list: string[]) => {
    return (
      <S.DataList>
        {list.length === 0 ? (
          "-"
        ) : list.length === 1 ? (
          <span>{list}</span>
        ) : (
          list.map((d, k) => <span key={k}>{`- ${d}`}</span>)
        )}
      </S.DataList>
    )
  }

  return (
    <S.Subpage>
      <S.SubpageHead>
        <span className="title">Resumo de classificação de risco</span>
        <span>Protocolo MANCHESTER_V2_BR</span>
        <span>28/10/2022 18:30h</span>
      </S.SubpageHead>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Observação da classificação</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <span>{user.classification}</span>
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Prioridade</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <S.UrgencyIndicator $color={urgencyRelation[user.urgency]} />
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Medicamento</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>{renderList(user?.meds)}</S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Queixa principal</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>{renderList(user?.mainClaim)}</S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Observação</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <span>-</span>
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Alergia</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>{renderList(user?.allergy)}</S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Fluxograma Sintomas</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>{renderList(user?.flowSigns)}</S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Especialidades</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            {renderList(user?.specialities)}
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Sinais vitais lidos</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>{renderList(user?.gettedData)}</S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Atendimento</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <span>{user.attendment}</span>
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock $cols={4}>
          <S.FormBlockTitle>
            <span>Discriminador(es)</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            {renderList(user?.discriminators)}
          </S.FormBlockFields>
        </S.FormBlock>
      </S.FormLine>
    </S.Subpage>
  )
}

export default SacrSubPage
