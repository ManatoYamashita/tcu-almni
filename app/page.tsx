import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import TopHero from '@/app/_components/TopHero';
import HightLight from '@/app/_components/Highlights';

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
      <section>
      {/* <section className={styles.imageSection}>
        <Image
          className={styles.img}
          src="/placeholder.webp"
          alt="placeholder"
          width={514}
          height={514}
        />
      </section> */}
      </section>
      <section>
        <HightLight />
      </section>
    </>
  );
}
