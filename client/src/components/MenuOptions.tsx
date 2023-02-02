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
    <li id={title} className="flex h-[6rem] w-[25rem] content-center  rounded-lg border-[3px] border-b-gray-300 bg-slate-400">
      <div className="m-[1rem] h-[4rem] w-[4rem] rounded-lg border bg-white text-center">
        <span className="text-[28px] font-bold">{optionNum + 1}</span>
      </div>
      <div className="self-center">
        <a className="text-[28px] font-[700] capitalize text-white">{title}</a>
      </div>
    </li>
  );
};

const MenuOptions = ({ opTitles, opValues }: Props) => {
  return (
    <div className="flex justify-center">
      <ul className="grid h-[50%] w-[70%] grid-cols-2 gap-[20%]">
        {opTitles.map((title, i) => (
          <Option optionNum={i} title={title} value={opValues[i]} key={`${title}-${i}`} />
        ))}
      </ul>
    </div>
  );
};

export default MenuOptions;
