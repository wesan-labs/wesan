import { getContent } from '@/lib/content';
import { LegalClient, type LegalContent } from './legal-client';

export default async function LegalPage() {
  const c = ((await getContent()).pages.legal as unknown) as LegalContent;
  return <LegalClient c={c} />;
}
