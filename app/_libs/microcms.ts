import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// APIの型定義
export type Category = {
  id: string;
  name: string;
} & MicroCMSContentId & MicroCMSDate;

export type News = {
  title: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSContentId & MicroCMSDate;

export type Article = News & MicroCMSContentId & MicroCMSDate & {
  description?: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API Client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// News API
export const getNewsList = async (queries?: MicroCMSQueries) => {
  try {
    const response = await client.getList<News>({
      endpoint: 'news',
      queries,
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch news:', error);
    throw error;
  }
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  try {
    const response = await client.getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries,
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch news detail:', error);
    notFound();
  }
};

// Categories API
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  try {
    const response = await client.getList<Category>({
      endpoint: 'categories',
      queries,
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  try {
    const response = await client.getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch category detail:', error);
    notFound();
  }
};
