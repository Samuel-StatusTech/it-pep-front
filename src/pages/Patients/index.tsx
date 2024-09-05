import { useEffect, useRef, useState } from "react"
import { Icons } from "../../assets/icons/_index"
import Container from "../../components/Container"
import * as S from "./styles"

import Table from "./tables"
import Header from "../../components/Header"
import { patientsMock } from "./patients"

const PatientsPage = () => {
  const [indicatorPos, setIndicatorPos] = useState({ width: 0, left: 0 })
  const [origin, setOrigin] = useState("all")
  const [tag, setTag] = useState("bed")
  const [search, setSearch] = useState("")
  const [data] = useState(patientsMock)

  const allOrigin = useRef<HTMLDivElement>(null)

  const handleOrigin = (or: string, el: HTMLDivElement) => {
    const parentRects = el.parentElement?.getBoundingClientRect() as DOMRect
    const rects = el.getBoundingClientRect()

    setIndicatorPos({
      left: rects.left - parentRects.left,
      width: el.clientWidth,
    })
    setOrigin(or)
  }

  useEffect(() => {
    if (allOrigin.current) handleOrigin("all", allOrigin.current)
  }, [allOrigin])

  return (
    <S.Page>
      <Header.Patients />

      <Container>
        <S.Main>
          <S.TableControls>
            <S.DataFrom>
              <S.DataOrigin
                ref={allOrigin}
                onClick={(el) => handleOrigin("all", el.currentTarget)}
                $active={origin === "all"}
              >
                Todos
              </S.DataOrigin>
              <S.DataOrigin
                onClick={(el) => handleOrigin("uti", el.currentTarget)}
                $active={origin === "uti"}
              >
                UTI
              </S.DataOrigin>
              <S.DataOrigin
                onClick={(el) => handleOrigin("emergency", el.currentTarget)}
                $active={origin === "emergency"}
              >
                Emergência
              </S.DataOrigin>
              <S.DataOrigin
                onClick={(el) => handleOrigin("surgery", el.currentTarget)}
                $active={origin === "surgery"}
              >
                Centro Cirúrgico
              </S.DataOrigin>

              <S.Indicator
                $width={indicatorPos.width}
                $left={indicatorPos.left}
              />
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
                <S.Input
                  value={search}
                  onChange={(ev) => setSearch(ev.target.value)}
                  placeholder="Pesquisar"
                />
              </S.SearchArea>
            </S.DataFilters>
          </S.TableControls>
          <S.TableArea>
            <Table
              data={data.filter((i) => {
                let show = true

                if (origin !== "all") show = i.origin === origin
                if (show && !!search)
                  show = Object.entries(i)
                    .map((entry) => entry[1])
                    .some((val) =>
                      String(val).toLowerCase().includes(search.toLowerCase())
                    )

                return show
              })}
            />
          </S.TableArea>
        </S.Main>
      </Container>
    </S.Page>
  )
}

export default PatientsPage
