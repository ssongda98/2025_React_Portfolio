const icons = [
  "/skills/Wordpress.png",
  "/skills/Php.png",
  "/skills/React.png",
  "/skills/Next.png",
  "/skills/Typescript.png",
  "/skills/Sass.png",
  "/skills/Tailwindcss.png",
  "/skills/Shopify.png",
  "/skills/Liquid.png",
  "/skills/Mysql.png",
  "/skills/OpenAI.png",
  "/skills/Figma.png",
  "/skills/Wix.png",
  "/skills/Squarespace.png",
];

const doubled = [...icons, ...icons, ...icons, ...icons];

const SkillsMarquee = () => {
  return (
    <div className='overflow-hidden whitespace-nowrap'>
      <div className="marquee flex">
        {doubled.map((src, i) => (
          <div className="sImg p-4 bg-white rounded-lg" key={i}>
            <img
              key={i}
              src={src}
              alt={`icon-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
