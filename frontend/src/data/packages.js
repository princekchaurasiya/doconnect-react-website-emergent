export const PACKAGES = [
  {
    slug: "basic-care",
    name: "Basic Care",
    audience: "For individuals who need an occasional doctor consultation at home.",
    includes: [
      "Doctor home consultation as needed",
      "Basic health assessment during the visit",
      "Prescription and treatment guidance",
      "Advice on tests or follow-up if required",
      "Phone and WhatsApp booking support",
    ],
    validity: "Per-visit basis",
    note: "Ideal for one-off illnesses such as fever, infections or general consultations.",
  },
  {
    slug: "family-care",
    name: "Family Care",
    audience: "For families who want a dependable home healthcare partner.",
    includes: [
      "Doctor home visits for family members",
      "Priority scheduling for repeat bookings",
      "Coordination of lab tests from home",
      "Follow-up visit reminders",
      "Single point of contact for the family",
    ],
    validity: "Customised to your family's needs",
    note: "Suited to households that regularly need medical attention at home.",
  },
  {
    slug: "senior-care",
    name: "Senior Care",
    audience: "For elderly patients who need ongoing medical support at home.",
    includes: [
      "Scheduled doctor home visits",
      "Chronic condition monitoring (diabetes, BP and more)",
      "Medication review and management support",
      "Nursing care coordination",
      "Family updates after each visit",
    ],
    validity: "Monthly arrangements available",
    note: "Built for senior citizens who should not be travelling for every consultation.",
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    audience: "For people who want to stay ahead of health problems.",
    includes: [
      "Periodic health checkups at home",
      "Home lab testing coordination",
      "Blood pressure and sugar monitoring",
      "Doctor review of reports",
      "Lifestyle and preventive guidance",
    ],
    validity: "Scheduled checkup plans",
    note: "A structured way to monitor health before problems become urgent.",
  },
];

export const PRICING_NOTE =
  "Package pricing depends on the patient's condition, visit frequency and location. Doconnect shares transparent pricing on a quick call — no hidden charges.";

export const PLAN_INCLUSIONS = [
  "MBBS General Physician doctor home visits",
  "24x7 doctor on call for urgent concerns",
  "Qualified nurse visits at home",
  "Home lab testing — blood & urine sample collection",
  "IV treatments, injections & nebulisation at home",
  "Dressing, wound care & catheterisation support",
  "Physiotherapy sessions at home",
  "A dedicated care coordinator for your family",
  "Updates to family members after every visit",
  "Priority appointment scheduling",
];

export const PLANS = [
  {
    slug: "essential",
    name: "Essential Care",
    tagline: "For independent patients who need consistent medical check-ins at home.",
    recommended: false,
    features: [
      "Scheduled doctor home visits",
      "24x7 doctor on call",
      "Home lab test coordination",
      "Care coordinator support",
      "Family updates after visits",
    ],
  },
  {
    slug: "complete",
    name: "Complete Care",
    tagline: "For patients needing closer monitoring, nursing support and priority care.",
    recommended: true,
    features: [
      "Everything in Essential Care",
      "Qualified nurse visits at home",
      "IV, injection & wound care support",
      "Physiotherapy coordination",
      "Priority appointment scheduling",
      "Post-hospitalisation care planning",
    ],
  },
];
