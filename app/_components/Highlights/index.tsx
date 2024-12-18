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
  <Link className="group relative block rounded-xl focus:outline-none" href={href}>
    <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
      <Image
        className="size-full absolute top-0 start-0 object-cover"
        src={imageUrl}
        alt="Blog Image"
        width={350}
        height={350}

        // fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    <div className="absolute top-0 inset-x-0 z-10">
      <div className="p-4 flex flex-col h-full sm:p-6">
        {/* Avatar */}
        <div className="flex items-center">
          <div className="shrink-0">
            <Image
              className="size-[46px] border-2 border-white rounded-full"
              src={avatarUrl}
              alt="Avatar"
              width={46}
              height={46}
            />
          </div>
          <div className="ms-2.5 sm:ms-4">
            <h4 className="font-semibold text-white">
              {authorName}
            </h4>
            <p className="text-xs text-white/80">
              {date}
            </p>
          </div>
        </div>
        {/* End Avatar */}
      </div>
    </div>

    <div className="absolute bottom-0 inset-x-0 z-10">
      <div className="flex flex-col h-full p-4 sm:p-6">
        <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
          {title}
        </h3>
        <p className="mt-2 text-white/80">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const HightLight = () => {
  const blogPosts = [
    {
      imageUrl: "/placeholder.webp",
      avatarUrl: "/placeholder.webp",
      authorName: "Gloria",
      date: "Jan 09, 2021",
      title: "Facebook is creating a news section in Watch to feature breaking news",
      description: "Facebook launched the Watch platform in August",
      href: "#"
    },
    {
      imageUrl: "/placeholder.webp",
      avatarUrl: "/placeholder.webp",
      authorName: "Gloria",
      date: "May 30, 2021",
      title: "What CFR (Conversations, Feedback, Recognition) really is about",
      description: "For a lot of people these days, Measure What Matters.",
      href: "#"
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
