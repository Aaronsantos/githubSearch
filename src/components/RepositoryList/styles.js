import { styled } from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: 30px;
  }
`
