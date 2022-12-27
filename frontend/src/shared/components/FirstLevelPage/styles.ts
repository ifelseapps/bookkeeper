import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.commonAreaBackground};
`;

export const Footer = styled.footer`
  margin-top: auto;
  background: ${({ theme }) => theme.colors.commonAreaBackground};
`;

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
