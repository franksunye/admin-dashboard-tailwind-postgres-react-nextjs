import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const query = sql`
  SELECT id, name, username, email 
  FROM users 
  WHERE name ILIKE ${'%' + search + '%'};
 `;

  const result = await query;
  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-full items-center">
      <h1 className="text-4xl text-center mb-4 font-bold">GPTs for Leads</h1>
      <div className="container mx-auto px-4 max-w-lg">
        <p className="text-lg text-center">
          A tool for using AI to boost lead generation by unifying and syncing
          the leads captured easily from GPTs conversations, to help you turn
          those chat interactions into sales ready leads.
        </p>
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
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
