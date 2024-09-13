import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="w-[100vw] background flex flex-col">
  <h1 className="bg-white rounded-sm w-[80%] mx-auto mt-[40px] 
  px-10 py-2 text-4xl text-center font-bold uppercase">Random Gifs</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
  </div>
  );
}
