import { LegalPage } from "@/components/legal-page";

export default function TermsPage() {
  return <LegalPage title="Terms of use" intro="These draft terms describe the intended informational nature of the SYDY Capital website." sections={[
    ["Informational purpose", "Website materials are provided for general information and interface demonstration. Nothing on the site constitutes a solicitation, offer, personalized recommendation or guarantee."],
    ["Tools and calculations", "Calculator results depend on user inputs and assumed rates. They exclude factors that may affect actual outcomes, including taxes, fees, inflation, transaction costs and market movements."],
    ["Availability", "Products, services and features may change and may be subject to eligibility, documentation, jurisdictional and regulatory requirements."],
    ["Intellectual property", "SYDY Capital branding and original website materials may not be reproduced without permission. Third-party names and marks remain owned by their respective proprietors."],
  ]} />;
}
