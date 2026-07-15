const sheetUrl =
  "https://docs.google.com/spreadsheets/d/16O34xjgxPgpnPYH7_9SfqLr2Projzqag95l0T7sDBqE/edit?usp=drivesdk";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="masthead">
        <div>
          <p className="eyebrow">Tokenomics research · July 15, 2026</p>
          <h1>LLM inference cost explorer</h1>
          <p className="lede">
            Compare frontier APIs, managed open models, Akash GPU leases, and
            owned infrastructure across monthly token usage.
          </p>
        </div>
        <nav className="actions" aria-label="Research files">
          <a href={sheetUrl} target="_blank" rel="noreferrer">
            Open source spreadsheet
          </a>
          <a href="/llm_inference_cost_comparison_2026-07-15.xlsx" download>
            Download workbook
          </a>
        </nav>
      </header>

      <section className="chart-card" aria-label="Interactive cost chart">
        <iframe
          src="/explorer.html"
          title="Interactive LLM inference cost comparison"
          loading="eager"
        />
      </section>

      <footer>
        Published token prices are shown separately from infrastructure cost
        estimates. Model quality is not normalized; review the labels and
        assumptions before using a crossover point for procurement.
      </footer>
    </main>
  );
}
