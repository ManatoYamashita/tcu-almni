import { Metadata } from 'next';
import Script from 'next/script';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import styles from './layout.module.css';
import { generateMetadata } from '@/app/_libs/metadata';

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = generateMetadata({
  title: 'ホームページタイトル',
  description: 'ホームページの説明文',
});

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <title>東京都市大学 校友会</title>
        <meta name="description" content='東京都市大学の同窓会である校友会のホームページです。卒業生と在学生に情報を発信しています。' />
      </head>
      {/* <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
      ></Script> */}
      <body className={styles.body}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
