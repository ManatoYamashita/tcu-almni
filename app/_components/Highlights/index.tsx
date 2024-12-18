import Link from "next/link";
import Image from "next/image";

interface HightLightProps {
  imageUrl: string;
  avatarUrl: string;
  authorName: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

const HightLightCard = ({
  imageUrl,
  avatarUrl,
  authorName,
  date,
  title,
  description,
  href
}: HightLightProps) => (
  <Link 
    className="group relative block rounded-xl focus:outline-none transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" 
    href={href}
  >
    <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70 before:transition-all before:duration-300 group-hover:before:from-gray-900/90">
      <Image
        className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 group-hover:scale-105"
        src={imageUrl}
        alt="Blog Image"
        width={350}
        height={350}
      />
    </div>

    <div className="absolute top-0 inset-x-0 z-10">
      <div className="p-4 flex flex-col h-full sm:p-6">
        {/* Avatar */}
        <div className="flex items-center transform transition-transform duration-300 group-hover:translate-y-1">
          <div className="shrink-0">
            <Image
              className="size-[46px] border-2 border-white rounded-full transition-all duration-300 group-hover:border-opacity-80"
              src={avatarUrl}
              alt="Avatar"
              width={46}
              height={46}
            />
          </div>
          <div className="ms-2.5 sm:ms-4">
            <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
              {authorName}
            </h4>
            <p className="text-xs text-white/80 transition-colors duration-300 group-hover:text-white/70">
              {date}
            </p>
          </div>
        </div>
        {/* End Avatar */}
      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 z-10">
      <div className="flex flex-col h-full p-4 sm:p-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
        <h3 className="text-lg sm:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
          {title}
        </h3>
        <p className="mt-2 text-white/80 transition-colors duration-300 group-hover:text-white/70">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

// HightLight component remains the same

const HightLight = () => {
  const blogPosts = [
    {
      imageUrl: "/note-activity.webp",
      avatarUrl: "/note.webp",
      authorName: "東京都市大学 校友会",
      date: "note.com",
      title: "活動記録",
      description: "校友会の活動おご紹介しています。",
      href: "https://note.com/tcu_alumni/m/mc4c284fc2d19"
    },
    {
      imageUrl: "/note-interview.webp",
      avatarUrl: "/note.webp",
      authorName: "東京都市大学 校友会",
      date: "note.com",
      title: "インタビュー",
      description: "校友会で活躍する役員や卒業生のインタビューを掲載しています。",
      href: "https://note.com/tcu_alumni/m/m729119dab099"
    }
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <HightLightCard
            key={index}
            {...post}
          />
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default HightLight;
