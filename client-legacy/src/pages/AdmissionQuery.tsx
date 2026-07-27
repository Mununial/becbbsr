import { PageLayout } from '../components/PageLayout';
import { AdmissionForm } from '../components/AdmissionForm';
import { SEO } from '../components/SEO';

export const AdmissionQuery = () => {
  return (
    <PageLayout
      title="Admission Query 2026-27"
      subtitle="Apply for B.Tech, MBA, or Diploma — get free counselling within 30 minutes."
      badge="🎓 Admissions Open — Limited Seats!"
      badgeColor="bg-secondary/20 text-secondary border-secondary/30"
    >
      <SEO 
        title="Admission Query &amp; Inquiry Form 2026-27 | BEC"
        description="Apply online for engineering admissions at Bhubaneswar Engineering College (BEC). Direct registration, 30-minute quick career counseling callback for BTech, MBA, &amp; Diploma."
        keywords={[
          "BTech admission 2026 Odisha",
          "engineering online application form",
          "direct admission engineering college Bhubaneswar",
          "MBA application online BEC",
          "diploma registration form Odisha",
          "free career counseling callback"
        ]}
      />
      {/* Embed the standalone form (without the wrapper section background) */}
      <div className="-mx-6 lg:-mx-12 -mb-20 md:-mb-24">
        <AdmissionForm />
      </div>
    </PageLayout>
  );
};
