import { Medal } from 'lucide-react';

const MarketingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex items-center mb-4 border shadow-sm p-4 uppercase
        bg-amber-100 text-amber-700 rounded-full"
        >
          <Medal className="h-6 w-6 mr-2" /> №1 task menegment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          TrelloClone helps team move
        </h1>
        <div
          className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600
        text-white px-4 p-2 rounded-md pb-4 w-fit"
        >
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to home office, the way your team works is unique -
        accomplish it all with TrelloClone.
      </div>
    </div>
  );
};

export default MarketingPage;
