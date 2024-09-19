import * as S from "./styles"

import { Field } from "../../../../../components/Field"
import { useState } from "react"

const TermsSubPage = () => {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    doctor: "João Francisco",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>
        Termo de consentimento livre e esclarecido
      </S.SubpageTitle>

      <S.Texts>
        <S.Text>
          <span>
            O termo descrito abaixo tem o objetivo de informar e esclarecer
            dúvidas quanto ao(s) exames(s)/ procedimento(s) a ser(em)
            realizado(s), visando o cumprimento ético e legal quanto aos riscos
            do(s) paciente ou responsável
          </span>
        </S.Text>

        <S.Text>
          <span>Eu,</span>
          <S.InputWrapper $width="420px">
            <Field.Input
              placeholder="Escreva aqui"
              label="Nome"
              value={form.name}
              onChange={(val) => handleField("name", val)}
              necessary={true}
            />
          </S.InputWrapper>
          <span>portador do CPF</span>
          <S.InputWrapper $width="220px">
            <Field.Input
              placeholder="Escreva aqui"
              label="CPF"
              value={form.cpf}
              onChange={(val) => handleField("cpf", val)}
              necessary={true}
            />
          </S.InputWrapper>
          <span>lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </S.Text>

        <S.Text>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. DR
          </span>
          <S.InputWrapper>
            <Field.Basic
              value={form.doctor}
              onChange={(val) => handleField("doctor", val)}
              width="420px"
            />
          </S.InputWrapper>
          <span>
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
            elit sed risus. Maecenas eget condimentum{" "}
          </span>
        </S.Text>
        <S.Text>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus.
          </span>
        </S.Text>
      </S.Texts>
    </S.Subpage>
  )
}

export default TermsSubPage
