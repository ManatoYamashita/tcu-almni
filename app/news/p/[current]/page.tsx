import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/NewsList';

type Props = {
  // Next.js 15 以降、params は Promise として渡される
  params: Promise<{
    current: string;
  }>;
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { current: currentParam } = await params;
  const current = parseInt(currentParam, 10);
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/news" />
    </>
  );
}
