import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import { Metadata } from 'next';
import { generateMetadata } from '@/app/_libs/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'ニュース一覧',
  description: '東京都市大学校友会のニュース一覧ページです。',
});

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <NewsList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/news" />
    </>
  );
}
