import styled from 'styled-components';

interface IFlex {
  direction?: "row"|"column"
}

const Flex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : 'row'};
`;


export default Flex
