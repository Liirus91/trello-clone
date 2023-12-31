import { db } from '@/lib/db';

const OrganizationIdPage = () => {
  async function create(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;

    await db.board.create({ data: { title } });
  }

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          placeholder="Enter a board title"
          name="title"
          required
          className="border p-1 border-black"
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
