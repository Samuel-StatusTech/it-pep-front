import { useState } from "react"
import * as S from "./styles"
import { Icons } from "../../assets/icons/_index"
import { masks } from "../../utils/masks"
import { useNavigate } from "react-router-dom"

const companiesList = [
  { id: "id1", name: "Santa Joana" },
  { id: "id2", name: "Português" },
  { id: "id3", name: "Esperança" },
]

const LoginPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    cooperator: "",
    company: "",
    password: "",
  })

  const [search, setSearch] = useState("")
  const [showingSelectDropdown, setShowingSelectDropdown] = useState(false)
  const [passVisible, setPassVisibility] = useState(false)

  const handlePickCompany = (companyId: string) => {
    setForm((f) => ({ ...f, company: companyId }))
    setShowingSelectDropdown(false)
  }

  const togglePassVisibility = () => {
    setPassVisibility(!passVisible)
  }

  const handleSubmit = () => {
    if (form.company && form.cooperator && form.password) {
      navigate("/patients")
    }
  }

  return (
    <S.Page>
      <S.ContentArea>
        <Icons.LogoUnicolor />
        <S.FormCard>
          <S.FormTitle>Login</S.FormTitle>
          <S.FormContent>
            <S.FormFields>
              <S.Field>
                <S.Label>Colaborador</S.Label>
                <S.FieldArea>
                  <S.Input
                    autoComplete="off"
                    value={form.cooperator}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        cooperator: masks.cpf(e.target.value),
                      }))
                    }
                    placeholder="123.456.789-00"
                    type="text"
                  />
                </S.FieldArea>
              </S.Field>
              <S.Field>
                <S.Label>Empresa</S.Label>
                <S.Select>
                  <S.SelectMain
                    onClick={() =>
                      setShowingSelectDropdown(!showingSelectDropdown)
                    }
                  >
                    <span>
                      {form.company
                        ? companiesList.find((c) => c.id === form.company)?.name
                        : "Digite o nome da empresa"}
                    </span>
                    <Icons.Arrow
                      className={showingSelectDropdown ? "turned" : ""}
                    />
                  </S.SelectMain>
                  <S.Dropdown $showing={showingSelectDropdown}>
                    <S.DropdownSearchArea>
                      <Icons.Search />
                      <S.DropdownInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquisar..."
                        type="text"
                      />
                    </S.DropdownSearchArea>
                    <S.DropdownListArea>
                      <S.DropdownList>
                        {companiesList
                          .filter((c) =>
                            c.name.toLowerCase().includes(search.toLowerCase())
                          )
                          .map((c, k) => (
                            <S.DropdownItem
                              key={k}
                              onClick={() => handlePickCompany(c.id)}
                            >
                              <span>{c.name}</span>
                            </S.DropdownItem>
                          ))}
                      </S.DropdownList>
                    </S.DropdownListArea>
                  </S.Dropdown>
                </S.Select>
              </S.Field>
              <S.Field>
                <S.Label>Senha</S.Label>
                <S.FieldArea>
                  <S.Input
                    autoComplete="off"
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                    placeholder="Digite sua senha"
                    type={passVisible ? "text" : "password"}
                  />
                  <Icons.HidePass onClick={togglePassVisibility} />
                </S.FieldArea>
              </S.Field>
            </S.FormFields>
            <S.FormSubmit onClick={handleSubmit}>
              <S.Button>Entrar</S.Button>
            </S.FormSubmit>
          </S.FormContent>
        </S.FormCard>
      </S.ContentArea>
    </S.Page>
  )
}

export default LoginPage
