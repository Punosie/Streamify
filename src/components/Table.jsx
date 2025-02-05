import { Table } from "@chakra-ui/react";
import { mockData } from "../data/mockData";

const Demo = () => {
  return (
    <Table.ScrollArea borderWidth="1px" maxW="100%" minW= "2xs">
      <Table.Root size="sm" variant="outline" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader minW="200px">
              User ID
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="200px">Song</Table.ColumnHeader>
            <Table.ColumnHeader minW="200px">Artist</Table.ColumnHeader>
            <Table.ColumnHeader minW="200px">Date</Table.ColumnHeader>
            <Table.ColumnHeader minW="200px" textAlign="end">
              Stream Count
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mockData.recentStreams.map((stream) => (
            <Table.Row key={stream.userId}>
              <Table.Cell>{stream.userId}</Table.Cell>
              <Table.Cell>{stream.song}</Table.Cell>
              <Table.Cell>{stream.artist}</Table.Cell>
              <Table.Cell>{stream.date}</Table.Cell>
              <Table.Cell textAlign="end">{stream.count}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default Demo;
