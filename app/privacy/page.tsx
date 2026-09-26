import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return <LegalPage title="Privacy" intro="How enquiry information is handled on the SYDY Capital website." sections={[
    ["Enquiries", "When you submit the contact form, your name, email address, optional phone number and message are sent to FormSubmit, our email form provider, for delivery to ashish05beit@gmail.com. Do not include account credentials or other sensitive financial information in the message."],
    ["Retention", "FormSubmit states that it retains form submissions for 30 days. Enquiry emails may remain in the recipient mailbox until removed. Contact SYDY Capital at ashish05beit@gmail.com with a privacy request."],
    ["Other integrations", "The website does not currently offer a client account, payment service or connected market data feed. Any future analytics, CRM or communications integration should be reflected in this notice before launch."],
    ["Security", "Production services should use appropriate access controls, encryption, monitoring and incident-response procedures proportionate to the information processed."],
    ["Your choices", "A production privacy notice should explain access, correction, consent withdrawal and complaint mechanisms available under applicable law."],
  ]} />;
}
