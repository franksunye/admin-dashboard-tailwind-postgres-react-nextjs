import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
// import UsersTable from './table';
import InquiriesTable from './InquiriesTable'; // 引入新的InquiriesTable组件

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }

interface Inquiry {
  id: number;
  name: string;
  contact: string;
  address: string;
  repair_part: string;
  leak_reason: string;
  expected_visit_time: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const query = sql`
  SELECT id, name, contact, address, repair_part, leak_reason, expected_visit_time 
  FROM Inquiries 
  WHERE name ILIKE ${'%' + search + '%'};
 `;

  const result = await query;
  // const users = result.rows as User[];
  const inquiries = result.rows as Inquiry[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-full items-center">
      <div className="flex justify-between items-center w-full h-full">
        {' '}
        {/* 增加 min-h-screen */}
        <div className="flex flex-col justify-start items-center w-1/2">
          {' '}
          {/* 确保这里有 h-full */}
          <h1 className="text-4xl text-center mb-4 font-bold">
            GPTs for Leads
          </h1>
          <p className="text-lg text-center">
            A tool for using AI to boost lead generation by unifying and syncing
            the leads captured easily from GPTs conversations, to help you turn
            those chat interactions into sales ready leads.
          </p>
        </div>
        <div className="w-1/2">
          <iframe
            src="./CodeDisplay.html"
            className="w-full"
            style={{ height: '300px' }}
          ></iframe>
        </div>
      </div>

      {/* <Title>Users</Title> */}
      <div className="flex flex-col items-center w-full">
        <Text className="mt-6">
          A list of users retrieved from a Postgres database.
        </Text>
        <div className="w-full max-w-md mx-auto">
          {' '}
          {/* 包裹 Search 的元素 */}
          <Search />
        </div>
      </div>
      <Card className="mt-6">
        {/* <UsersTable users={users} /> */}
        <InquiriesTable inquiries={inquiries} />
      </Card>
    </main>
  );
}
