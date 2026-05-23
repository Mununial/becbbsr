import { PageLayout } from '../components/PageLayout';
import { AdmissionForm } from '../components/AdmissionForm';

export const AdmissionQuery = () => {
  return (
    <PageLayout
      title="Admission Query 2026-27"
      subtitle="Apply for B.Tech, MBA, or Diploma — get free counselling within 30 minutes."
      badge="🎓 Admissions Open — Limited Seats!"
      badgeColor="bg-secondary/20 text-secondary border-secondary/30"
    >
      {/* Embed the standalone form (without the wrapper section background) */}
      <div className="-mx-6 lg:-mx-12 -mb-20 md:-mb-24">
        <AdmissionForm />
      </div>
    </PageLayout>
  );
};
