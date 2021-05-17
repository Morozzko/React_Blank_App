import styled from 'styled-components';

interface IStyleContainer {
  column?: boolean;
  'font-size'?: string;
  padding?: string;
  margin?: string;
  'default-margin'?: boolean;
  width?: string;
  height?: string;
  'circle-top'?: boolean;
  'circle-bottom'?: boolean;
  'background-color'?: string;
  pointer?: boolean;
  color?: string;
  'justify-content'?: 'center' | 'flex-start' | 'stretch' | 'flex-end' | 'space-between';
  'align-items'?: 'center' | 'flex-start' | 'stretch' | 'flex-end';
}

const StyleContainer = styled.div<IStyleContainer>`
  display: flex;
  align-items: ${props => props['align-items'] && props['align-items']};
  justify-content: ${props => props['justify-content'] && props['justify-content']};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  margin: ${props => (props.margin ? props.margin : props['default-margin'] ? '8px' : '0px')};
  padding: ${props => (props.padding ? props.padding : '8px')};
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  border-top-left-radius: ${props => props['circle-top'] && '5%'};
  border-top-right-radius: ${props => props['circle-top'] && '5%'};
  border-bottom-left-radius: ${props => props['circle-bottom'] && '5%'};
  border-bottom-right-radius: ${props => props['circle-bottom'] && '5%'};
  font-size: ${props => props['font-size'] && props['font-size']};
  cursor: ${props => props.pointer && 'pointer'};
  box-sizing: border-box;
  color: ${props => props.color && props.color};
  background-color: ${props => props['background-color'] && props['background-color']};
`;

export default StyleContainer;
