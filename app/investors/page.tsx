import { getContent } from '@/lib/content';
import { InvestorsClient, type InvestorsContent } from './investors-client';

export default async function InvestorsPage() {
  const c = ((await getContent()).pages.investors as unknown) as InvestorsContent;
  return <InvestorsClient c={c} />;
}
