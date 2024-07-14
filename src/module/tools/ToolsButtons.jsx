import { useState } from "react";

const ToolsButtons = () => {
  const [active, setActive] = useState({ value: false, i: null });

  function ActiveCricle(value, i) {
    if (active.value) {
      if (i == active.i) {
        setActive({ value: false, i: null });
      } else {
        setActive({ value: true, i: i });
      }
    } else {
      setActive({ value: true, i: i });
    }
  }
  return (
    <div className="flex gap-5 items-center flex-wrap  w-full">
      {TypeCard.map((item, i) => {
        return (
          <div
            onClick={() => {
              ActiveCricle(item, i);
            }}
            key={i}
            className="flex items-center gap-2 p-1 cursor-pointer select-none"
          >
            <input
              readOnly
              type="radio"
              checked={active.i == i}
              className="p-2 block w-6 h-6 bg-sky-50"
            />
            <p className="font-semibold text-zinc-800">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToolsButtons;

const TypeCard = [
  {
    title: "Frontend",
    value: "frontend",
  },
  {
    title: "Backend",
    value: "backend",
  },
  {
    title: "Devops",
    value: "devops",
  },
  {
    title: "Testing",
    value: "testing",
  },
  {
    title: "UX/UI",
    value: "ux",
  },
  {
    title: "Infrastructure",
    value: "infrastructure",
  },
  {
    title: "Mobile",
    value: "mobile",
  },
];
