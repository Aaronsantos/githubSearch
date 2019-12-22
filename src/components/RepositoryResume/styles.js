import styled from 'styled-components'

export const Title = styled.h3`
  font-weight: normal;
  font-size: 35px;
  color: #ac53f2;
`
export const Description = styled.p`
  font-size: 20px;
  color: #000;
  padding: 0;
  margin: 0;
`
export const Star = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center; 
  img {
    width: 25.5px;
    margin-right: 8px;
  }

  span {
    width: 100%;
    font-weight: lighter;
    font-size: 20px;
    color: #5c5c5c;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
