import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import TopHero from '@/app/_components/TopHero';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <TopHero
        title="心からの"
        titlePrimary="つながり"
        description="平成25年4月1日より、武蔵工業大学、東横学園女子短期大学及び東京都市大学の卒業生を正会員とし、また、在学生を準会員とする「東京都市大学 校友会」が発足しました。"
        primaryButtonText="もっとみる"
        secondaryButtonText="お問い合わせ"
      />
      <div className={styles.studentCard}>
        <Image
          className={styles.studentCardImg}
          src="/tcualmni-like-studentCard.webp"
          alt="東京都市大学 校友会"
          width={3600}
          height={1200}
          priority
        />
      </div>
      {/* <div className={styles.titleSection}>
        <h1 className={styles.title}>心からのつながり</h1>
        <p className={styles.description}>
          武蔵工業大学 → 東京都市大学
        </p>
      </div> */}
      <section className={styles.top}>
        <video className={styles.bgimg} autoPlay loop muted playsInline>
          <source src="/tcu-armni-sin.webm" type="video/webm" className={styles.herovideo} />
        </video>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>会長あいさつ</h2>
            <p className={styles.sectionTitleJa}>会長 皆川 勝（1979土木）</p>
            <p className={styles.sectionDescription}>
            私が会長である３年間、この目的を見失わず、「心からのつながりを誰もが得られる会を目指して行動する」という方向性を会員の皆さんと共有しながら、会の活動を進めてゆきたいと考えています。 
            人は、誰かと、あるいはモノや情報などの何かとつながりを持つからには、自分の心から望むつながりが欲しいものです。 
            </p>
            <ButtonLink href="/404">もっとみる</ButtonLink>
          </div>
          <Image
            className={styles.kaichoImg}
            src="/minakawa-masaru.jpg"
            alt="皆川勝"
            width={514}
            height={514}
          />
        </div>
      </section>

      {/* <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              <p className={styles.sectionTitleJa}>私たちについて</p>
              <p className={styles.sectionDescription}>
                「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>社名</dt>
                <dd className={styles.infoDescription}>株式会社Simple</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>設立</dt>
                <dd className={styles.infoDescription}>2023年4月</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>所在地</dt>
                <dd className={styles.infoDescription}>
                  〒000-0000
                  <br />
                  東京都渋谷区渋谷1-1-1
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>代表者</dt>
                <dd className={styles.infoDescription}>鈴木 太郎</dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>資本金</dt>
                <dd className={styles.infoDescription}>1,000万円</dd>
              </dl>
            </div>
          </div>
        </section>
      </div> */}
      
      {/* <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section> */}
    </>
  );
}
