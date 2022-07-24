import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Avatar,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";

export function TableData({ data }) {
  return (
    <TableContainer bg={"white"} borderRadius="0.2rem" minH={"309.5px"}>
      <Table size="sm" variant="striped">
        <Thead>
          <Tr bg={"blue.500"}>
            <Th color="whiteAlpha.900">Nombre</Th>
            <Th color="whiteAlpha.900">Apellido</Th>
            <Th color="whiteAlpha.900">Edad</Th>
            <Th color="whiteAlpha.900">Genero</Th>
            <Th color="whiteAlpha.900">Email</Th>
            <Th color="whiteAlpha.900">Nacionalidad</Th>
            <Th color="whiteAlpha.900">Foto</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Field>{item.name.first}</Field>
              <Field>{item.name.last}</Field>
              <Field>{item.dob.age}</Field>
              <Field>{item.gender}</Field>
              <Field>{item.email}</Field>
              <Field>{item.nat}</Field>
              <Field isAvatar>
                <Avatar
                  name={`${item.name.first} ${item.name.last}`}
                  src={item.picture.thumbnail}
                />
              </Field>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function Field({ children, isAvatar }) {
  return (
    <Th fontWeight="400">
      <Skeleton
        borderRadius={isAvatar ? "50%" : "0.2rem"}
        isLoaded={true}
        startColor="gray.100"
        endColor="gray.300"
      >
        {children}
      </Skeleton>
    </Th>
  );
}
