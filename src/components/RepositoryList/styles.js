import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  li + li {
    margin-top: 30px;
  }
`
