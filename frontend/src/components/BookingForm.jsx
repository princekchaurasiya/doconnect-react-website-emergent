import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CalendarCheck, Loader2 } from "lucide-react";
import { SITE, TIME_SLOTS } from "../data/site";
import { SERVICES } from "../data/services";
import { LOCATIONS } from "../data/locations";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100 transition-colors";

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState({
    patient_name: "",
    mobile: "",
    email: "",
    location: "",
    service: "",
    preferred_date: "",
    preferred_slot: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/appointments`, {
        patient_name: form.patient_name,
        mobile: form.mobile,
        email: form.email || undefined,
        location: form.location || undefined,
        service: form.service || undefined,
        preferred_date: form.preferred_date || undefined,
        preferred_slot: form.preferred_slot || undefined,
        message: form.message || undefined,
      });
      toast.success("Request received. Our team will call you back shortly.");
      setForm({ patient_name: "", mobile: "", email: "", location: "", service: "", preferred_date: "", preferred_slot: "", message: "" });
    } catch (err) {
      toast.error("Could not submit the request. Please call us directly at " + SITE.phoneDisplay);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-4" data-testid="booking-form">
      <div className={compact ? "grid gap-4" : "grid sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="bf-name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Patient Name <span className="text-rose-500">*</span>
          </label>
          <input id="bf-name" data-testid="booking-name-input" required value={form.patient_name} onChange={set("patient_name")} placeholder="Enter patient name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="bf-mobile" className="block text-sm font-medium text-slate-700 mb-1.5">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input id="bf-mobile" data-testid="booking-mobile-input" required type="tel" value={form.mobile} onChange={set("mobile")} placeholder="Enter mobile number" className={inputCls} />
        </div>
        <div>
          <label htmlFor="bf-email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
          <input id="bf-email" data-testid="booking-email-input" type="email" value={form.email} onChange={set("email")} placeholder="Enter your email" className={inputCls} />
        </div>
        <div>
          <label htmlFor="bf-location" className="block text-sm font-medium text-slate-700 mb-1.5">Location in Mumbai</label>
          <select id="bf-location" data-testid="booking-location-select" value={form.location} onChange={set("location")} className={inputCls}>
            <option value="">Select your area</option>
            {LOCATIONS.map((l) => (
              <option key={l.slug} value={l.name}>{l.name}</option>
            ))}
            <option value="Other">Other area in Mumbai</option>
          </select>
        </div>
        <div>
          <label htmlFor="bf-service" className="block text-sm font-medium text-slate-700 mb-1.5">Service Required</label>
          <select id="bf-service" data-testid="booking-service-select" value={form.service} onChange={set("service")} className={inputCls}>
            <option value="">Select a service</option>
            <option value="Doctor Home Visit">Doctor Home Visit</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bf-date" className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
          <input id="bf-date" data-testid="booking-date-input" type="date" value={form.preferred_date} onChange={set("preferred_date")} className={inputCls} />
        </div>
        <div>
          <label htmlFor="bf-slot" className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Time Slot</label>
          <select id="bf-slot" data-testid="booking-slot-select" value={form.preferred_slot} onChange={set("preferred_slot")} className={inputCls}>
            <option value="">Select a time slot</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="bf-msg" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
          <textarea id="bf-msg" data-testid="booking-message-input" rows={3} value={form.message} onChange={set("message")} placeholder="Briefly describe the patient's condition" className={inputCls} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={loading}
          data-testid="booking-submit-btn"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-800 disabled:opacity-60 transition-colors"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarCheck className="h-4 w-4" />}
          Request a Callback
        </button>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="booking-whatsapp-btn"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-6 py-3.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors"
        >
          Book via WhatsApp
        </a>
      </div>
      <p className="text-xs text-slate-500">
        Prefer to talk? Call us directly at{" "}
        <a href={SITE.phoneTel} className="font-semibold text-teal-700">{SITE.phoneDisplay}</a> — we are open 24 hours.
      </p>
    </form>
  );
}
