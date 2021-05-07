import styled from 'styled-components';

interface IFlex {
    direction?: "row" | "column"
    padding?: string
    margin?: string
}

const Flex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : 'row'};
    margin: ${props => (props.margin ? props.margin : '8px')};
    padding: ${(props) => props.padding ? props.padding : '8px'};

`;


export default Flex
