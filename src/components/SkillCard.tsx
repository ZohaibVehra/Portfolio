import { useEffect, useState } from "react";

const useMinWidth = (minWidth: number) => {
  const [ok, setOk] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const onResize = () => setOk(window.innerWidth >= minWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [minWidth]);

  return ok;
};

type SkillCardProps = {
  title: string;
  values: string[];
  image: string;
};

type ValCardProps = {
    val: string;
}

const ValCard: React.FC<ValCardProps> = ({val}) => {
    return (
        <div className="rounded-lg bg-[#6d9ce0] px-3 h-12 flex items-center justify-center hover:bg-[#4c7bbd]">
            <p className="text-md md:text-xl text-white whitespace-nowrap">{val}</p>
        </div>
    )
}

const SkillCard: React.FC<SkillCardProps> = ({title, values, image}) => {
  const minImage= useMinWidth(1191);
  const wideEnough = useMinWidth(1600);

  if (wideEnough) {
  return (
    <div
      className="relative overflow-hidden rounded-xl bg-[#f1f0f2] w-full md:w-[75%] h-24 border border-gray-300 flex items-center"
    >
      <h1 className="text-md md:text-2xl font-semibold text-gray-700 ml-5 md:ml-10 z-10">
        {title}
      </h1>

      <div className="absolute left-[35%] top-1/2 -translate-y-1/2 flex gap-6 z-10">
        {values.map(val => (
          <ValCard key={val} val={val} />
        ))}
      </div>

      <img
        src={image}
        alt=""
        className="absolute right-0 top-0 h-full w-[40%] object-cover pointer-events-none"
      />
    </div>
  );
}


  return (
    <div
        className="relative rounded-xl bg-[#f1f0f2] w-full md:w-[75%] min-h-[5rem] border border-gray-300 flex items-start px-6 py-3 md:py-4 gap-6 flex-col md:flex-row"
    >
        <h1 className="text-xl font-semibold text-gray-700 whitespace-nowrap mt-2">
        {title}
        </h1>

        <div className="flex flex-wrap gap-4 z-10">
        {values.map(val => (
            <ValCard key={val} val={val} />
        ))}
        </div>
        {minImage && <img
          src={image}
          alt=""
          className="absolute right-0 top-0 h-full w-[60%] object-cover pointer-events-none"
        />}
    </div>
    );
};

export default SkillCard;
