import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const Resizer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-left: solid 1px;
  border-right: solid 1px;
  border-color: ${({ theme }) => theme.colors.grid.border};
  cursor: default;
  user-select: none;
`;

export const Column = styled.th`
  position: relative;
  padding: 0.5em;
  text-align: left;
  font-weight: 700;
  border-top: solid 1px;
  border-bottom: solid 1px;
  border-color: inherit;
  background: ${({ theme }) => theme.colors.grid.backgroundHeader};
  color: ${({ theme }) => theme.colors.grid.colorHeader};
  &:not(:last-child) {
    border-right: solid 1px;
    border-color: inherit;
  }
  &:last-child ${Resizer} {
    display: none;
  }
`;

export const Row = styled.tr`
  &:focus {
    outline: 0;
    background-color: ${({ theme }) => theme.colors.grid.backgroundActive};
  }
`;

export const Cell = styled.td`
  padding: 0.5em;
  cellspacing: 0;
  border-bottom: solid 1px;
  border-color: inherit;
  &:not(:last-child) {
    border-right: solid 1px;
    border-color: inherit;
  }
`;
