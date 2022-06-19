import { css } from '@emotion/react'

export interface IStyleContainer {
  'align-items'?: 'center' | 'flex-start' | 'stretch' | 'flex-end'
  'background-color'?: string
  'border-radius'?: string
  'box-shadow'?: string
  'font-size'?: string
  'font-weight'?: number
  'justify-content'?: 'center' | 'flex-start' | 'stretch' | 'flex-end' | 'space-between'
  'max-height'?: string
  'max-width'?: string
  'min-height'?: string
  'min-width'?: string
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

export const style = (props: IStyleContainer) =>
  css`
    color: ${props.color};
    align-items: ${props['align-items'] ? props['align-items'] : props.middle ? 'center' : ''};
    background-color: ${props['background-color'] && props['background-color']};
    border-radius: ${props['border-radius'] && props['border-radius']};
    border: ${props.border && props.border};
    box-shadow: ${props['box-shadow'] && props['box-shadow']};
    box-sizing: border-box;
    color: ${props.color && props.color};
    cursor: ${props.pointer && 'pointer'};
    display: flex;
    flex-direction: ${props.column ? 'column' : 'row'};
    font-size: ${props['font-size'] && props['font-size']};
    font-weight: ${props['font-weight'] && props['font-weight']};
    height: ${props.height ? props.height : props.vh ? `${props.vh}vh` : ''};
    justify-content: ${props['justify-content'] ? props['justify-content'] : props.middle ? 'center' : ''};
    margin: ${props.margin ? props.margin : '0'};
    max-height: ${props['max-height'] && props['max-height']};
    max-width: ${props['max-width'] && props['max-width']};
    min-height: ${props['min-height'] && props['min-height']};
    min-width: ${props['min-width'] && props['min-width']};
    padding: ${props.padding ? props.padding : '0'};
    position: ${props.absolute ? 'absolute' : props['position-relative'] ? 'relative' : ''};
    width: ${props.width ? props.width : props.vw ? `${props.vw}vw` : ''};
  `
