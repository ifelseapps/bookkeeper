import React, { useMemo } from 'react';
import {
  useTable,
  useResizeColumns,
  useBlockLayout,
  Column,
} from 'react-table';
import * as Styles from './Styles';

export function Grid() {
  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Счет',
        accessor: 'account',
      },
      {
        Header: 'Наименование',
        accessor: 'title',
      },
      {
        Header: 'Тип',
        accessor: 'type',
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

  const table = useTable({ columns, data }, useResizeColumns, useBlockLayout);

  return (
    <table {...table.getTableProps()}>
      <thead>
        {table.headerGroups.map((group) => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
                <Styles.Separator {...column.getResizerProps()} />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...table.getTableBodyProps()}>
        {table.rows.map((row) => {
          table.prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
