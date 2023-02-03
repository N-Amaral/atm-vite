type Props = {
  opTitles: string[];
  opValues: number[];
};

type InnerProps = {
  optionNum: number;
  title: string;
  value: number;
};

const Option = ({ optionNum, title, value }: InnerProps) => {
  return (
    <li
      id={title}
      className="flex h-[6rem] w-[25rem] content-center  rounded-lg border-[3px] border-b-gray-300 bg-slate-400 hover:cursor-pointer hover:bg-slate-500"
    >
      <div className=" m-[1rem] h-[4rem] w-[4rem]  rounded-lg border bg-white ">
        <span className="flex justify-center pt-2 text-[28px] font-bold">{optionNum + 1}</span>
      </div>
      <div className="self-center">
        <a className="text-[28px] font-[700] capitalize text-white">{title}</a>
      </div>
    </li>
  );
};

const MenuOptions = ({ opTitles, opValues }: Props) => {
  return (
    <ul className=" grid h-[100%] grid-cols-2 items-center justify-items-center gap-2">
      {opTitles.map((title, i) => (
        <Option optionNum={i} title={title} value={opValues[i]} key={`${title}-${i}`} />
      ))}
    </ul>
  );
};

export default MenuOptions;
