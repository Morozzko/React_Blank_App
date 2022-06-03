import styled from '@emotion/styled'

interface IStyleContainer {
  'align-items'?: 'center' | 'flex-start' | 'stretch' | 'flex-end'
  'background-color'?: string
  'border-radius'?: string
  'box-shadow'?: string
  'circle-bottom'?: boolean
  'circle-top'?: boolean
  'default-margin'?: boolean
  'font-size'?: string
  'font-weight'?: number
  'justify-content'?: 'center' | 'flex-start' | 'stretch' | 'flex-end' | 'space-between'
  'max-height'?: string
  'max-width'?: string
  'min-height'?: string
  'min-width'?: string
  'no-padding'?: boolean
  'position-relative'?: boolean
  absolute?: boolean
  border?: string
  color?: string
  column?: boolean
  height?: string
  margin?: string
  middle?: boolean
  padding?: string
  pointer?: boolean
  vh?: number
  vw?: number
  width?: string
}

const StyleContainer = styled.div<IStyleContainer>`
  align-items: ${props => (props['align-items'] ? props['align-items'] : props.middle ? 'center' : '')};
  background-color: ${props => props['background-color'] && props['background-color']};
  border-bottom-left-radius: ${props => props['circle-bottom'] && '5%'};
  border-bottom-right-radius: ${props => props['circle-bottom'] && '5%'};
  border-radius: ${props => props['border-radius'] && props['border-radius']};
  border-top-left-radius: ${props => props['circle-top'] && '5%'};
  border-top-right-radius: ${props => props['circle-top'] && '5%'};
  border: ${props => props.border && props.border};
  box-shadow: ${props => props['box-shadow'] && props['box-shadow']};
  box-sizing: border-box;
  color: ${props => props.color && props.color};
  cursor: ${props => props.pointer && 'pointer'};
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  font-size: ${props => props['font-size'] && props['font-size']};
  font-weight: ${props => props['font-weight'] && props['font-weight']};
  height: ${props => (props.height ? props.height : props.vh ? `${props.vh}vh` : '')};
  justify-content: ${props => (props['justify-content'] ? props['justify-content'] : props.middle ? 'center' : '')};
  margin: ${props => (props.margin ? props.margin : props['default-margin'] ? '8px' : '0px')};
  max-height: ${props => props['max-height'] && props['max-height']};
  max-width: ${props => props['max-width'] && props['max-width']};
  min-height: ${props => props['min-height'] && props['min-height']};
  min-width: ${props => props['min-width'] && props['min-width']};
  padding: ${props => (props.padding ? props.padding : props['no-padding'] ? '0' : '8px')};
  position: ${props => (props.absolute ? 'absolute' : props['position-relative'] ? 'relative' : '')};
  width: ${props => (props.width ? props.width : props.vw ? `${props.vw}vw` : '')};
`

export default StyleContainer
