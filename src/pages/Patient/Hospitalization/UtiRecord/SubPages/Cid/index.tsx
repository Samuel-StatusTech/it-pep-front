import * as S from "./styles"

import { Field } from "../../../../../../components/Field"
import { useState } from "react"
import { Icons } from "../../../../../../assets/icons/_index"

const TermsSubPage = () => {
  const [form, setForm] = useState({
    version: "",
    behavior: "",
    time: "",
    timeOption: "",
    status: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Diagnóstico</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Diagnóstico Primário</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Select
                placeholder="Selecione"
                label="Versão do diagnóstico"
                value={form.version}
                onChange={(val: any) => handleField("version", val)}
                options={[
                  { key: "op1", name: "Opção 1" },
                  { key: "op2", name: "Opção 2" },
                  { key: "op3", name: "Opção 3" },
                ]}
                gridSize={12}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Conduta"
                value={form.behavior}
                onChange={(val: any) => handleField("behavior", val)}
                gridSize={12}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Tempo da doença"
                value={form.time}
                onChange={(val: any) => handleField("time", val)}
                gridSize={3}
              />
              <Field.Select
                value={form.timeOption}
                onChange={(val: any) => handleField("timeOption", val)}
                options={[
                  { key: "op1", name: "Opção 1" },
                  { key: "op2", name: "Opção 2" },
                  { key: "op3", name: "Opção 3" },
                ]}
                gridSize={3}
              />
              <Field.Select
                value={form.status}
                onChange={(val: any) => handleField("status", val)}
                options={[
                  { key: "op1", name: "Opção 1" },
                  { key: "op2", name: "Opção 2" },
                  { key: "op3", name: "Opção 3" },
                ]}
                gridSize={6}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.Button>
          <span>Adicionar segundo Diagnóstico</span>
          <S.IconArea>
            <Icons.Plus />
          </S.IconArea>
        </S.Button>
      </S.FormLine>
    </S.Subpage>
  )
}

export default TermsSubPage
