import styled from 'styled-components'

export const Container = styled.div`
  padding: 35px 25px;
  display: flex;
  width: 100%;
  flex-direction: ${props => props.rowLayout ? 'row' : 'column'};
  justify-content: ${props => props.rowLayout ? 'space-between' : 'center'};
  ${props => props.rowLayout ? '' : 'align-items: center;'}
  height: ${props => props.rowLayout ? 'auto' : '100vh'};
  > img {
    width: ${props => props.rowLayout ? '280px' : '368px'};
    margin-right: 12px;
    margin-bottom: ${props => props.rowLayout ? '0' : '16px'};
  }
`
