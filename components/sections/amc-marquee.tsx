const leadingAmcs = [
  { name: "Motilal Oswal Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 0 },
  { name: "Mirae Asset Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 33.333 },
  { name: "SBI Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 66.667 },
  { name: "Aditya Birla Sun Life Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 100 },
  { name: "Axis Mutual Fund", sheet: "/amc-artwork/amc-row-axis.png", position: 100 },
  { name: "Bandhan Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 0 },
  { name: "DSP Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 33.333 },
  { name: "Franklin Templeton Investments", sheet: "/amc-artwork/amc-row-alternates.png", position: 66.667 },
  { name: "Edelweiss Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 100 },
];

export function AmcMarquee() {
  return (
    <section className="section-rule overflow-hidden bg-[#131313] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium tracking-[.18em] text-[#479ffa]">ASSOCIATED WITH LEADING MUTUAL FUND AMCS</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.07em] md:text-5xl">More choice for every investment goal.</h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-[#868f97]">Explore suitable schemes across established Indian mutual fund companies through one guided investment journey.</p>
        </div>
      </div>
      <div className="amc-marquee mt-9 border-y border-white/10 bg-[#0b0b0b] py-4" aria-label="Selected leading Indian mutual fund asset management companies">
        <div className="amc-marquee-track flex w-max">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0 gap-3 pr-3" aria-hidden={set === 1}>
              {leadingAmcs.map((amc) => (
                <div key={`${set}-${amc.name}`} className="grid h-28 w-[290px] shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.025] px-4 transition hover:border-[#4ebe96]/40 hover:bg-[#4ebe96]/[.04]">
                  <span
                    role="img"
                    aria-label={`${amc.name} logo`}
                    className="h-20 w-[250px] shrink-0 rounded-lg border border-[#d0d0d0] bg-white bg-no-repeat"
                    style={{ backgroundImage: `url(${amc.sheet})`, backgroundPosition: `${amc.position}% center`, backgroundSize: "400% 100%" }}
                  >
                    <span className="sr-only">{amc.name}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl px-6 text-[10px] leading-4 text-[#69727a]">AMC marks are shown for platform-access context. Availability and distributor relationships are subject to verification; marks belong to their respective owners and do not imply endorsement.</p>
    </section>
  );
}
