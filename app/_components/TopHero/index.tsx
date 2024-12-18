"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import ButtonComponent from '@/app/_components/ButtonComponent';

interface TopHeroProps {
    title: string;
    titlePrimary: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
}

export default function TopHero({ title, titlePrimary, description, primaryButtonText, secondaryButtonText }: TopHeroProps) {
    const titleWrapperRef = useRef<HTMLDivElement>(null);
    const descriptionWrapperRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 初期状態で要素を非表示に
        gsap.set([titleWrapperRef.current, descriptionWrapperRef.current, buttonsRef.current], {
            opacity: 0,
            y: 20
        });

        // テキストを文字に分割
        const titleSplit = new SplitType(titleWrapperRef.current!.querySelector('h1')!, {
            types: 'chars',
            tagName: 'span'
        });

        const descriptionSplit = new SplitType(descriptionWrapperRef.current!.querySelector('p')!, {
            types: 'words',
            tagName: 'span'
        });

        // タイムライン作成
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.out',
            }
        });

        // アニメーションの実行
        tl.to(titleWrapperRef.current, {
            opacity: 1,
            duration: 0
        })
        .from(titleSplit.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 0.5
        })
        .to(descriptionWrapperRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }, '-=0.3')
        .from(descriptionSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 0.5
        }, '-=0.3')
        .to(buttonsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }, '-=0.2');

        // クリーンアップ関数
        return () => {
            titleSplit.revert();
            descriptionSplit.revert();
        };
    }, []);

    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <span className="relative ms-4">
                </span>
                <div>
                    <div ref={titleWrapperRef} className="opacity-0 leading-10">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white inline-flex flex-wrap">
                            {title}&nbsp;
                            <span className="text-blue-600">
                                {titlePrimary}
                            </span>
                        </h1>
                    </div>
                    <div ref={descriptionWrapperRef} className="mt-6 opacity-0">
                        <p className="text-lg text-gray-800 dark:text-neutral-400">
                            {description}
                        </p>
                    </div>

                    <div ref={buttonsRef} className="mt-7 grid gap-3 w-full sm:inline-flex opacity-0">
                        {/* <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                            {primaryButtonText}
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </a> */}
                        <ButtonComponent href="#" label={primaryButtonText} />
                        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            {secondaryButtonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}