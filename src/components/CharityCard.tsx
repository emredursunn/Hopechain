import { Charity } from "../types/Charity";

type Props = {
  charity: Charity;
};

const CharityCard = ({ charity }: Props) => {
  return (
    <div
      className="group flex flex-col relative hover:z-10 items-center justify-center w-[400px] h-[400px] hover:scale-[1.1] transition-all duration-200 rounded-lg shadow-md"
      style={{
        backgroundImage: `url(${charity.imageUri})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-200 bg-opacity-0 group-hover:bg-opacity-30 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-200 rounded-lg">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <h3 className="text-xl font-bold mb-2 text-white">{charity.name}</h3>
          <p className="text-black font-bold mb-4">{charity.description}</p>
          <button className="hover:bg-slate-300 mt-4 bg-white p-2 rounded-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;