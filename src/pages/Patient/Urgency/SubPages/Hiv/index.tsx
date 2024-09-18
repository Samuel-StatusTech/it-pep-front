import * as S from "./styles"

import { Icons } from "../../../../../assets/icons/_index"
import { Field } from "../../../../../components/Field"
import { useState } from "react"
import { Dropdown } from "../../../../../components/Dropdown"

const HivSubPage = () => {
  const [refDate, setRefDate] = useState(new Date())
  const [docDate, setDocDate] = useState(new Date())

  const handleDate = (from: "ref" | "doc", v: any) => {
    console.log(new Date(v))

    if (from === "ref") setRefDate(new Date(v))
    if (from === "doc") setDocDate(new Date(v))
  }

  return (
    <S.Subpage>
      <S.SPHead>
        <S.SPTitle>Informações do documento clínico</S.SPTitle>
        <S.SPSubTitle>
          Preencha as Informações necessárias para a criação do documento
          clínico
        </S.SPSubTitle>
      </S.SPHead>

      <S.DatesArea>
        <S.DataGroup>
          <S.DGTitle>Data de referência</S.DGTitle>
          <S.DGInputs>
            <Field.BasicDate
              value={refDate}
              onChange={(v: any) => handleDate("ref", v)}
            />
            <Field.BasicTime
              value={refDate}
              onChange={(v: any) => handleDate("ref", v)}
            />
          </S.DGInputs>
        </S.DataGroup>
        <S.DataGroup>
          <S.DGTitle>Data do documento</S.DGTitle>
          <S.DGInputs>
            <Field.BasicDate
              value={docDate}
              onChange={(v: any) => handleDate("doc", v)}
            />
            <Field.BasicTime
              value={docDate}
              onChange={(v: any) => handleDate("doc", v)}
            />
          </S.DGInputs>
        </S.DataGroup>
      </S.DatesArea>

      <S.DataGroup $fullsize={true}>
        <S.DGTitle>Descrição</S.DGTitle>
        <S.DGInputs>
          <S.SearchArea>
            <Icons.Search />
            <S.Input placeholder="Pesquisa" />
          </S.SearchArea>
        </S.DGInputs>
      </S.DataGroup>

      <Dropdown.Sacr
        title={"Protocolo Covid"}
        data={[
          { info: "Lorem Ipsum", value: "dolor sit amet" },
          { info: "Lorem impsum dolor sit amet" },
        ]}
      />

      <Dropdown.Sacr
        title={"Protocolo de controle glicêmico"}
        data={[
          { info: "Lorem Ipsum", value: "dolor sit amet" },
          { info: "Lorem impsum dolor sit amet" },
        ]}
      />

      <Dropdown.Sacr
        title={"Protocolo sepse grave adultos"}
        data={[
          { info: "Lorem Ipsum", value: "dolor sit amet" },
          { info: "Lorem impsum dolor sit amet" },
        ]}
      />

      <Dropdown.Sacr
        title={"Protocolo tex cirurgico"}
        data={[
          { info: "Lorem Ipsum", value: "dolor sit amet" },
          { info: "Lorem impsum dolor sit amet" },
        ]}
      />

      <Dropdown.Sacr
        title={"Protocolo tev clínico"}
        data={[
          { info: "Lorem Ipsum", value: "dolor sit amet" },
          { info: "Lorem impsum dolor sit amet" },
        ]}
      />

      <S.Footer>
        <S.Button>
          <Icons.Check />
        </S.Button>
      </S.Footer>
    </S.Subpage>
  )
}

export default HivSubPage
