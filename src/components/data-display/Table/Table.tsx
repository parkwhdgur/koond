import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
`

const TableRow = styled.tr`
  cursor: default;
  transition: background 0.3s;

  th {
    font-weight: 500;
    color: ${palette.grayscale[1]};
    background: #fafafa;
    border-bottom: 1px solid ${palette.outline};
    padding: 16px;
  }

  &:hover {
    background: ${palette.grayscale[6]};
  }

  td {
    padding: 16px;

    &:hover {
    }
  }
`

function Table() {
  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Tags</th>
            <th>Action</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
        </tbody>
      </StyledTable>
    </>
  )
}

export default Table
