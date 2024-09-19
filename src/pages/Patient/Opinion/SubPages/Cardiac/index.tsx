import { useState } from "react"
import * as S from "./styles"

import Form from "../../../../../components/Form"
import { Field } from "../../../../../components/Field"

const CardiacSubPage = () => {
  const [form, setForm] = useState({
    reason: "",
    date: new Date(),
    signs: "",
    overall1: "",
    overall2: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Parecer</S.SubpageTitle>

      <Form
        lines={[
          {
            blocks: [
              {
                fieldLines: [
                  {
                    fields: [
                      <Field.Input
                        placeholder="Escreva aqui"
                        label="Motivo do parecer"
                        value={form.reason}
                        onChange={(val: any) => handleField("reason", val)}
                        gridSize={10}
                      />,
                      <Field.Date
                        label="Data"
                        value={form.date}
                        onChange={(val: any) => handleField("date", val)}
                        gridSize={2}
                      />,
                    ],
                  },
                  {
                    fields: [
                      <Field.TextArea
                        placeholder="Escreva aqui"
                        label="Sintomas"
                        value={form.signs}
                        onChange={(val: any) => handleField("signs", val)}
                        gridSize={12}
                      />,
                    ],
                  },
                ],
              },
            ],
          },
          {
            blocks: [
              {
                title: "Exame Físico",
                fieldLines: [
                  {
                    fields: [
                      <Field.Multiple
                        label="Estado geral"
                        value={form.overall1}
                        onChange={(val: any) => handleField("overall1", val)}
                        options={[
                          { key: "opt1", name: "Bom" },
                          { key: "opt2", name: "Regular" },
                          { key: "opt3", name: "Grave" },
                        ]}
                      />,
                    ],
                  },
                  {
                    fields: [
                      <Field.Multiple
                        label="Estado geral"
                        value={form.overall1}
                        onChange={(val: any) => handleField("overall1", val)}
                        options={[
                          { key: "opt1", name: "Bom" },
                          { key: "opt2", name: "Regular" },
                          { key: "opt3", name: "Grave" },
                        ]}
                      />,
                      <Field.Multiple
                        label="Estado geral"
                        value={form.overall2}
                        onChange={(val: any) => handleField("overall2", val)}
                        options={[
                          { key: "opt1", name: "Bom" },
                          { key: "opt2", name: "Regular" },
                          { key: "opt3", name: "Grave" },
                        ]}
                      />,
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </S.Subpage>
  )
}

export default CardiacSubPage
