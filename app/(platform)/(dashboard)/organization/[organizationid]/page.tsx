import { create } from '@/actions/create-board';

const OrganizationIdPage = () => {
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
