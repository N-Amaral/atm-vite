const NumberKeys = () => {
  const numPad: Array<String> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"];
  return (
    <div className="numberKeys grid grid-cols-3 grid-rows-4 gap-4">
      {numPad.map((key, i) => (
        <button type="button" className="keypadBtn bg-slate-400 " key={`${key}-${i}`}>
          {key}
        </button>
      ))}
    </div>
  );
};

const SideKeys = () => {
  const sidePad: Array<String> = ["anular cancel", "corrigir clear", "confirmar enter"];
  return (
    <div className="sideKeys">
      {sidePad.map((key, i) => (
        <button type="button" className="sidepadBtn" key={`${key}-${i}`}>
          <span>
            {key} <span>{i === 0 ? "X" : i === 1 ? "<" : i === 2 ? "" : "0"}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="keyboardWrapper">
      <div className="keyboard">
        <div className="numbers">
          <NumberKeys />
          <SideKeys />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
