import styled from 'styled-components';

interface IPadding {
  padding?: string
}

const Padding = styled.div<IPadding>`
    padding: ${(props) => props.padding ? props.padding : '8px'};
`;


export default Padding
