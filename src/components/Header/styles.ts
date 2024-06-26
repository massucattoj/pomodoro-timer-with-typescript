import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: bold;
    color: ${(props) => props.theme['green-500']};
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      // (prop)
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      // when link active (class)
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
