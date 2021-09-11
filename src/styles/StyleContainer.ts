import styled from 'styled-components'

interface IStyleContainer {
  column?: boolean
  absolute?: boolean
  'position-relative'?: boolean
  'font-size'?: string
  padding?: string
  margin?: string
  'default-margin'?: boolean
  width?: string
  height?: string
  'max-height'?: string
  'max-width'?: string
  'min-height'?: string
  'min-width'?: string
  'font-weight'?: number
  'circle-top'?: boolean
  'box-shadow'?: string
  'circle-bottom'?: boolean
  'background-color'?: string
  pointer?: boolean
  'no-padding'?: boolean
  vh?: number
  vw?: number
  middle?: boolean
  color?: string
  'justify-content'?: 'center' | 'flex-start' | 'stretch' | 'flex-end' | 'space-between'
  'align-items'?: 'center' | 'flex-start' | 'stretch' | 'flex-end'
}

const StyleContainer = styled.div<IStyleContainer>`
  display: flex;
  align-items: ${props => (props['align-items'] ? props['align-items'] : props.middle ? 'center' : '')};
  justify-content: ${props => (props['justify-content'] ? props['justify-content'] : props.middle ? 'center' : '')};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  margin: ${props => (props.margin ? props.margin : props['default-margin'] ? '8px' : '0px')};
  padding: ${props => (props.padding ? props.padding : props['no-padding'] ? '0' : '8px')};
  width: ${props => (props.width ? props.width : props.vw ? `${props.vw}vw` : '')};
  height: ${props => (props.height ? props.height : props.vh ? `${props.vh}vh` : '')};
  max-height: ${props => props['max-height'] && props['max-height']};
  max-width: ${props => props['max-width'] && props['max-width']};
  min-height: ${props => props['min-height'] && props['min-height']};
  min-width: ${props => props['min-width'] && props['min-width']};
  font-weight: ${props => props['font-weight'] && props['font-weight']};
  border-top-left-radius: ${props => props['circle-top'] && '5%'};
  border-top-right-radius: ${props => props['circle-top'] && '5%'};
  border-bottom-left-radius: ${props => props['circle-bottom'] && '5%'};
  border-bottom-right-radius: ${props => props['circle-bottom'] && '5%'};
  font-size: ${props => props['font-size'] && props['font-size']};
  position: ${props => (props.absolute ? 'absolute' : props['position-relative'] ? 'relative' : '')};
  cursor: ${props => props.pointer && 'pointer'};
  box-shadow: ${props => props['box-shadow'] && props['box-shadow']};
  box-sizing: border-box;
  color: ${props => props.color && props.color};
  background-color: ${props => props['background-color'] && props['background-color']};
`

export default StyleContainer
