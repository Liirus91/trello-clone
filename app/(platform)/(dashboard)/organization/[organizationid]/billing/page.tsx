import { checkSubscription } from '@/lib/subscription';
import { Info } from '../_components/info';

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
    </div>
  );
};

export default BillingPage;
