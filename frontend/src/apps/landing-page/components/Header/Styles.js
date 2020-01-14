import styled from 'styled-components';

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
`;
  
export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background: rgba(0,0,0,.1)
`;
  
export const ContainerItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold
`;

export const Logo = styled.p`
  font-size: 30px
  font-weight: bold;
`;