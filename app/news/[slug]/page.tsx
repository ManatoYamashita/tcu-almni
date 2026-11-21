import { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import { generateNewsMetadata } from '@/app/_libs/metadata';
import Article from '@/app/_components/Article';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export async function generateMetadata({ params }: Pick<Props, 'params'>): Promise<Metadata> {
  // ルートのパラメータは [slug]（以前は存在しない params.id を参照していた）
  const { slug } = await params;
  const news = await getNewsDetail(slug);
  return generateNewsMetadata(news);
}

type Props = {
  // Next.js 15 以降、params / searchParams は Promise として渡される
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = await searchParams;
  const data = await getNewsDetail(slug, {
    draftKey: dk,
  });
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
