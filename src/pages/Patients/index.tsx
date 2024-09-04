import { useState } from "react"
import { Icons } from "../../assets/icons/_index"
import Container from "../../components/Container"
import * as S from "./styles"

import Table from "./tables"
import Header from "../../components/Header"

const PatientsPage = () => {
  const [origin, setOrigin] = useState("all")
  const [tag, setTag] = useState("bed")

  return (
    <S.Page>
      <Header.Patients />

      <Container>
        <S.Main>
          <S.TableControls>
            <S.DataFrom>
              <S.DataOrigin
                onClick={() => setOrigin("all")}
                $active={origin === "all"}
              >
                Todos
              </S.DataOrigin>
              <S.DataOrigin
                onClick={() => setOrigin("uti")}
                $active={origin === "uti"}
              >
                UTI
              </S.DataOrigin>
              <S.DataOrigin
                onClick={() => setOrigin("emergency")}
                $active={origin === "emergency"}
              >
                Emergência
              </S.DataOrigin>
              <S.DataOrigin
                onClick={() => setOrigin("surgical")}
                $active={origin === "surgical"}
              >
                Centro Cirúrgico
              </S.DataOrigin>

              <S.Indicator $width={54} $left={0} />
            </S.DataFrom>
            <S.DataFilters>
              <S.TagFilters>
                <S.TagFilter
                  onClick={() => {
                    setTag("bed")
                  }}
                  $active={tag === "bed"}
                >
                  <span>Leito</span>
                </S.TagFilter>
                <S.TagFilter
                  onClick={() => {
                    setTag("status")
                  }}
                  $active={tag === "status"}
                >
                  <span>Status</span>
                </S.TagFilter>
                <S.TagFilter
                  onClick={() => {
                    setTag("plan")
                  }}
                  $active={tag === "plan"}
                >
                  <span>Plano</span>
                </S.TagFilter>
              </S.TagFilters>
              <S.SearchArea>
                <Icons.Search />
                <S.Input placeholder="Pesquisar" />
              </S.SearchArea>
            </S.DataFilters>
          </S.TableControls>
          <S.TableArea>
            <Table />
          </S.TableArea>
        </S.Main>
      </Container>
    </S.Page>
  )
}

export default PatientsPage
