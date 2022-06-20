import { css } from '@emotion/react'

export interface IStyleContainer {
  'align-items'?: 'center' | 'flex-start' | 'stretch' | 'flex-end'
  'background-color'?: string
  'border-radius'?: string
  'box-shadow'?: string
  'box-sizing'?: 'border-box' | 'content-box' | 'padding-box' | 'inherit'
  'font-size'?: string
  'font-weight'?: number
  'justify-content'?: 'center' | 'flex-start' | 'stretch' | 'flex-end' | 'space-between'
  'max-height'?: string
  'max-width'?: string
  'min-height'?: string
  'min-width'?: string
  'no-border-box'?: boolean
  'position-relative'?: boolean
  'z-index'?: number
  absolute?: boolean
  border?: string
  bottom?: string
  color?: string
  column?: boolean
  height?: string
  left?: string
  margin?: string
  middle?: boolean
  padding?: string
  pointer?: boolean
  position?: 'fixed' | 'sticky' | 'relative' | 'inherit' | 'static'
  right?: string
  top?: string
  vh?: number
  vw?: number
  width?: string
}

export const style = (props: IStyleContainer) =>
  css`
    align-items: ${props['align-items'] ? props['align-items'] : props.middle ? 'center' : ''};
    background-color: ${props['background-color'] && props['background-color']};
    border-radius: ${props['border-radius'] && props['border-radius']};
    border: ${props.border && props.border};
    bottom: ${props.bottom && props.bottom};
    box-shadow: ${props['box-shadow'] && props['box-shadow']};
    box-sizing: ${props['box-sizing'] ? props['box-sizing'] : props['no-border-box'] ? '' : 'border-box'};
    color: ${props.color && props.color};
    color: ${props.color};
    cursor: ${props.pointer && 'pointer'};
    display: flex;
    flex-direction: ${props.column ? 'column' : 'row'};
    font-size: ${props['font-size'] && props['font-size']};
    font-weight: ${props['font-weight'] && props['font-weight']};
    height: ${props.height ? props.height : props.vh ? `${props.vh}vh` : ''};
    justify-content: ${props['justify-content'] ? props['justify-content'] : props.middle ? 'center' : ''};
    left: ${props.left && props.left};
    margin: ${props.margin ? props.margin : '0'};
    max-height: ${props['max-height'] && props['max-height']};
    max-width: ${props['max-width'] && props['max-width']};
    min-height: ${props['min-height'] && props['min-height']};
    min-width: ${props['min-width'] && props['min-width']};
    padding: ${props.padding ? props.padding : '0'};
    position: ${props.absolute ? 'absolute' : props['position-relative'] ? 'relative' : props.position ? props.position : ''};
    right: ${props.right && props.right};
    top: ${props.top && props.top};
    width: ${props.width ? props.width : props.vw ? `${props.vw}vw` : ''};
    z-index: ${props['z-index'] && props['z-index']};
  `
