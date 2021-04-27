import styled from 'styled-components';

interface IMargin {
    margin?: string;
}

const Margin = styled.div<IMargin>`
    margin: ${props => (props.margin ? props.margin : '8px')};
`;

export default Margin;
