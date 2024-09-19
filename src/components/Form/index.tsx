import * as S from "./styles"

type Props = {
  lines: TLine[]
}

type TLine = {
  blocks: TBlock[]
}

type TBlock = {
  title?: string
  fieldLines: TFieldLine[]
}

type TFieldLine = {
  fields: JSX.Element[]
  columns?: number
}

const Form = ({ lines }: Props) => {
  const content = lines.map((line, lk) => (
    <S.FormLine key={lk}>
      {line.blocks.map((block, bk) => (
        <S.FormBlock key={bk}>
          {block.title && (
            <S.FormBlockTitle>
              <span>{block.title}</span>
            </S.FormBlockTitle>
          )}
          <S.FBLines>
            {block.fieldLines.map((fieldLine, flk) => (
              <S.FormBlockFields key={flk} $columns={fieldLine.columns}>
                {fieldLine.fields}
              </S.FormBlockFields>
            ))}
          </S.FBLines>
        </S.FormBlock>
      ))}
    </S.FormLine>
  ))

  return <>{content}</>
}

export default Form
