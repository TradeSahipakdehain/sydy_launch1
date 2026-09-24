import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return <LegalPage title="Privacy" intro="This demonstration currently operates without a connected lead, authentication or analytics backend." sections={[
    ["Information collection", "The current contact form is a client-side interface demonstration and does not store or transmit submitted information. This must be updated when an approved service provider is connected."],
    ["Future integrations", "Before launch, identify each analytics, CRM, communications and identity provider, the information processed, purpose, retention period and applicable consent mechanism."],
    ["Security", "Production services should use appropriate access controls, encryption, monitoring and incident-response procedures proportionate to the information processed."],
    ["Your choices", "A production privacy notice should explain access, correction, consent withdrawal and complaint mechanisms available under applicable law."],
  ]} />;
}
