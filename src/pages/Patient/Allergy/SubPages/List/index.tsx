import { useState } from "react"
import * as S from "./styles"

import { Field } from "../../../../../components/Field"

const ListSubPage = () => {
  const [form, setForm] = useState({
    status: "",
    substance: "",
    level: "",
    description: "",
    observation: "",
  })

  return (
    <S.Subpage>
      <S.SubpageTitle>Alergias</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Status da alergia</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <Field.Multiple
              options={[
                { key: "deny", name: "Nega" },
                { key: "unkown", name: "Desconhece" },
                { key: "have", name: "Inclusão" },
              ]}
              value={form.status}
              onChange={(val: any) => setForm((f) => ({ ...f, status: val }))}
            />
          </S.FormBlockFields>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Substancia</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <Field.Multiple
              options={[
                { key: "drug", name: "Medicamento" },
                { key: "food", name: "Alimento" },
                { key: "other", name: "Outros" },
              ]}
              value={form.substance}
              onChange={(val: any) =>
                setForm((f) => ({ ...f, substance: val }))
              }
            />
          </S.FormBlockFields>
        </S.FormBlock>

        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Severidade</span>
          </S.FormBlockTitle>
          <S.FormBlockFields>
            <Field.Multiple
              options={[
                { key: "serious", name: "Grave" },
                { key: "moderate", name: "Moderada" },
                { key: "mild", name: "Leve" },
                { key: "unknown", name: "Desconhecida" },
              ]}
              value={form.level}
              onChange={(val: any) => setForm((f) => ({ ...f, level: val }))}
            />
          </S.FormBlockFields>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            necessary={true}
            placeholder="Escreva aqui"
            label="Descrição"
            value={form.description}
            onChange={(val: any) =>
              setForm((f) => ({ ...f, description: val }))
            }
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            necessary={true}
            placeholder="Escreva aqui"
            label="Observação"
            value={form.observation}
            onChange={(val: any) =>
              setForm((f) => ({ ...f, observation: val }))
            }
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default ListSubPage
