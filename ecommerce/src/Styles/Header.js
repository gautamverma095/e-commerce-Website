import styled from "styled-components"

export const HeaderStyle = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* border:6px solid blue; */
  .logo {
    height: 5rem;
    // border:6px solid blue;
  }
`;


