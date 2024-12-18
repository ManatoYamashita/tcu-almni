import type { Metadata } from 'next';
import { News } from './microcms';

type MetadataProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
};

// デフォルトのメタデータ
const DEFAULT_METADATA: MetadataProps = {
  title: '東京都市大学校友会',
  description: '東京都市大学校友会の公式Webサイトです。',
  ogImage: '/images/default-ogp.png', // デフォルトのOGP画像パス
  url: 'https://tcu-alumni.jp',
};

// HTMLタグを除去するユーティリティ関数
const removeHtmlTags = (str: string | undefined): string => {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '');
};

// 説明文を生成するユーティリティ関数
const generateDescription = (content: string | undefined): string => {
  if (!content) return DEFAULT_METADATA.description ?? '';
  const plainText = removeHtmlTags(content);
  return plainText.length > 120 
    ? plainText.slice(0, 120) + '...'
    : plainText;
};

export const generateMetadata = ({
  title,
  description,
  ogImage,
  url,
}: MetadataProps = {}): Metadata => {
  const metadata: Metadata = {
    title: title 
      ? `${title} | ${DEFAULT_METADATA.title}`
      : DEFAULT_METADATA.title,
    description: description ?? DEFAULT_METADATA.description,
    metadataBase: new URL('https://tcu-alumni.jp'),
    openGraph: {
      title: title 
        ? `${title} | ${DEFAULT_METADATA.title}`
        : DEFAULT_METADATA.title,
      url: url || DEFAULT_METADATA.url,
      description: description ?? DEFAULT_METADATA.description,
      images: [
        {
          url: ogImage 
            ? new URL(ogImage, 'https://tcu-alumni.jp').toString() 
            : '/images/default-ogp.png',
          width: 1200,
          height: 630,
          alt: title ?? DEFAULT_METADATA.title,
        },
      ],
      locale: 'ja_JP',
      type: 'website',
      siteName: DEFAULT_METADATA.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: title 
        ? `${title} | ${DEFAULT_METADATA.title}`
        : DEFAULT_METADATA.title,
      description: description ?? DEFAULT_METADATA.description,
      images: [{
        url: ogImage 
          ? new URL(ogImage, 'https://tcu-alumni.jp').toString() 
          : '/images/default-ogp.png'
      }],
    },
    alternates: {
      canonical: url || DEFAULT_METADATA.url,
    },
  };

  return metadata;
};

// ニュース記事用のメタデータ生成
export const generateNewsMetadata = (news: News | undefined): Metadata => {
  if (!news) {
    return generateMetadata();
  }

  return generateMetadata({
    title: news.title,
    description: generateDescription(news.content),
    ogImage: news.thumbnail?.url ?? DEFAULT_METADATA.ogImage,
    url: `${DEFAULT_METADATA.url}/news/${news.id}`,
  });
};