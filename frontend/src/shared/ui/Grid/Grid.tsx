import React, { useMemo } from 'react';
import { useTable, useResizeColumns, useFlexLayout, Column } from 'react-table';
import * as Styles from './Styles';

export function Grid() {
  const defaultColumn = useMemo<Partial<Column>>(
    () => ({
      minWidth: 20,
    }),
    []
  );

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Счет',
        accessor: 'account',
        width: 20,
      },
      {
        Header: 'Наименование',
        accessor: 'title',
      },
      {
        Header: 'Тип',
        accessor: 'type',
        width: 20,
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        account: '01',
        title: 'Основные средства',
        type: 'А',
      },
      {
        account: '50',
        title: 'Кассса',
        type: 'А',
      },
    ],
    []
  );

  const table = useTable(
    { columns, data, defaultColumn },
    useResizeColumns,
    useFlexLayout
  );

  return (
    <Styles.Wrapper>
      <Styles.Table {...table.getTableProps()}>
        <thead>
          {table.headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <Styles.Column {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <Styles.Resizer {...column.getResizerProps()} />
                </Styles.Column>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
          {table.rows.map((row) => {
            table.prepareRow(row);
            return (
              <Styles.Row {...row.getRowProps()} tabIndex={0}>
                {row.cells.map((cell) => (
                  <Styles.Cell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Styles.Cell>
                ))}
              </Styles.Row>
            );
          })}
        </tbody>
      </Styles.Table>
    </Styles.Wrapper>
  );
}
