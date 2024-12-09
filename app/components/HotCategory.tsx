import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="container mx-auto px-5 py-6 lg:py-6 flex justify-center items-center">
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-4">
        {/* Vertical text (hidden on mobile) */}
        <div className="hidden md:block text-xl font-medium tracking-wider text-zinc-900 rotate-90 -mr-2">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden text-center mb-4 ">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-4 -ml-44">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%] ">
            <Image
              src="/image 9.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/image 4.png"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/image 8.png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/image 6.png"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/image 8.png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
