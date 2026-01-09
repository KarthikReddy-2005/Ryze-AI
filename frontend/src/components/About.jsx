import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-bold tracking-wider uppercase text-orange-500">
          OUR STORY
        </p>
        <h1 className="text-4xl md:text-5xl font-medium text-black mt-4">
          We built the ads manager we always wanted
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 text-lg text-zinc-600">
          <p>
            We've run ads at Google, DTC brands, big companies and small
            agencies. Late nights. Tight budgets. Impossible targets.
          </p>
          <p className="mt-4">
            Most ads lose money not because people are bad at marketing but
            because the work is too manual, too slow, and too scattered.
          </p>
          <p className="mt-4">
            It watches your campaigns, fixes what's broken, scales what's
            working. Every day. Without you.
          </p>
          <p className="mt-4">
            Not magic — just the boring stuff done faster and better than any
            human can.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="relative overflow-hidden bg-zinc-100 aspect-square">
            <img
              alt="About Ryze"
              src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
