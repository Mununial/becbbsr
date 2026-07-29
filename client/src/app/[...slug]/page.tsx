import SlugClient from './SlugClient';

export function generateStaticParams() {
  const routes = [
    'about-college',
    'chairman-ayush-msg',
    'chairman-bec',
    'director-profile',
    'trusty',
    'btech',
    'mba',
    'diploma',
    'aeronautical-engg',
    'agriculture-engg',
    'civil-engg',
    'cse-engg',
    'ee-engg',
    'mechanical-engg',
    'ame',
    'basic-science-humanities',
    'faculties',
    'about_placement',
    'placement',
    'facilities',
    'contactus',
    'career',
    'photo-gallery',
    'achievements',
    'areo-club',
    'seminar-workshop',
    'sports-games',
    'activities',
    'syllabus',
    'admission_query',
    'fees',
    'committees',
    'e-learning',
    'admission/news',
    'admission/programme',
    'admission/procedure',
    'admission/documents',
    'admission/bank-loan',
    'admission/scholarship',
    'admission/contacts',
    'admission/prospectus',
    'privacy-policy',
    'admin'
  ];

  return routes.map(r => ({
    slug: r.split('/')
  }));
}

export default function CatchAllSlugPage() {
  return <SlugClient />;
}
