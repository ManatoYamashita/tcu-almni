"use client";

import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface StudentCardProps {
    href: string;
    ariaLabel?: string;
}

export default function StudentCard({ href, ariaLabel }: StudentCardProps) {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                {
                    rotation: -75,
                    transformOrigin: "bottom left"
                },
                {
                    rotation: 15,
                    duration: 1.2,
                    ease: "power4.out",
                    transformOrigin: "bottom left",
                    onComplete: () => {
                        if (imageRef.current) {
                            imageRef.current.style.transform = "rotate(15deg)";
                        }
                    }
                }
            );

            // ホバーアニメーションの設定
            const element = imageRef.current;
            
            const onMouseEnter = () => {
                gsap.to(element, {
                    rotation: 20,
                    duration: 0.3,
                    ease: "power2.out",
                    transformOrigin: "bottom left"
                });
            };

            const onMouseLeave = () => {
                gsap.to(element, {
                    rotation: 15,
                    duration: 0.3,
                    ease: "power2.out",
                    transformOrigin: "bottom left"
                });
            };

            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);

            return () => {
                element.removeEventListener('mouseenter', onMouseEnter);
                element.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, []);
    
    return (
        <Link href={href} aria-label={ariaLabel}>
            <div className={styles.studentCard}>
                <Image
                    className={styles.studentCardImg}
                    src="/tcualmni-like-studentCard.webp"
                    alt="東京都市大学 校友会"
                    width={3600}
                    height={1200}
                    priority
                    ref={imageRef}
                />
            </div>
        </Link>
    );
}
