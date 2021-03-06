import styled from 'styled-components';

const Center = (props) => {
  return <Centered {...props}>{props.children}</Centered>;
};

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || 'center'};
  gap: ${(props) => `${props.gap}px` || 0};
  flex-direction: ${(props) => props.direction || 'row'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || 0};
`;

export default Center;
