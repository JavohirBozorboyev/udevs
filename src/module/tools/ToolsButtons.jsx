/* eslint-disable react/prop-types */
import { useState } from "react";

const ToolsButtons = ({ setFilter, filter }) => {
  const [active, setActive] = useState({ value: false, i: null });

  function ActiveCricle(value, i) {
    if (active.value) {
      if (i == active.i) {
        setActive({ value: false, i: null });
        setFilter(value.value);
        if (filter == null) {
          setFilter(value.value);
        } else {
          setFilter(null);
        }
      } else {
        setActive({ value: true, i: i });
        setFilter(value.value);
      }
    } else {
      setActive({ value: true, i: i });
      setFilter(value.value);
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
    value: "test",
  },
  {
    title: "UX/UI",
    value: "ux",
  },
  {
    title: "Infrastructure",
    value: "inf",
  },
  {
    title: "Mobile",
    value: "mobile",
  },
];
