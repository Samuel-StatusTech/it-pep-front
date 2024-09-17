import { useState } from "react"
import * as S from "./styles"

import { Field } from "../../../../../components/Field"

const RegisterSubPage = () => {
  const [form, setForm] = useState({
    // Id
    name: "",
    socialName: "",
    patientCode: "",
    blood: "",
    giver: "",
    birth: "",
    sex: "",
    color: "",
    mother: "",
    dad: "",
    // Docs
    same: "",
    identity: "",
    oe: "",
    dateOe: "",
    cpf: "",
    cns: "",
    cid: "",
    civil: "",
    partner: "",
    // Contact
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
    ddi: "",
    ddd: "",
    phone: "",
    ddiTele: "",
    dddTele: "",
    telephone: "",
    mail: "",
    mail2: "",
    // info
    convein: "",
    plan: "",
    subplan: "",
    tAverage: "",
    emergencyUn: "",
    // Profile
    workplace: "",
    job: "",
    class: "",
    scholar: "",
    nationality: "",
    naturality: "",
    religion: "",
  })

  return (
    <S.Subpage>
      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Identificação</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Nome"
                value={form.name}
                onChange={(val: any) => setForm((f) => ({ ...f, name: val }))}
                gridSize={6}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Nome Social"
                value={form.socialName}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, socialName: val }))
                }
                gridSize={6}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Cod. paciente"
                value={form.patientCode}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, patientCode: val }))
                }
                gridSize={2}
              />
              <Field.Select
                label="Tipo sanguíneo"
                value={form.blood}
                onChange={(val: any) => setForm((f) => ({ ...f, blood: val }))}
                options={[
                  { key: "Opção 1", name: "Opt 1" },
                  { key: "Opção 2", name: "Opt 2" },
                  { key: "Opção 3", name: "Opt 3" },
                ]}
                gridSize={2}
              />
              <Field.Select
                label="Doador"
                value={form.giver}
                onChange={(val: any) => setForm((f) => ({ ...f, giver: val }))}
                options={[
                  { key: "Opção 1", name: "Opt 1" },
                  { key: "Opção 2", name: "Opt 2" },
                  { key: "Opção 3", name: "Opt 3" },
                ]}
                gridSize={2}
              />
              <Field.Input
                placeholder="00-00-0000"
                label="Nascimento"
                value={form.birth}
                onChange={(val: any) => setForm((f) => ({ ...f, birth: val }))}
                gridSize={2}
              />
              <Field.Select
                label="Sexo"
                value={form.sex}
                onChange={(val: any) => setForm((f) => ({ ...f, sex: val }))}
                options={[
                  { key: "Opção 1", name: "Opt 1" },
                  { key: "Opção 2", name: "Opt 2" },
                  { key: "Opção 3", name: "Opt 3" },
                ]}
                gridSize={2}
              />
              <Field.Select
                label="Cor"
                value={form.color}
                onChange={(val: any) => setForm((f) => ({ ...f, color: val }))}
                options={[
                  { key: "Opção 1", name: "Opt 1" },
                  { key: "Opção 2", name: "Opt 2" },
                  { key: "Opção 3", name: "Opt 3" },
                ]}
                gridSize={2}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Nome da Mãe"
                value={form.mother}
                onChange={(val: any) => setForm((f) => ({ ...f, mother: val }))}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Nome do Pai"
                value={form.dad}
                onChange={(val: any) => setForm((f) => ({ ...f, dad: val }))}
                gridSize={2}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Documentos</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Matrícula SAME"
                value={form.same}
                onChange={(val: any) => setForm((f) => ({ ...f, same: val }))}
                gridSize={3}
              />
              <Field.Input
                placeholder="0.000.000"
                label="Identidade"
                value={form.identity}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, identity: val }))
                }
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Órgão Emissor"
                value={form.oe}
                onChange={(val: any) => setForm((f) => ({ ...f, oe: val }))}
                gridSize={3}
              />
              <Field.Input
                placeholder="00-00-0000"
                label="Data Emissão"
                value={form.dateOe}
                onChange={(val: any) => setForm((f) => ({ ...f, dateOe: val }))}
                gridSize={2}
              />
              <Field.Input
                placeholder="000.000.000-00"
                label="CPF"
                value={form.cpf}
                onChange={(val: any) => setForm((f) => ({ ...f, cpf: val }))}
                gridSize={2}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="000.000.000-00"
                label="Carteira Nacional de Saúde"
                value={form.cns}
                onChange={(val: any) => setForm((f) => ({ ...f, cns: val }))}
                gridSize={3}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Cod Identificação"
                value={form.cid}
                onChange={(val: any) => setForm((f) => ({ ...f, cid: val }))}
                gridSize={2}
              />
              <Field.Select
                label="Estado Civil"
                value={form.civil}
                onChange={(val: any) => setForm((f) => ({ ...f, civil: val }))}
                options={[
                  { key: "Opção 1", name: "Opt 1" },
                  { key: "Opção 2", name: "Opt 2" },
                  { key: "Opção 3", name: "Opt 3" },
                ]}
                gridSize={3}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Nome do Cônjuge"
                value={form.partner}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, partner: val }))
                }
                gridSize={4}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Contato</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Input
                placeholder="00000-000"
                label="CEP"
                value={form.cep}
                onChange={(val: any) => setForm((f) => ({ ...f, cep: val }))}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Endereço"
                value={form.address}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, address: val }))
                }
                gridSize={6}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Número"
                value={form.number}
                onChange={(val: any) => setForm((f) => ({ ...f, number: val }))}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Complemento"
                value={form.complement}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, complement: val }))
                }
                gridSize={2}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Bairro"
                value={form.neighborhood}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, neighborhood: val }))
                }
                gridSize={5}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Cidade"
                value={form.city}
                onChange={(val: any) => setForm((f) => ({ ...f, city: val }))}
                gridSize={5}
              />
              <Field.Select
                label="UF"
                value={form.uf}
                onChange={(val: any) => setForm((f) => ({ ...f, uf: val }))}
                options={[]}
                gridSize={2}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Select
                label="DDI"
                value={form.ddi}
                onChange={(val: any) => setForm((f) => ({ ...f, ddi: val }))}
                options={[]}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="DDD"
                value={form.ddd}
                onChange={(val: any) => setForm((f) => ({ ...f, ddd: val }))}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Celular"
                value={form.phone}
                onChange={(val: any) => setForm((f) => ({ ...f, phone: val }))}
                gridSize={2}
              />
              <Field.Select
                label="DDI"
                value={form.ddiTele}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, ddiTele: val }))
                }
                options={[]}
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="DDD"
                value={form.dddTele}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, dddTele: val }))
                }
                gridSize={2}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Celular"
                value={form.telephone}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, telephone: val }))
                }
                gridSize={2}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Dados</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Select
                label="Convênio"
                value={form.convein}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, convein: val }))
                }
                options={[]}
                gridSize={6}
              />
              <Field.Select
                label="Plano"
                value={form.plan}
                onChange={(val: any) => setForm((f) => ({ ...f, plan: val }))}
                options={[]}
                gridSize={6}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Select
                label="UF"
                value={form.uf}
                onChange={(val: any) => setForm((f) => ({ ...f, uf: val }))}
                options={[]}
                gridSize={6}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Média de transferência"
                value={form.tAverage}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, tAverage: val }))
                }
                gridSize={3}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Escolaridade"
                value={form.emergencyUn}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, emergencyUn: val }))
                }
                gridSize={3}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlock>
          <S.FormBlockTitle>
            <span>Perfil</span>
          </S.FormBlockTitle>
          <S.FBLines>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="local de trabalho"
                value={form.workplace}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, workplace: val }))
                }
                gridSize={3}
              />
              <Field.Select
                label="Profissão"
                value={form.job}
                onChange={(val: any) => setForm((f) => ({ ...f, job: val }))}
                options={[]}
                gridSize={3}
              />
              <Field.Select
                label="Classe econômica"
                value={form.class}
                onChange={(val: any) => setForm((f) => ({ ...f, class: val }))}
                options={[]}
                gridSize={3}
              />
              <Field.Select
                label="Escolaridade"
                value={form.scholar}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, scholar: val }))
                }
                options={[]}
                gridSize={3}
              />
            </S.FormBlockFields>
            <S.FormBlockFields>
              <Field.Input
                placeholder="Escreva aqui"
                label="Nacionalidade"
                value={form.nationality}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, nationality: val }))
                }
                gridSize={3}
              />
              <Field.Input
                placeholder="Escreva aqui"
                label="Naturalidade"
                value={form.naturality}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, naturality: val }))
                }
                gridSize={3}
              />
              <Field.Select
                label="Religião"
                value={form.religion}
                onChange={(val: any) =>
                  setForm((f) => ({ ...f, religion: val }))
                }
                options={[]}
                gridSize={3}
              />
            </S.FormBlockFields>
          </S.FBLines>
        </S.FormBlock>
      </S.FormLine>
    </S.Subpage>
  )
}

export default RegisterSubPage
