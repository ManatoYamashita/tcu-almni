// import Link from 'next/link';
// import styles from './index.module.css';

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <nav className={styles.nav}>
//         <ul className={styles.items}>
//           <li className={styles.item}>
//             <Link href="/news">知る</Link>
//           </li>
//           <li className={styles.item}>
//             <Link href="/members">参加する</Link>
//           </li>
//           <li className={styles.item}>
//             <Link href="">集う</Link>
//           </li>
//           <li className={styles.item}>
//             <Link href="/contact">手続き</Link>
//           </li>
//           <li className={styles.item}>
//             <Link href="/">学ぶ</Link>
//           </li>
//         </ul>
//       </nav>
//       <p>© 東京都市大学校友会. All Rights Reserved 2024</p>
//     </footer>
//   );
// }

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              私たちは、地域社会の発展と環境保護に取り組むマガジンです。最新の活動やインタビューを通じて、皆様に情報をお届けします。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/activities" className="text-sm hover:underline">活動記録</Link></li>
              <li><Link href="/interviews" className="text-sm hover:underline">インタビュー</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Magazine Title. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
