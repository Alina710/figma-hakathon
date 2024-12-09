import Image from "next/image";

const logos = [
  { src: "/Logo.png", alt: "Zapier Logo" },
  { src: "/Logo2.png", alt: "Pipedrive Logo" },
  { src: "/Logo 3.png", alt: "CIB Bank Logo" },
  { src: "/Logo 4.png", alt: "Z Logo"  },
  { src: "/Logo 5.png", alt: "Burnt Toast Logo" },
  { src: "/Logo 6.png", alt: "PandaDoc Logo" },
  { src: "/Logo 7.png", alt: "Moz Logo" },
];

const LogoGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 p-15 py-8 px-4 md:px-10 container mx-auto  items-centre space-y-5 lg:px-16 ">
      {logos.map((logo, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image src={logo.src} alt={logo.alt} width={80} height={80} />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
