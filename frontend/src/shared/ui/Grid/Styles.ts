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
`;

export const Column = styled.th`
  position: relative;
  padding: 0.5em;
  text-align: left;
  font-weight: 500;
  border-top: solid 1px;
  border-bottom: solid 1px;
  &:not(:last-child) {
    border-right: solid 1px;
  }
  &:last-child ${Resizer} {
    display: none;
  }
`;

export const Cell = styled.td`
  padding: 0.5em;
  cellspacing: 0;
  border-bottom: solid 1px;
  &:not(:last-child) {
    border-right: solid 1px;
  }
`;
