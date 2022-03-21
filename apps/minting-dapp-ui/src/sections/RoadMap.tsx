const RoadMap = () => (
  <section className="flex flex-col items-center justify-center w-full min-h-screen gap-8 text-2xl bg-amber-300">
    <h2 className="mb-4">Road Map</h2>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <li className="p-4 border-4 text-center rounded border-cyan-600 min-w-[300px] min-h-[200px]">
        <h3 className="mb-4">Phase 1</h3>
        <p>MINT!</p>
      </li>
      <li className="p-4 border-4 text-center rounded border-cyan-600 min-w-[300px] min-h-[200px]">
        <h3 className="mb-4">Phase 2</h3>
        <p>¯\_(ツ)_/¯</p>
      </li>
    </ul>
  </section>
);

export { RoadMap };
