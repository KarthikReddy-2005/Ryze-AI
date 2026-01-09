import React from "react";

const TiltCard = ({ img, title, text }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <img src={img} alt={title} className="w-full h-52 object-cover" />
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">{text}</p>
    </div>
  );
};

const CaseStudies2 = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
      title: "Motif used Ryze audits to win new retainers",
      text: "Ryze made new-client audits faster and consistent. We could walk into prospect calls with specific issues, clear fixes, and expected impact.",
    },
    {
      img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=2000&auto=format&fit=crop",
      title: "Sanar AI reached 4.3x ROAS in 8 weeks",
      text: "Sanar has moved faster in the last 3 months than the previous year combined. Ryze built the entire growth engine that powers our expansion.",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      title:
        "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
      text: "Ryze didn't just report issues — it shipped fixes. We could see what changed each week and what moved as a result.",
    },
    {
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Another Case Card",
      text: "Each card has its own state so hovering one won't affect the others.",
    },
    {
      img: "https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop",
      title: "Interactive City Card",
      text: "Move your cursor over this card to experience a smooth 3D tilt animation.",
    },
    {
      img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=2000&auto=format&fit=crop",
      title: "Another Case Card",
      text: "Each card has its own state so hovering one won't affect the others.",
    },
  ];

  return (
    <div className="mx-45 my-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
      {cards.map((c, i) => (
        <TiltCard key={i} {...c} />
      ))}
    </div>
  );
};

export default CaseStudies2;
