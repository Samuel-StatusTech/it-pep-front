import { useState } from "react"
import * as S from "./styles"

import { Field } from "../../../../../components/Field"
import { Icons } from "../../../../../assets/icons/_index"

const AmbulatorySubPage = () => {
  const [form, setForm] = useState({
    lorem1: "",
    lorem2: "",
    lorem3: "",
    lorem4: "",
    lorem5: "",
    lorem6: "",
    lorem7: "",
    lorem8: "",
    lorem9: "",
    lorem10: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageHead>
        <S.LogoArea>
          <Icons.RedCross />
          <span>HEMOPE</span>
        </S.LogoArea>

        <Icons.Print />
      </S.SubpageHead>

      <S.SubpageTitle>SOLICITAÇÃO DE TRANSFUSÃO DE SANGUE</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Basic
            label={"Lorem 1"}
            value={form.lorem1}
            onChange={(val: any) => handleField("lorem1", val)}
            gridSize={8}
          />
          <Field.Basic
            label={"Lorem 2"}
            value={form.lorem2}
            onChange={(val: any) => handleField("lorem2", val)}
            gridSize={4}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.Basic
            label={"Lorem 3"}
            value={form.lorem3}
            onChange={(val: any) => handleField("lorem3", val)}
            gridSize={4}
          />
          <Field.Basic
            label={"Lorem 4"}
            value={form.lorem4}
            onChange={(val: any) => handleField("lorem4", val)}
            gridSize={8}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Basic
            label={"Lorem 5"}
            value={form.lorem5}
            onChange={(val: any) => handleField("lorem5", val)}
            gridSize={8}
          />
          <Field.Basic
            label={"Lorem 6"}
            value={form.lorem6}
            onChange={(val: any) => handleField("lorem6", val)}
            gridSize={4}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.Basic
            label={"Lorem 7"}
            value={form.lorem7}
            onChange={(val: any) => handleField("lorem7", val)}
            gridSize={4}
          />
          <Field.Basic
            label={"Lorem 8"}
            value={form.lorem8}
            onChange={(val: any) => handleField("lorem8", val)}
            gridSize={8}
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default AmbulatorySubPage
