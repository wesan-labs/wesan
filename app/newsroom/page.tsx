import { getContent, getNewsItems, type NewsroomIndexContent } from '@/lib/content';
import { NewsroomClient } from './newsroom-client';

export default async function NewsroomPage() {
  const content = await getContent();
  const c = content.pages.newsroomIndex as NewsroomIndexContent;
  const items = await getNewsItems();

  return <NewsroomClient c={c} items={items} />;
}
