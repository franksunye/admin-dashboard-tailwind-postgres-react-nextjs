import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface Inquiry {
    id: number;
    name: string;
    contact: string;
    address: string;
    repair_part: string;
    leak_reason: string;
    expected_visit_time: string;
  }
  
  export default function InquiriesTable({ inquiries }: { inquiries: Inquiry[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Contact</TableHeaderCell>
            <TableHeaderCell>Address</TableHeaderCell>
            <TableHeaderCell>Repair Part</TableHeaderCell>
            <TableHeaderCell>Leak Reason</TableHeaderCell>
            <TableHeaderCell>Expected Visit Time</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id}>
              <TableCell>{inquiry.name}</TableCell>
              <TableCell><Text>{inquiry.contact}</Text></TableCell>
              <TableCell><Text>{inquiry.address}</Text></TableCell>
              <TableCell><Text>{inquiry.repair_part}</Text></TableCell>
              <TableCell><Text>{inquiry.leak_reason}</Text></TableCell>
              <TableCell><Text>{inquiry.expected_visit_time}</Text></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  