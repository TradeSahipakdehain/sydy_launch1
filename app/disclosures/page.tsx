import { LegalPage } from "@/components/legal-page";

export default function DisclosuresPage() {
  return <LegalPage title="Disclosures" intro="Important context for understanding SYDY Capital’s illustrative investment content, research and tools." sections={[
    ["Illustrative information", "The strategies, returns, risk statistics, calculators and portfolio views on this demonstration website are placeholders for interface review. They are not actual performance records, research recommendations or investment advice."],
    ["Market risk", "Investments in securities and mutual funds are subject to market, credit, liquidity, interest-rate and other risks. Values and income may rise or fall, and past performance does not indicate future outcomes."],
    ["Product suitability", "Investment decisions should reflect an investor’s objectives, financial position, experience, time horizon, liquidity requirements and risk capacity. Product eligibility may also apply."],
    ["Third-party marks", "AMC names and trademarks remain the property of their respective owners. Their appearance must be verified against current distribution relationships and does not by itself imply endorsement."],
  ]} />;
}
