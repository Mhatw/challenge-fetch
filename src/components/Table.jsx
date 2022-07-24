import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";

export function TableData() {
  return (
    <TableContainer>
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Title</Th>
            <Th>Title</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>data</Td>
            <Td>data</Td>
            <Td>data</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
