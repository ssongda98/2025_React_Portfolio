const icons = [
  { name: "Wordpress", src: "/skills/Wordpress" },
  { name: "Php", src: "/skills/Php" },
  { name: "React", src: "/skills/React" },
  { name: "Next", src: "/skills/Next" },
  { name: "Typescript", src: "/skills/Typescript" },
  { name: "Sass", src: "/skills/Sass" },
  { name: "Tailwindcss", src: "/skills/Tailwindcss" },
  { name: "Shopify", src: "/skills/Shopify" },
  { name: "Liquid", src: "/skills/Liquid" },
  { name: "Mysql", src: "/skills/Mysql" },
  { name: "OpenAI", src: "/skills/OpenAI" },
  { name: "Figma", src: "/skills/Figma" },
  { name: "Wix", src: "/skills/Wix" },
  { name: "Squarespace", src: "/skills/Squarespace" },
];

const doubled = [...icons, ...icons, ...icons, ...icons];

const SkillsMarquee = () => {
  return (
    <div className='overflow-hidden whitespace-nowrap'>
      <div className="marquee flex">
        {doubled.map((icon, i) => (
          <div className="sImg p-4 bg-white rounded-lg" key={i}>
            <img
              src={`${icon.src}-48.webp`}
              srcSet={`
                ${icon.src}-33.webp 33w,
                ${icon.src}-48.webp 48w,
                ${icon.src}-96.webp 96w
              `}
              sizes="(max-width: 768px) 33px, 48px"
              alt={icon.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;