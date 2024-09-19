import { useState } from "react"
import * as S from "./styles"

import Form from "../../../../../components/Form"
import { Field } from "../../../../../components/Field"

const FieldWrapper = ({ children, gridSize }: any) => {
  return <S.FieldWrapper $grid={gridSize}>{children}</S.FieldWrapper>
}

const DescriptionSubPage = () => {
  const [form, setForm] = useState({
    reason: "",
    date: new Date(),
    signs: "",
    doc1: "",
    doc2: "",
    doc3: "",
    doc4: "",
    doc5: "",
    doc6: "",
    doc7: "",
    doc8: "",
    diag1: "",
    diag2: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Subdescrição cirúrgica</S.SubpageTitle>

      <Form
        lines={[
          {
            blocks: [
              {
                fieldLines: [
                  {
                    fields: [
                      <Field.Multiple
                        label="Lorem Impsum"
                        value={form.reason}
                        onChange={(val: any) => handleField("reason", val)}
                        options={[
                          { key: "keyk1", name: "Lorem ipsum 1" },
                          { key: "keyk2", name: "Lorem ipsum 2" },
                        ]}
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
                title: "Equipe médica",
                fieldLines: [
                  {
                    fields: [
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc1}
                          onChange={(val: any) => handleField("doc1", val)}
                          gridSize={6}
                        />
                      </FieldWrapper>,
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc2}
                          onChange={(val: any) => handleField("doc2", val)}
                        />
                      </FieldWrapper>,
                    ],
                  },
                  {
                    fields: [
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc3}
                          onChange={(val: any) => handleField("doc3", val)}
                          gridSize={6}
                        />
                      </FieldWrapper>,
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc4}
                          onChange={(val: any) => handleField("doc4", val)}
                        />
                      </FieldWrapper>,
                    ],
                  },
                  {
                    fields: [
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc5}
                          onChange={(val: any) => handleField("doc5", val)}
                          gridSize={6}
                        />
                      </FieldWrapper>,
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc6}
                          onChange={(val: any) => handleField("doc6", val)}
                        />
                      </FieldWrapper>,
                    ],
                  },
                  {
                    fields: [
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc7}
                          onChange={(val: any) => handleField("doc7", val)}
                          gridSize={6}
                        />
                      </FieldWrapper>,
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.doc8}
                          onChange={(val: any) => handleField("doc8", val)}
                        />
                      </FieldWrapper>,
                    ],
                  },
                ],
              },
            ],
          },
          {
            blocks: [
              {
                title: "Diagnóstico Lorem",
                fieldLines: [
                  {
                    fields: [
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.diag1}
                          onChange={(val: any) => handleField("diag1", val)}
                          gridSize={6}
                        />
                      </FieldWrapper>,
                      <FieldWrapper gridSize={6}>
                        <Field.Input
                          placeholder="Escreva aqui"
                          label="Lorem Impsum"
                          value={form.diag2}
                          onChange={(val: any) => handleField("diag2", val)}
                        />
                      </FieldWrapper>,
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

export default DescriptionSubPage
