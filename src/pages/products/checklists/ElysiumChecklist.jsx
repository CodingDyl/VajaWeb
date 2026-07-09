/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  IconCheck,
  IconChevronDown,
  IconClipboardList,
  IconDownload,
  IconFileDescription,
  IconMail,
  IconNotes,
  IconPrinter,
  IconRulerMeasure,
  IconTool,
  IconUser,
} from '@tabler/icons-react';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SEOHead } from '../../../components/SEOHead';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import {
  clad_black_pine,
  elysium_1,
  elysium_2,
  imersive_black_pine,
  japanese_cedar,
  lunawood,
  oak_sauna_board,
  obeche_main,
  pine_main,
  pine_stained_black,
  rugged_black_stained_rough_pine,
  thermo_pine_main,
  thermo_pine_tongue_groove,
  triple_shadow_thermo_pine,
  triple_shadows_pine,
  warm_pine_sauna_board,
  wrc_main,
} from '../../../assets';

const woodOptions = [
  { name: 'Black Pine Tongue & Groove', image: pine_stained_black, recommendedFor: 'Elysium exterior finish' },
  { name: 'Obeche Slats', image: obeche_main, recommendedFor: 'Benches and high-contact interior surfaces' },
  { name: 'Cladded Black Pine', image: clad_black_pine, recommendedFor: 'Feature cladding' },
  { name: 'Immersive Black Pine', image: imersive_black_pine, recommendedFor: 'Dark interior statement finish' },
  { name: 'Rugged Black Stained Rough Pine', image: rugged_black_stained_rough_pine, recommendedFor: 'Rustic outdoor cladding' },
  { name: 'Thermo Pine Tongue & Groove', image: thermo_pine_tongue_groove, recommendedFor: 'Heat-treated wall lining' },
  { name: 'Thermo Pine', image: thermo_pine_main, recommendedFor: 'Warm modern cladding' },
  { name: 'Triple Shadow Pine', image: triple_shadows_pine, recommendedFor: 'Linear shadow profile' },
  { name: 'Triple Shadow Thermo Pine', image: triple_shadow_thermo_pine, recommendedFor: 'Premium shadow profile' },
  { name: 'Warm Pine Sauna Board', image: warm_pine_sauna_board, recommendedFor: 'Traditional sauna board finish' },
  { name: 'Pine Tongue & Groove', image: pine_main, recommendedFor: 'Classic practical lining' },
  { name: 'Oak Sauna Board', image: oak_sauna_board, recommendedFor: 'Premium warm interior' },
  { name: 'Western Red Cedar', image: wrc_main, recommendedFor: 'Aromatic premium finish' },
  { name: 'Japanese Cedar', image: japanese_cedar, recommendedFor: 'Soft luxury timber tone' },
  { name: 'Lunawood', image: lunawood, recommendedFor: 'Thermowood-style premium option' },
];

const checklistGroups = [
  {
    id: 'layout',
    title: 'Layout Confirmation',
    icon: IconRulerMeasure,
    items: [
      'Sauna and shower combo confirmed',
      'Final external dimensions confirmed',
      'Door position and swing direction confirmed',
      'Shower zone position confirmed',
      'Window or glass placement confirmed',
      'Drainage route confirmed',
    ],
  },
  {
    id: 'materials',
    title: 'Material Confirmation',
    icon: IconClipboardList,
    items: [
      'Exterior wood species selected',
      'Interior wall finish selected',
      'Bench wood selected',
      'Floor or duckboard finish confirmed',
      'Glass tint or clarity confirmed',
      'Visible hardware finish confirmed',
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Services',
    icon: IconTool,
    items: [
      'Heater type and controller position confirmed',
      'Electrical supply requirements acknowledged',
      'LED lighting position confirmed',
      'Ventilation provision confirmed',
      'Shower mixer and outlet style confirmed',
      'Site access and installation constraints recorded',
    ],
  },
];

const accessoryOptions = [
  'Backrest lighting',
  'Under-bench lighting',
  'Sauna bucket and ladle',
  'Thermometer',
  'Sand timer',
  'Headrests',
  'Towel hooks',
  'Robe hooks',
  'Exterior step',
  'Maintenance oil or aftercare kit',
];

const emailJsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'X2fstaygJ1stzvuEF',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_da22vjp',
  checklistTemplateId: import.meta.env.VITE_EMAILJS_CHECKLIST_TEMPLATE_ID || 'template_nxq94qv',
  recipientEmail: import.meta.env.VITE_VAJA_CHECKLIST_EMAIL || 'tyler@vaja.co.za',
};

const initialForm = {
  clientName: '',
  clientEmail: '',
  projectReference: '',
  contactNumber: '',
  siteAddress: '',
  targetInstallDate: '',
  exteriorWood: 'Black Pine Tongue & Groove',
  interiorWood: 'Obeche Slats',
  benchWood: 'Obeche Slats',
  doorPreference: 'Glass sauna door',
  glassPreference: 'Clear glass',
  heaterPreference: 'Electric sauna heater',
  showerPreference: 'Integrated outdoor shower',
  lightingPreference: 'Warm white LED backrest lighting',
  accessories: ['Backrest lighting'],
  checklist: checklistGroups.reduce((accumulator, group) => {
    group.items.forEach((item) => {
      accumulator[item] = false;
    });
    return accumulator;
  }, {}),
  notes: '',
};

function Field({ id, label, value, onChange, type = 'text', placeholder }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-secondary">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-secondary/25 bg-primary px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
      />
    </label>
  );
}

function SelectField({ id, label, value, onChange, options }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-secondary">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-secondary/25 bg-primary px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChoiceCard({ option, selected, onSelect, label }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.name)}
      aria-pressed={selected}
      className={`group overflow-hidden rounded-lg border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        selected ? 'border-accent ring-2 ring-accent/30' : 'border-secondary/15'
      }`}
    >
      <div className="aspect-[5/3] overflow-hidden">
        <img
          src={option.image}
          alt={option.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-secondary">{option.name}</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">{option.recommendedFor}</p>
          </div>
          {selected && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <IconCheck size={16} />
            </span>
          )}
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-secondary/70">{label}</p>
      </div>
    </button>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="border-b border-secondary/15 py-3">
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/70">{label}</dt>
      <dd className="mt-1 text-sm text-gray-700">{value || 'Not specified'}</dd>
    </div>
  );
}

function CollapsibleSection({ id, title, description, icon: Icon, isOpen, onToggle, children, summary }) {
  return (
    <section className="overflow-hidden rounded-lg bg-white shadow-lg">
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-primary/70 sm:p-8"
      >
        <span className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Icon size={22} />
          </span>
          <span>
            <span className="block text-2xl font-bold text-secondary">{title}</span>
            <span className="mt-1 block text-sm leading-6 text-gray-500">{description}</span>
            {!isOpen && summary && (
              <span className="mt-3 block rounded-md border border-secondary/15 bg-primary px-3 py-2 text-xs leading-5 text-gray-500">
                {summary}
              </span>
            )}
          </span>
        </span>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/20 text-secondary">
          <IconChevronDown
            size={20}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <div id={`${id}-panel`} className="border-t border-secondary/10 px-5 pb-5 sm:px-8 sm:pb-8">
          {children}
        </div>
      )}
    </section>
  );
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildDocumentHtml(form, completedItems, generatedDate) {
  const accessoryList = form.accessories.length ? form.accessories.map(escapeHtml).join(', ') : 'None selected';
  const checklistRows = checklistGroups
    .map((group) => {
      const items = group.items
        .map((item) => `<li>${form.checklist[item] ? '[x]' : '[ ]'} ${escapeHtml(item)}</li>`)
        .join('');
      return `<h2>${escapeHtml(group.title)}</h2><ul>${items}</ul>`;
    })
    .join('');

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Elysium Sauna Specification - ${escapeHtml(form.clientName || 'Client')}</title>
    <style>
      body { font-family: Georgia, 'Times New Roman', serif; color: #3f3832; margin: 40px; line-height: 1.55; }
      h1 { color: #9A887B; margin-bottom: 4px; }
      h2 { color: #9A887B; margin-top: 28px; border-bottom: 1px solid #d8d0c6; padding-bottom: 6px; }
      dl { display: grid; grid-template-columns: 180px 1fr; gap: 8px 20px; }
      dt { font-weight: 700; color: #6c5d52; }
      dd { margin: 0; }
      ul { padding-left: 20px; }
      .meta { color: #6f6a64; }
      .box { border: 1px solid #d8d0c6; padding: 18px; margin-top: 20px; }
      .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 52px; }
      .line { border-top: 1px solid #3f3832; padding-top: 8px; }
    </style>
  </head>
  <body>
    <h1>Elysium Sauna Client Specification</h1>
    <p class="meta">Generated ${escapeHtml(generatedDate)}. ${completedItems} checklist items confirmed.</p>
    <div class="box">
      <dl>
        <dt>Client</dt><dd>${escapeHtml(form.clientName || 'Not specified')}</dd>
        <dt>Email</dt><dd>${escapeHtml(form.clientEmail || 'Not specified')}</dd>
        <dt>Project reference</dt><dd>${escapeHtml(form.projectReference || 'Not specified')}</dd>
        <dt>Contact number</dt><dd>${escapeHtml(form.contactNumber || 'Not specified')}</dd>
        <dt>Site address</dt><dd>${escapeHtml(form.siteAddress || 'Not specified')}</dd>
        <dt>Target install date</dt><dd>${escapeHtml(form.targetInstallDate || 'Not specified')}</dd>
        <dt>Exterior wood</dt><dd>${escapeHtml(form.exteriorWood)}</dd>
        <dt>Interior wood</dt><dd>${escapeHtml(form.interiorWood)}</dd>
        <dt>Bench wood</dt><dd>${escapeHtml(form.benchWood)}</dd>
        <dt>Door</dt><dd>${escapeHtml(form.doorPreference)}</dd>
        <dt>Glass</dt><dd>${escapeHtml(form.glassPreference)}</dd>
        <dt>Heater</dt><dd>${escapeHtml(form.heaterPreference)}</dd>
        <dt>Shower</dt><dd>${escapeHtml(form.showerPreference)}</dd>
        <dt>Lighting</dt><dd>${escapeHtml(form.lightingPreference)}</dd>
        <dt>Accessories</dt><dd>${accessoryList}</dd>
      </dl>
    </div>
    ${checklistRows}
    <h2>Client Notes</h2>
    <p>${escapeHtml(form.notes || 'No additional notes recorded.')}</p>
    <div class="signatures">
      <div class="line">Client approval signature</div>
      <div class="line">Vaja project approval signature</div>
    </div>
  </body>
</html>`;
}

function buildDocumentText(form, completedItems, totalItems, generatedDate) {
  const checklistText = checklistGroups
    .map((group) => {
      const items = group.items
        .map((item) => `${form.checklist[item] ? '[x]' : '[ ]'} ${item}`)
        .join('\n');
      return `${group.title}\n${items}`;
    })
    .join('\n\n');

  return `Elysium Sauna Client Specification
Generated: ${generatedDate}
Checklist confirmed: ${completedItems}/${totalItems}

Client: ${form.clientName || 'Not specified'}
Email: ${form.clientEmail || 'Not specified'}
Contact number: ${form.contactNumber || 'Not specified'}
Project reference: ${form.projectReference || 'Not specified'}
Site address: ${form.siteAddress || 'Not specified'}
Target install date: ${form.targetInstallDate || 'Not specified'}

Exterior wood: ${form.exteriorWood}
Interior wood: ${form.interiorWood}
Bench wood: ${form.benchWood}
Door: ${form.doorPreference}
Glass: ${form.glassPreference}
Heater: ${form.heaterPreference}
Shower: ${form.showerPreference}
Lighting: ${form.lightingPreference}
Accessories: ${form.accessories.join(', ') || 'None selected'}

${checklistText}

Client notes and exclusions:
${form.notes || 'No additional notes recorded.'}

Approval:
Client approval signature: ______________________________
Vaja project approval signature: ________________________`;
}

export default function ElysiumChecklist() {
  const [form, setForm] = useState(initialForm);
  const [openSections, setOpenSections] = useState({
    details: true,
    wood: false,
    build: false,
    signoff: false,
    notes: false,
  });
  const [emailStatus, setEmailStatus] = useState('idle');
  const [emailMessage, setEmailMessage] = useState('');
  const generatedDate = useMemo(
    () =>
      new Intl.DateTimeFormat('en-ZA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(new Date()),
    [],
  );

  const completedItems = Object.values(form.checklist).filter(Boolean).length;
  const totalItems = Object.keys(form.checklist).length;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);
  const woodNames = woodOptions.map((option) => option.name);

  useEffect(() => {
    emailjs.init(emailJsConfig.publicKey);
  }, []);

  const updateForm = (key, value) => {
    setForm((currentForm) => ({ ...currentForm, [key]: value }));
    if (emailMessage) {
      setEmailMessage('');
      setEmailStatus('idle');
    }
  };

  const toggleSection = (sectionId) => {
    setOpenSections((currentSections) => ({
      ...currentSections,
      [sectionId]: !currentSections[sectionId],
    }));
  };

  const toggleChecklistItem = (item) => {
    setForm((currentForm) => ({
      ...currentForm,
      checklist: {
        ...currentForm.checklist,
        [item]: !currentForm.checklist[item],
      },
    }));
  };

  const toggleAccessory = (option) => {
    setForm((currentForm) => {
      const hasOption = currentForm.accessories.includes(option);
      return {
        ...currentForm,
        accessories: hasOption
          ? currentForm.accessories.filter((item) => item !== option)
          : [...currentForm.accessories, option],
      };
    });
  };

  const downloadSpecification = () => {
    const documentHtml = buildDocumentHtml(form, completedItems, generatedDate);
    const blob = new Blob([documentHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeClientName = form.clientName.trim().replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'client';

    link.href = url;
    link.download = `elysium-sauna-specification-${safeClientName}.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const emailSpecification = async () => {
    const trimmedClientName = form.clientName.trim();
    const trimmedClientEmail = form.clientEmail.trim();
    const trimmedContactNumber = form.contactNumber.trim();

    setEmailMessage('');

    if (!trimmedClientEmail && !trimmedContactNumber) {
      setEmailStatus('error');
      setEmailMessage('Add at least one client contact method before emailing the specification to Vaja.');
      return;
    }

    setEmailStatus('sending');

    try {
      const documentHtml = buildDocumentHtml(form, completedItems, generatedDate);
      const documentText = buildDocumentText(form, completedItems, totalItems, generatedDate);

      await emailjs.send(emailJsConfig.serviceId, emailJsConfig.checklistTemplateId, {
        from_name: trimmedClientName || 'Elysium checklist client',
        from_email: trimmedClientEmail || 'website@vaja.co.za',
        reply_to: trimmedClientEmail || '',
        to_name: 'Vaja',
        to_email: emailJsConfig.recipientEmail,
        client_name: trimmedClientName || 'Not specified',
        client_email: trimmedClientEmail || 'Not specified',
        client_contact: trimmedContactNumber || 'Not specified',
        contact_number: trimmedContactNumber || 'Not specified',
        mobile: trimmedContactNumber,
        project_reference: form.projectReference || 'Not specified',
        product_name: 'Elysium',
        subject: `Elysium checklist submission${form.projectReference ? ` - ${form.projectReference}` : ''}`,
        message: documentText,
        document_text: documentText,
        document_html: documentHtml,
      });

      setEmailStatus('success');
      setEmailMessage(`Specification emailed to Vaja${trimmedClientEmail ? ` from ${trimmedClientEmail}` : ''}.`);
    } catch (error) {
      console.error('Specification email failed:', error);
      setEmailStatus('error');
      setEmailMessage('Could not send the specification. Check the EmailJS template settings and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-primary text-gray-700">
      <SEOHead
        title="Elysium Sauna Client Specification | Vaja"
        description="Private Elysium sauna checklist for confirming materials, layout, services, and client expectations before quoting or job-card approval."
        canonicalUrl="/client-checklists/elysium"
        noindex
      />

      <Navbar />

      <main>
        <motion.section
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36"
        >
          <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_20%_20%,rgba(164,183,146,0.35),transparent_32%),linear-gradient(135deg,#f5f2ed_0%,#ded5c7_100%)]" />
          <div className="container relative mx-auto">
            <div className="grid items-end gap-10 lg:grid-cols-[1.04fr_0.96fr]">
              <motion.div variants={fadeIn('right', 'spring', 0.2, 0.75)} className="max-w-3xl">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary backdrop-blur">
                  <IconFileDescription size={16} />
                  Private pilot checklist
                </p>
                <h1 className="text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
                  Elysium Sauna Specification
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                  Confirm the exact Elysium materials, layout choices, shower details, services, and accessories before the quote or job card is signed off.
                </p>
                <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {['Client approval', 'Material clarity', 'Job-card document'].map((item) => (
                    <div key={item} className="rounded-md border border-secondary/15 bg-white/60 p-4 shadow-sm backdrop-blur">
                      <IconCheck className="mb-3 text-accent" size={22} />
                      <p className="text-sm font-semibold text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeIn('left', 'spring', 0.3, 0.75)} className="relative">
                <div className="overflow-hidden rounded-lg border-4 border-white bg-white shadow-2xl">
                  <img
                    src={elysium_1}
                    alt="Elysium sauna and shower combo"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 rounded-lg border border-secondary/15 bg-primary/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary/70">Checklist progress</p>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-4xl font-bold text-secondary">{completionPercentage}%</span>
                    <span className="pb-1 text-sm text-gray-500">
                      {completedItems}/{totalItems} confirmed
                    </span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary/15">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${completionPercentage}%` }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="container mx-auto grid gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
          <div className="space-y-8">
            <CollapsibleSection
              id="details"
              title="Client & Project Details"
              description="Optional project identifiers. Add at least one contact method before emailing to Vaja."
              icon={IconUser}
              isOpen={openSections.details}
              onToggle={toggleSection}
              summary={`${form.clientName || 'Client name not set'} · ${form.clientEmail || form.contactNumber || 'Contact method needed for email'}`}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="clientName" label="Client name" value={form.clientName} onChange={(value) => updateForm('clientName', value)} placeholder="Full name or company" />
                <Field id="clientEmail" label="Client email" type="email" value={form.clientEmail} onChange={(value) => updateForm('clientEmail', value)} placeholder="client@example.com" />
                <Field id="projectReference" label="Project reference" value={form.projectReference} onChange={(value) => updateForm('projectReference', value)} placeholder="Quote or job-card number" />
                <Field id="contactNumber" label="Contact number" value={form.contactNumber} onChange={(value) => updateForm('contactNumber', value)} placeholder="+27..." />
                <Field id="targetInstallDate" label="Target install date" type="date" value={form.targetInstallDate} onChange={(value) => updateForm('targetInstallDate', value)} />
                <div className="md:col-span-2">
                  <Field id="siteAddress" label="Site address" value={form.siteAddress} onChange={(value) => updateForm('siteAddress', value)} placeholder="Installation address" />
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              id="wood"
              title="Wood Selection"
              description="Skip this block to keep the original Elysium material specification."
              icon={IconClipboardList}
              isOpen={openSections.wood}
              onToggle={toggleSection}
              summary={`Default active: ${form.exteriorWood} exterior, ${form.interiorWood} interior, ${form.benchWood} benches`}
            >
              <div className="grid gap-5 md:grid-cols-3">
                <SelectField id="exteriorWood" label="Exterior wood" value={form.exteriorWood} onChange={(value) => updateForm('exteriorWood', value)} options={woodNames} />
                <SelectField id="interiorWood" label="Interior wall wood" value={form.interiorWood} onChange={(value) => updateForm('interiorWood', value)} options={woodNames} />
                <SelectField id="benchWood" label="Bench wood" value={form.benchWood} onChange={(value) => updateForm('benchWood', value)} options={woodNames} />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {woodOptions.map((option) => (
                  <ChoiceCard
                    key={option.name}
                    option={option}
                    selected={[form.exteriorWood, form.interiorWood, form.benchWood].includes(option.name)}
                    onSelect={(value) => updateForm('exteriorWood', value)}
                    label="Tap to set exterior"
                  />
                ))}
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              id="build"
              title="Build Preferences"
              description="Optional finish and system preferences. Defaults remain the original Elysium design."
              icon={IconTool}
              isOpen={openSections.build}
              onToggle={toggleSection}
              summary={`${form.doorPreference} · ${form.heaterPreference} · ${form.showerPreference}`}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <SelectField id="doorPreference" label="Door preference" value={form.doorPreference} onChange={(value) => updateForm('doorPreference', value)} options={['Glass sauna door', 'Timber framed glass door', 'Full timber door', 'To be confirmed on drawing']} />
                <SelectField id="glassPreference" label="Glass preference" value={form.glassPreference} onChange={(value) => updateForm('glassPreference', value)} options={['Clear glass', 'Grey tinted glass', 'Bronze tinted glass', 'Frosted/privacy glass']} />
                <SelectField id="heaterPreference" label="Heater preference" value={form.heaterPreference} onChange={(value) => updateForm('heaterPreference', value)} options={['Electric sauna heater', 'Electric heater with external controller', 'Wood-fired heater', 'To be specified by Vaja']} />
                <SelectField id="showerPreference" label="Shower preference" value={form.showerPreference} onChange={(value) => updateForm('showerPreference', value)} options={['Integrated outdoor shower', 'Cold rinse only', 'Hot and cold mixer', 'Shower provision only']} />
                <div className="md:col-span-2">
                  <SelectField id="lightingPreference" label="Lighting preference" value={form.lightingPreference} onChange={(value) => updateForm('lightingPreference', value)} options={['Warm white LED backrest lighting', 'Under-bench LED lighting', 'Ceiling downlight provision', 'No integrated lighting']} />
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold text-secondary">Accessories</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {accessoryOptions.map((option) => {
                    const selected = form.accessories.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleAccessory(option)}
                        aria-pressed={selected}
                        className={`flex min-h-12 items-center justify-between rounded-md border px-4 py-3 text-left text-sm transition ${
                          selected
                            ? 'border-accent bg-accent/10 text-secondary'
                            : 'border-secondary/15 bg-primary text-gray-600 hover:border-accent/60'
                        }`}
                      >
                        <span>{option}</span>
                        {selected && <IconCheck size={18} className="text-accent" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              id="signoff"
              title="Sign-off Checklist"
              description="Optional confirmation ticks. Unticked items show Vaja what still needs discussion."
              icon={IconNotes}
              isOpen={openSections.signoff}
              onToggle={toggleSection}
              summary={`${completedItems}/${totalItems} confirmation items ticked`}
            >
              <div className="grid gap-5 lg:grid-cols-3">
                {checklistGroups.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <div key={group.id} className="rounded-lg border border-secondary/15 bg-primary p-4">
                      <div className="mb-4 flex items-center gap-3">
                        <GroupIcon size={20} className="text-accent" />
                        <h3 className="font-bold text-secondary">{group.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <label key={item} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600">
                            <input
                              type="checkbox"
                              checked={form.checklist[item]}
                              onChange={() => toggleChecklistItem(item)}
                              className="mt-1 h-4 w-4 rounded border-secondary/40 text-accent focus:ring-accent"
                            />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              id="notes"
              title="Client Notes & Exclusions"
              description="Optional free-text decisions, constraints, exclusions, or unknowns."
              icon={IconFileDescription}
              isOpen={openSections.notes}
              onToggle={toggleSection}
              summary={form.notes ? `${form.notes.slice(0, 96)}${form.notes.length > 96 ? '...' : ''}` : 'No additional notes recorded'}
            >
              <label htmlFor="notes" className="block">
                <textarea
                  id="notes"
                  value={form.notes}
                  onChange={(event) => updateForm('notes', event.target.value)}
                  rows={6}
                  placeholder="Record decisions, exclusions, site constraints, unknowns, or approval conditions."
                  className="w-full rounded-md border border-secondary/25 bg-primary px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
                />
              </label>
            </CollapsibleSection>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-lg bg-white shadow-xl">
              <img src={elysium_2} alt="Elysium sauna alternate view" className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary/70">Document preview</p>
                    <h2 className="mt-1 text-2xl font-bold text-secondary">Job-card spec</h2>
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-accent">{completionPercentage}%</span>
                </div>

                <dl className="space-y-0">
                  <SpecRow label="Client" value={form.clientName} />
                  <SpecRow label="Email" value={form.clientEmail} />
                  <SpecRow label="Project" value={form.projectReference} />
                  <SpecRow label="Exterior" value={form.exteriorWood} />
                  <SpecRow label="Interior" value={form.interiorWood} />
                  <SpecRow label="Bench" value={form.benchWood} />
                  <SpecRow label="Door" value={form.doorPreference} />
                  <SpecRow label="Shower" value={form.showerPreference} />
                  <SpecRow label="Accessories" value={form.accessories.join(', ') || 'None selected'} />
                </dl>

                <div className="mt-6 grid gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
                  >
                    <IconPrinter size={18} />
                    Print / Save PDF
                  </button>
                  <button
                    type="button"
                    onClick={downloadSpecification}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/25 px-5 py-3 text-sm font-bold text-secondary transition hover:border-accent hover:text-accent"
                  >
                    <IconDownload size={18} />
                    Download HTML Spec
                  </button>
                  <button
                    type="button"
                    onClick={emailSpecification}
                    disabled={emailStatus === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-3 text-sm font-bold text-accent transition hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <IconMail size={18} />
                    {emailStatus === 'sending' ? 'Emailing Spec...' : 'Email Spec to Vaja'}
                  </button>
                </div>

                {emailMessage && (
                  <p
                    className={`mt-4 rounded-md px-4 py-3 text-xs leading-5 ${
                      emailStatus === 'success'
                        ? 'bg-accent/10 text-secondary'
                        : 'bg-red-50 text-red-700'
                    }`}
                    role="status"
                  >
                    {emailMessage}
                  </p>
                )}

                <p className="mt-5 text-xs leading-5 text-gray-500">
                  Generated {generatedDate}. Skipped sections keep the original Elysium defaults. Use print, download, or email the specification to Vaja.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <section className="print:block hidden bg-white px-10 py-12 text-gray-800">
        <h1 className="text-3xl font-bold text-secondary">Elysium Sauna Client Specification</h1>
        <p className="mt-2 text-sm text-gray-500">
          Generated {generatedDate}. {completedItems} of {totalItems} checklist items confirmed.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-10">
          <SpecRow label="Client" value={form.clientName} />
          <SpecRow label="Email" value={form.clientEmail} />
          <SpecRow label="Project reference" value={form.projectReference} />
          <SpecRow label="Contact number" value={form.contactNumber} />
          <SpecRow label="Site address" value={form.siteAddress} />
          <SpecRow label="Target install date" value={form.targetInstallDate} />
          <SpecRow label="Exterior wood" value={form.exteriorWood} />
          <SpecRow label="Interior wood" value={form.interiorWood} />
          <SpecRow label="Bench wood" value={form.benchWood} />
          <SpecRow label="Door" value={form.doorPreference} />
          <SpecRow label="Glass" value={form.glassPreference} />
          <SpecRow label="Heater" value={form.heaterPreference} />
          <SpecRow label="Shower" value={form.showerPreference} />
          <SpecRow label="Lighting" value={form.lightingPreference} />
          <SpecRow label="Accessories" value={form.accessories.join(', ') || 'None selected'} />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-5">
          {checklistGroups.map((group) => (
            <div key={group.id}>
              <h2 className="text-lg font-bold text-secondary">{group.title}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    {form.checklist[item] ? '[x]' : '[ ]'} {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold text-secondary">Client Notes</h2>
          <p className="mt-3 whitespace-pre-wrap text-sm">{form.notes || 'No additional notes recorded.'}</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-12 text-sm">
          <div className="border-t border-gray-700 pt-3">Client approval signature</div>
          <div className="border-t border-gray-700 pt-3">Vaja project approval signature</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
