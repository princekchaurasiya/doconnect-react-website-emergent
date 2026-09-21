import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";

const CONTENT = {
  "privacy-policy": {
    title: "Privacy Policy | Doconnect",
    description: "How Doconnect collects, uses and protects your personal information when you use our website and home healthcare services.",
    h1: "Privacy Policy",
    sections: [
      { h: "Information we collect", p: "When you book a home visit or contact Doconnect, we collect the details you provide — your name, mobile number, email, location and a description of the patient's requirement. We collect only what is needed to arrange your care." },
      { h: "How we use your information", p: "Your information is used to schedule visits, coordinate doctors, share visit confirmations and follow-ups, and respond to your enquiries. Health-related details you share are used solely for arranging appropriate medical care." },
      { h: "Sharing of information", p: "Patient details are shared only with the doctor or healthcare professional assigned to your visit, to the extent needed for care. We do not sell your personal information to third parties." },
      { h: "Data security", p: "We take reasonable measures to protect your information from unauthorised access. Booking records are stored securely and accessed only by authorised team members." },
      { h: "Your choices", p: `You may request correction or deletion of your personal information by contacting us at ${SITE.email} or ${SITE.phoneDisplay}.` },
      { h: "Contact", p: `For privacy questions, contact Doconnect at ${SITE.email} or call ${SITE.phoneDisplay}. Address: ${SITE.addressFull}.` },
    ],
  },
  terms: {
    title: "Terms & Conditions | Doconnect",
    description: "Terms and conditions governing the use of the Doconnect website and our doctor home visit services in Mumbai.",
    h1: "Terms & Conditions",
    sections: [
      { h: "Our services", p: "Doconnect arranges doctor home visits and at-home medical services in Mumbai. Services are provided by qualified doctors and trained healthcare professionals from our network." },
      { h: "Appointments", p: "Appointments are confirmed subject to doctor availability. Estimated arrival times are shared in good faith and may vary due to traffic, emergencies or clinical priorities. We communicate delays honestly." },
      { h: "Scope of care", p: "Home visits are suitable for non-emergency medical care. Doconnect services are not a substitute for emergency medical services or hospital care where these are required." },
      { h: "Patient responsibilities", p: "Patients and families agree to share accurate medical history, current medications and allergies, and to follow the treating doctor's advice regarding tests, medication and follow-up." },
      { h: "Payments", p: "Visit charges are communicated before confirmation. Payment terms are explained at the time of booking. Prices may vary based on location, service type and timing." },
      { h: "Website content", p: "Content on this website is for general information. It does not constitute medical advice, diagnosis or treatment. Always consult a qualified doctor for your specific condition." },
      { h: "Contact", p: `Questions about these terms: ${SITE.email} or ${SITE.phoneDisplay}.` },
    ],
  },
  disclaimer: {
    title: "Medical Disclaimer | Doconnect",
    description: "Important medical disclaimer regarding the information on the Doconnect website and the scope of our home healthcare services.",
    h1: "Medical Disclaimer",
    sections: [
      { h: "Not medical advice", p: "The content on this website — including blog articles, service descriptions and FAQs — is for general educational purposes only. It is not medical advice, and it does not replace consultation with a qualified doctor." },
      { h: "No diagnosis online", p: "No website content can diagnose your condition. Symptoms that seem minor can occasionally indicate serious illness. When in doubt, consult a doctor promptly." },
      { h: "Emergencies", p: "Doconnect home visits are not an emergency service. For life-threatening emergencies — chest pain, severe breathlessness, unconsciousness, seizures, stroke symptoms, severe injuries or uncontrolled bleeding — contact emergency medical services or go to the nearest emergency department immediately." },
      { h: "Treatment decisions", p: "All diagnosis and treatment decisions are made by the examining doctor based on the individual patient. Outcomes vary between patients, and no specific result can be guaranteed." },
      { h: "Accuracy", p: "We work to keep website information accurate and current, but medical knowledge evolves. If anything on this site conflicts with your doctor's advice, follow your doctor." },
    ],
  },
  "cancellation-refund-policy": {
    title: "Cancellation & Refund Policy | Doconnect",
    description: "How to cancel or reschedule a Doconnect home visit, and how refunds are handled.",
    h1: "Cancellation & Refund Policy",
    sections: [
      { h: "Cancelling or rescheduling", p: `Call or WhatsApp ${SITE.phoneDisplay} as early as possible to cancel or reschedule. Early notice lets us reassign the doctor's time to another patient who may need urgent care.` },
      { h: "Cancellations before dispatch", p: "Visits cancelled before the doctor has been dispatched are not charged, and any advance payment is refunded or adjusted." },
      { h: "Cancellations after dispatch", p: "If a visit is cancelled after the doctor has been dispatched or has arrived, a visit or conveyance charge may apply. This will always have been explained at the time of booking." },
      { h: "Refunds", p: `Approved refunds are processed to the original payment method. For any billing concern, contact ${SITE.email} or call ${SITE.phoneDisplay} and we will resolve it fairly.` },
      { h: "Rescheduling by Doconnect", p: "If we must reschedule due to doctor availability or an emergency, we will inform you promptly and offer the nearest alternative slot or a full refund of any advance paid." },
    ],
  },
};

export default function Legal({ page }) {
  const c = CONTENT[page];
  return (
    <>
      <Seo
        title={c.title}
        description={c.description}
        path={`/${page}`}
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: c.h1, path: `/${page}` }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Legal</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">{c.h1}</h1>
            <p className="mt-4 text-sm text-slate-500">Last updated: July 2026</p>
          </Reveal>
          <div className="mt-10 space-y-8">
            {c.sections.map((s) => (
              <Reveal key={s.h}>
                <section>
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">{s.h}</h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{s.p}</p>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
