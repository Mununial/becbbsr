import { useState, useMemo } from 'react';
import { PageLayout } from '../components/PageLayout';
import { SEO } from '../components/SEO';
import { BookOpen, Download, Search, ChevronRight, FileText, BookMarked, GraduationCap, Filter, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';

interface Note {
  subject: string;
  code: string;
  unit?: string;
  type: 'Notes' | 'Question Bank' | 'Syllabus' | 'Lab Manual' | 'Reference Book';
  link: string;
  size?: string;
}

interface SemesterData {
  sem: number;
  notes: Note[];
}

interface BranchData {
  id: string;
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  semesters: SemesterData[];
}

const branches: BranchData[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cse_math1/view', size: '2.4 MB' },
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Question Bank', link: 'https://drive.google.com/file/d/1example_cse_math1_qb/view', size: '1.1 MB' },
          { subject: 'Engineering Physics', code: 'BSC102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_physics/view', size: '3.2 MB' },
          { subject: 'Basic Electrical Engineering', code: 'ESC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_bee/view', size: '2.8 MB' },
          { subject: 'Engineering Graphics', code: 'ESC103', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_eg/view', size: '5.1 MB' },
          { subject: 'Computer Programming (C)', code: 'ESC104', type: 'Notes', link: 'https://drive.google.com/file/d/1example_c_prog/view', size: '3.5 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Engineering Mathematics - II', code: 'BSC201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_math2/view', size: '2.6 MB' },
          { subject: 'Engineering Chemistry', code: 'BSC202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_chem/view', size: '2.9 MB' },
          { subject: 'Data Structures', code: 'PCC-CS201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ds/view', size: '4.2 MB' },
          { subject: 'Data Structures', code: 'PCC-CS201', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_ds_lab/view', size: '1.8 MB' },
          { subject: 'Digital Electronics', code: 'PCC-CS202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_de/view', size: '3.3 MB' },
          { subject: 'Object Oriented Programming (Java)', code: 'PCC-CS203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_java/view', size: '3.7 MB' },
        ]
      },
      {
        sem: 3,
        notes: [
          { subject: 'Discrete Mathematics', code: 'BSC301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_dm/view', size: '2.8 MB' },
          { subject: 'Computer Organization & Architecture', code: 'PCC-CS301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_coa/view', size: '3.9 MB' },
          { subject: 'Operating Systems', code: 'PCC-CS302', type: 'Notes', link: 'https://drive.google.com/file/d/1example_os/view', size: '4.1 MB' },
          { subject: 'Operating Systems', code: 'PCC-CS302', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_os_lab/view', size: '2.2 MB' },
          { subject: 'Database Management Systems', code: 'PCC-CS303', type: 'Notes', link: 'https://drive.google.com/file/d/1example_dbms/view', size: '3.6 MB' },
          { subject: 'Algorithm Design & Analysis', code: 'PCC-CS304', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ada/view', size: '3.0 MB' },
        ]
      },
      {
        sem: 4,
        notes: [
          { subject: 'Theory of Computation', code: 'PCC-CS401', type: 'Notes', link: 'https://drive.google.com/file/d/1example_toc/view', size: '2.5 MB' },
          { subject: 'Computer Networks', code: 'PCC-CS402', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cn/view', size: '4.4 MB' },
          { subject: 'Software Engineering', code: 'PCC-CS403', type: 'Notes', link: 'https://drive.google.com/file/d/1example_se/view', size: '3.2 MB' },
          { subject: 'Compiler Design', code: 'PCC-CS404', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cd/view', size: '2.9 MB' },
          { subject: 'Microprocessors', code: 'PCC-CS405', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mp/view', size: '3.8 MB' },
        ]
      },
      {
        sem: 5,
        notes: [
          { subject: 'Machine Learning', code: 'PEC-CS501', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ml/view', size: '5.1 MB' },
          { subject: 'Artificial Intelligence', code: 'PCC-CS501', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ai/view', size: '4.3 MB' },
          { subject: 'Web Technologies', code: 'PCC-CS502', type: 'Notes', link: 'https://drive.google.com/file/d/1example_web/view', size: '3.5 MB' },
          { subject: 'Information Security', code: 'OEC-CS501', type: 'Notes', link: 'https://drive.google.com/file/d/1example_is/view', size: '2.7 MB' },
        ]
      },
      {
        sem: 6,
        notes: [
          { subject: 'Cloud Computing', code: 'PEC-CS601', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cc/view', size: '4.0 MB' },
          { subject: 'Big Data Analytics', code: 'PEC-CS602', type: 'Notes', link: 'https://drive.google.com/file/d/1example_bda/view', size: '3.8 MB' },
          { subject: 'IoT & Embedded Systems', code: 'OEC-CS601', type: 'Notes', link: 'https://drive.google.com/file/d/1example_iot/view', size: '3.2 MB' },
          { subject: 'Cryptography & Network Security', code: 'PCC-CS601', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cns/view', size: '2.9 MB' },
        ]
      },
      {
        sem: 7,
        notes: [
          { subject: 'Deep Learning', code: 'PEC-CS701', type: 'Notes', link: 'https://drive.google.com/file/d/1example_dl/view', size: '5.6 MB' },
          { subject: 'Natural Language Processing', code: 'PEC-CS702', type: 'Notes', link: 'https://drive.google.com/file/d/1example_nlp/view', size: '4.1 MB' },
          { subject: 'Software Project Management', code: 'OEC-CS701', type: 'Notes', link: 'https://drive.google.com/file/d/1example_spm/view', size: '2.4 MB' },
        ]
      },
      {
        sem: 8,
        notes: [
          { subject: 'Professional Ethics & IPR', code: 'HSMC801', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ethics/view', size: '1.8 MB' },
          { subject: 'Project Work', code: 'PROJ801', type: 'Syllabus', link: 'https://drive.google.com/file/d/1example_project/view', size: '0.9 MB' },
        ]
      },
    ]
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mech_math1/view', size: '2.4 MB' },
          { subject: 'Engineering Physics', code: 'BSC102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mech_phy/view', size: '3.2 MB' },
          { subject: 'Basic Electrical Engineering', code: 'ESC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mech_bee/view', size: '2.8 MB' },
          { subject: 'Engineering Graphics', code: 'ESC103', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_mech_eg/view', size: '5.1 MB' },
          { subject: 'Workshop Practice', code: 'ESC102', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_workshop/view', size: '3.0 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Engineering Mathematics - II', code: 'BSC201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mech_math2/view', size: '2.6 MB' },
          { subject: 'Engineering Chemistry', code: 'BSC202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mech_chem/view', size: '2.9 MB' },
          { subject: 'Engineering Mechanics', code: 'ESC201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_em/view', size: '4.0 MB' },
          { subject: 'Thermodynamics', code: 'PCC-ME201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_thermo/view', size: '3.7 MB' },
        ]
      },
      {
        sem: 3,
        notes: [
          { subject: 'Strength of Materials', code: 'PCC-ME301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_som/view', size: '4.2 MB' },
          { subject: 'Fluid Mechanics', code: 'PCC-ME302', type: 'Notes', link: 'https://drive.google.com/file/d/1example_fm/view', size: '3.9 MB' },
          { subject: 'Manufacturing Technology - I', code: 'PCC-ME303', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mt1/view', size: '3.5 MB' },
          { subject: 'Theory of Machines', code: 'PCC-ME304', type: 'Notes', link: 'https://drive.google.com/file/d/1example_tom/view', size: '4.1 MB' },
        ]
      },
      {
        sem: 4,
        notes: [
          { subject: 'Heat & Mass Transfer', code: 'PCC-ME401', type: 'Notes', link: 'https://drive.google.com/file/d/1example_hmt/view', size: '3.8 MB' },
          { subject: 'Machine Design - I', code: 'PCC-ME402', type: 'Notes', link: 'https://drive.google.com/file/d/1example_md1/view', size: '4.3 MB' },
          { subject: 'Manufacturing Technology - II', code: 'PCC-ME403', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mt2/view', size: '3.6 MB' },
          { subject: 'Metrology & Quality Control', code: 'PCC-ME404', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mqc/view', size: '2.9 MB' },
        ]
      },
      {
        sem: 5,
        notes: [
          { subject: 'Machine Design - II', code: 'PCC-ME501', type: 'Notes', link: 'https://drive.google.com/file/d/1example_md2/view', size: '4.0 MB' },
          { subject: 'Dynamics of Machinery', code: 'PCC-ME502', type: 'Notes', link: 'https://drive.google.com/file/d/1example_dom/view', size: '3.5 MB' },
          { subject: 'Industrial Engineering', code: 'OEC-ME501', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ie/view', size: '3.1 MB' },
          { subject: 'Refrigeration & Air Conditioning', code: 'PCC-ME503', type: 'Notes', link: 'https://drive.google.com/file/d/1example_rac/view', size: '3.4 MB' },
        ]
      },
      {
        sem: 6,
        notes: [
          { subject: 'Finite Element Analysis', code: 'PEC-ME601', type: 'Notes', link: 'https://drive.google.com/file/d/1example_fea/view', size: '4.5 MB' },
          { subject: 'Power Plant Engineering', code: 'PCC-ME601', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ppe/view', size: '3.9 MB' },
          { subject: 'Robotics & Automation', code: 'PEC-ME602', type: 'Notes', link: 'https://drive.google.com/file/d/1example_robotics/view', size: '3.6 MB' },
        ]
      },
    ]
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    shortName: 'EE',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ee_math1/view', size: '2.4 MB' },
          { subject: 'Basic Electrical Engineering', code: 'ESC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ee_bee/view', size: '3.5 MB' },
          { subject: 'Engineering Physics', code: 'BSC102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ee_phy/view', size: '3.2 MB' },
          { subject: 'Workshop Practice', code: 'ESC102', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_ee_ws/view', size: '2.9 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Circuit Theory', code: 'PCC-EE201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ct/view', size: '3.8 MB' },
          { subject: 'Electromagnetic Fields', code: 'PCC-EE202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_emf/view', size: '3.4 MB' },
          { subject: 'Electrical Machines - I', code: 'PCC-EE203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_em1/view', size: '4.1 MB' },
        ]
      },
      {
        sem: 3,
        notes: [
          { subject: 'Electrical Machines - II', code: 'PCC-EE301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_em2/view', size: '4.3 MB' },
          { subject: 'Power Systems - I', code: 'PCC-EE302', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ps1/view', size: '4.0 MB' },
          { subject: 'Analog Electronics', code: 'PCC-EE303', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ae/view', size: '3.5 MB' },
          { subject: 'Control Systems', code: 'PCC-EE304', type: 'Notes', link: 'https://drive.google.com/file/d/1example_cs/view', size: '3.7 MB' },
        ]
      },
      {
        sem: 4,
        notes: [
          { subject: 'Power Systems - II', code: 'PCC-EE401', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ps2/view', size: '4.2 MB' },
          { subject: 'Power Electronics', code: 'PCC-EE402', type: 'Notes', link: 'https://drive.google.com/file/d/1example_pe/view', size: '4.5 MB' },
          { subject: 'Microcontrollers', code: 'PCC-EE403', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mc/view', size: '3.2 MB' },
          { subject: 'Measurements & Instrumentation', code: 'PCC-EE404', type: 'Notes', link: 'https://drive.google.com/file/d/1example_mi/view', size: '2.9 MB' },
        ]
      },
    ]
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_civil_math1/view', size: '2.4 MB' },
          { subject: 'Engineering Drawing & AutoCAD', code: 'ESC103', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_civil_cad/view', size: '5.5 MB' },
          { subject: 'Building Materials', code: 'PCC-CE101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_bm/view', size: '3.0 MB' },
          { subject: 'Engineering Surveying', code: 'PCC-CE102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_survey/view', size: '3.8 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Structural Analysis - I', code: 'PCC-CE201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_sa1/view', size: '4.2 MB' },
          { subject: 'Fluid Mechanics', code: 'PCC-CE202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_civil_fm/view', size: '3.9 MB' },
          { subject: 'Concrete Technology', code: 'PCC-CE203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_conc/view', size: '3.5 MB' },
          { subject: 'Soil Mechanics', code: 'PCC-CE204', type: 'Notes', link: 'https://drive.google.com/file/d/1example_soil/view', size: '4.1 MB' },
        ]
      },
      {
        sem: 3,
        notes: [
          { subject: 'Structural Analysis - II', code: 'PCC-CE301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_sa2/view', size: '4.4 MB' },
          { subject: 'Design of RCC Structures', code: 'PCC-CE302', type: 'Notes', link: 'https://drive.google.com/file/d/1example_rcc/view', size: '4.8 MB' },
          { subject: 'Irrigation Engineering', code: 'PCC-CE303', type: 'Notes', link: 'https://drive.google.com/file/d/1example_irrig/view', size: '3.3 MB' },
          { subject: 'Environmental Engineering', code: 'PCC-CE304', type: 'Notes', link: 'https://drive.google.com/file/d/1example_env/view', size: '3.0 MB' },
        ]
      },
    ]
  },
  {
    id: 'aeronautical',
    name: 'Aeronautical Engineering',
    shortName: 'AERO',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_aero_math1/view', size: '2.4 MB' },
          { subject: 'Introduction to Aeronautics', code: 'PCC-AE101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_intro_aero/view', size: '3.5 MB' },
          { subject: 'Engineering Graphics', code: 'ESC103', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_aero_eg/view', size: '5.1 MB' },
          { subject: 'Engineering Mechanics', code: 'ESC201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_aero_em/view', size: '4.0 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Aerodynamics - I', code: 'PCC-AE201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_aerodyn1/view', size: '4.5 MB' },
          { subject: 'Aircraft Structures - I', code: 'PCC-AE202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_struct1/view', size: '4.2 MB' },
          { subject: 'Aircraft Propulsion - I', code: 'PCC-AE203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_prop1/view', size: '4.0 MB' },
          { subject: 'Flight Mechanics', code: 'PCC-AE204', type: 'Notes', link: 'https://drive.google.com/file/d/1example_flight/view', size: '3.8 MB' },
        ]
      },
      {
        sem: 3,
        notes: [
          { subject: 'Aerodynamics - II', code: 'PCC-AE301', type: 'Notes', link: 'https://drive.google.com/file/d/1example_aerodyn2/view', size: '4.7 MB' },
          { subject: 'Aircraft Structures - II', code: 'PCC-AE302', type: 'Notes', link: 'https://drive.google.com/file/d/1example_struct2/view', size: '4.3 MB' },
          { subject: 'Avionics', code: 'PCC-AE303', type: 'Notes', link: 'https://drive.google.com/file/d/1example_avionics/view', size: '3.9 MB' },
          { subject: 'Aircraft Design', code: 'PCC-AE304', type: 'Notes', link: 'https://drive.google.com/file/d/1example_acdesign/view', size: '5.2 MB' },
        ]
      },
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture Engineering',
    shortName: 'AGRI',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Engineering Mathematics - I', code: 'BSC101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_agri_math1/view', size: '2.4 MB' },
          { subject: 'Fundamentals of Agronomy', code: 'PCC-AG101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_agron/view', size: '3.2 MB' },
          { subject: 'Soil Science', code: 'PCC-AG102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_soil_sci/view', size: '3.5 MB' },
          { subject: 'Engineering Drawing', code: 'ESC103', type: 'Lab Manual', link: 'https://drive.google.com/file/d/1example_agri_ed/view', size: '4.8 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Farm Machinery', code: 'PCC-AG201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_farm_mach/view', size: '4.0 MB' },
          { subject: 'Irrigation & Drainage', code: 'PCC-AG202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_irrig_drain/view', size: '3.8 MB' },
          { subject: 'Agricultural Process Engineering', code: 'PCC-AG203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_agri_proc/view', size: '3.3 MB' },
        ]
      },
    ]
  },
  {
    id: 'ame',
    name: 'Aircraft Maintenance Engineering',
    shortName: 'AME',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    semesters: [
      {
        sem: 1,
        notes: [
          { subject: 'Aircraft General Knowledge', code: 'AME101', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_agk/view', size: '4.5 MB' },
          { subject: 'Basic Aerodynamics', code: 'AME102', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_aero/view', size: '3.8 MB' },
          { subject: 'Aircraft Materials & Hardware', code: 'AME103', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_mat/view', size: '3.5 MB' },
          { subject: 'DGCA Module 1 - Mathematics', code: 'AME104', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_math/view', size: '2.8 MB' },
        ]
      },
      {
        sem: 2,
        notes: [
          { subject: 'Aircraft Structures', code: 'AME201', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_struct/view', size: '4.2 MB' },
          { subject: 'Piston Engine Technology', code: 'AME202', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_piston/view', size: '4.0 MB' },
          { subject: 'Aircraft Electrical Systems', code: 'AME203', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_elec/view', size: '3.6 MB' },
          { subject: 'DGCA Regulations', code: 'AME204', type: 'Notes', link: 'https://drive.google.com/file/d/1example_ame_reg/view', size: '2.5 MB' },
        ]
      },
    ]
  },
];

const typeColors: Record<string, string> = {
  'Notes': 'bg-blue-100 text-blue-700 border-blue-200',
  'Question Bank': 'bg-red-100 text-red-700 border-red-200',
  'Syllabus': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Lab Manual': 'bg-orange-100 text-orange-700 border-orange-200',
  'Reference Book': 'bg-purple-100 text-purple-700 border-purple-200',
};

const typeIcons: Record<string, string> = {
  'Notes': '📝',
  'Question Bank': '❓',
  'Syllabus': '📋',
  'Lab Manual': '🔬',
  'Reference Book': '📚',
};

const getRealLink = (note: Note, branchId: string): string => {
  if (note.link && note.link.startsWith('http') && !note.link.includes('example')) {
    return note.link;
  }
  if (note.type === 'Syllabus') return '/notes/syllabus_general.pdf';
  if (note.type === 'Lab Manual') return '/notes/lab_manual_general.pdf';
  if (note.type === 'Question Bank') return '/notes/question_bank_general.pdf';
  if (note.type === 'Reference Book') return '/notes/reference_book_general.pdf';

  const subject = note.subject.toLowerCase();
  
  if (subject.includes('math') || subject.includes('discrete')) {
    return '/notes/mathematics_notes.pdf';
  }
  if (subject.includes('physics')) {
    return '/notes/physics_notes.pdf';
  }
  if (subject.includes('chem') || subject.includes('environmental') || subject.includes('soil science')) {
    return '/notes/chemistry_notes.pdf';
  }
  if (
    subject.includes('programming') || 
    subject.includes('java') || 
    subject.includes('data structure') || 
    subject.includes('web tech') || 
    subject.includes('algorithm') ||
    subject.includes('artificial intelligence') ||
    subject.includes('machine learning') ||
    subject.includes('deep learning') ||
    subject.includes('nlp') ||
    subject.includes('cloud') ||
    subject.includes('big data') ||
    subject.includes('cryptography') ||
    subject.includes('security') ||
    subject.includes('database') ||
    subject.includes('operating system') ||
    subject.includes('network') ||
    subject.includes('software') ||
    subject.includes('compiler') ||
    subject.includes('microprocessor')
  ) {
    return '/notes/programming_notes.pdf';
  }
  if (
    subject.includes('electrical') ||
    subject.includes('circuit') ||
    subject.includes('analog') ||
    subject.includes('digital') ||
    subject.includes('control') ||
    subject.includes('power electronics') ||
    subject.includes('microcontroller') ||
    subject.includes('measurement') ||
    subject.includes('electromagnetic') ||
    subject.includes('machine') ||
    subject.includes('power system') ||
    subject.includes('avionics')
  ) {
    return '/notes/basic_electrical_notes.pdf';
  }
  
  if (subject.includes('dgca regulation')) {
    return '/notes/dgca_regulations_notes.pdf';
  }

  if (
    branchId === 'civil' || 
    subject.includes('structure') || 
    subject.includes('concrete') || 
    subject.includes('soil') || 
    subject.includes('survey') || 
    subject.includes('rcc') || 
    subject.includes('irrigation') || 
    subject.includes('agronomy') || 
    subject.includes('building material')
  ) {
    return '/notes/civil_engineering_notes.pdf';
  }
  
  return '/notes/mechanical_engineering_notes.pdf';
};

export const ELearning = () => {
  const { lectureNotes } = useData();
  const currentBranches = useMemo(() => {
    return lectureNotes && lectureNotes.length > 0 ? lectureNotes : branches;
  }, [lectureNotes]);

  const [activeBranch, setActiveBranch] = useState('cse');
  const [activeSem, setActiveSem] = useState(1);
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<string>('All');

  const branch = useMemo(() => currentBranches.find(b => b.id === activeBranch) || currentBranches[0], [activeBranch, currentBranches]);
  const semData = useMemo(() => branch.semesters.find(s => s.sem === activeSem), [branch, activeSem]);

  const filteredNotes = useMemo(() => {
    if (!semData) return [];
    return semData.notes
      .filter(n => {
        const matchSearch = n.subject.toLowerCase().includes(search.toLowerCase()) || n.code.toLowerCase().includes(search.toLowerCase());
        const matchType = activeType === 'All' || n.type === activeType;
        return matchSearch && matchType;
      })
      .map(n => ({
        ...n,
        link: getRealLink(n, activeBranch)
      }));
  }, [semData, search, activeType, activeBranch]);

  const allTypes = ['All', 'Notes', 'Question Bank', 'Lab Manual', 'Syllabus', 'Reference Book'];

  const handleBranchChange = (id: string) => {
    setActiveBranch(id);
    setActiveSem(1);
    setSearch('');
    setActiveType('All');
  };

  return (
    <PageLayout title="E-Learning Portal">
      <SEO
        title="E-Learning Portal | Notes & Study Material | BEC Bhubaneswar"
        description="Download lecture notes, question banks, lab manuals, and study materials for all branches and semesters at Bhubaneswar Engineering College."
        keywords={['BEC notes download', 'engineering notes PDF', 'BEC study material', 'CSE notes Bhubaneswar', 'mechanical notes PDF', 'BPUT notes']}
      />

      <div className="flex flex-col gap-8 mt-4 font-poppins">

        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-500/15 rounded-full blur-[70px] translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
              <BookOpen className="w-10 h-10 text-indigo-300" />
            </div>
            <div className="text-center md:text-left space-y-2">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                <GraduationCap className="w-3.5 h-3.5" /> BEC Study Portal
              </span>
              <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                E-Learning <span className="text-indigo-400 italic">& Notes</span>
              </h2>
              <p className="text-white/50 font-medium text-xs md:text-sm max-w-xl font-inter">
                Download lecture notes, question banks, lab manuals, and syllabus for all branches and semesters — free for all BEC students.
              </p>
            </div>
            <div className="ml-auto hidden lg:flex gap-6 text-center">
              {[{ label: 'Branches', val: currentBranches.length }, { label: 'Subjects', val: '100+' }, { label: 'PDFs', val: '300+' }].map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                  <p className="text-2xl font-black text-indigo-300">{s.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branch Selector */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
            <BookMarked className="w-3.5 h-3.5" /> Select Branch
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {currentBranches.map(b => (
              <button
                key={b.id}
                onClick={() => handleBranchChange(b.id)}
                className={`p-3 rounded-2xl border-2 text-center transition-all duration-300 ${
                  activeBranch === b.id
                    ? `${b.bgColor} ${b.borderColor} ${b.color} shadow-md scale-[1.02]`
                    : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600'
                }`}
              >
                <p className={`text-base font-black ${activeBranch === b.id ? b.color : 'text-slate-500'}`}>{b.shortName}</p>
                <p className="text-[9px] font-bold uppercase tracking-wider mt-0.5 leading-tight opacity-70">
                  {b.name.split(' ').slice(0, 2).join(' ')}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Branch Header */}
            <div className={`${branch.bgColor} ${branch.borderColor} border rounded-2xl p-5 flex items-center gap-4`}>
              <div className={`w-12 h-12 rounded-xl ${branch.bgColor} border ${branch.borderColor} flex items-center justify-center shrink-0`}>
                <BookOpen className={`w-6 h-6 ${branch.color}`} />
              </div>
              <div>
                <h3 className={`font-black text-base uppercase tracking-tight ${branch.color}`}>{branch.name}</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5 font-inter">
                  {branch.semesters.length} Semesters · {branch.semesters.reduce((acc, s) => acc + s.notes.length, 0)} Study Materials Available
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Semester Selector */}
              <div className="lg:col-span-3 space-y-2">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Semester</h4>
                <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-sm space-y-1">
                  {branch.semesters.map(s => (
                    <button
                      key={s.sem}
                      onClick={() => { setActiveSem(s.sem); setSearch(''); setActiveType('All'); }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                        activeSem === s.sem
                          ? `${branch.bgColor} ${branch.color} border ${branch.borderColor}`
                          : 'text-slate-400 hover:bg-slate-50 hover:text-slate-700'
                      }`}
                    >
                      <span>Semester {s.sem}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${activeSem === s.sem ? branch.bgColor + ' ' + branch.color : 'bg-slate-100 text-slate-400'}`}>
                          {s.notes.length}
                        </span>
                        <ChevronRight className="w-3 h-3 opacity-40" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Notes List */}
              <div className="lg:col-span-9 space-y-4">
                {/* Search + Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search subject or code..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-xl text-xs font-medium text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-indigo-300 shadow-sm"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-xl px-3 shadow-sm overflow-x-auto">
                    <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {allTypes.map(t => (
                      <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                          activeType === t
                            ? 'bg-indigo-600 text-white'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes Grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSem}-${activeType}-${search}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {filteredNotes.length === 0 ? (
                      <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center">
                        <FileText className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                        <p className="text-sm font-black text-slate-300 uppercase tracking-wider">No materials found</p>
                        <p className="text-xs text-slate-300 mt-1 font-inter">Try a different filter or search term</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {filteredNotes.map((note, idx) => (
                          <motion.div
                            key={`${note.subject}-${note.type}-${idx}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04 }}
                            className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-4 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                              {typeIcons[note.type]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${typeColors[note.type]}`}>
                                  {note.type}
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5 uppercase tracking-wider">
                                  {note.code}
                                </span>
                              </div>
                              <h5 className="font-black text-primary text-xs uppercase truncate leading-tight group-hover:text-indigo-600 transition-colors">
                                {note.subject}
                              </h5>
                              {note.size && (
                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{note.size}</p>
                              )}
                            </div>
                            <a
                              href={note.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 flex items-center justify-center shrink-0 transition-all duration-200 group/btn"
                              title={`Download ${note.subject} ${note.type}`}
                            >
                              <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Info Banner */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
            <ExternalLink className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h5 className="font-black text-xs text-primary uppercase tracking-wide">Want to contribute study materials?</h5>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 font-inter">
              Faculty can upload notes/PDFs via the admin panel. Students can request materials via the contact page.
            </p>
          </div>
          <a
            href="/contactus"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0"
          >
            Request Notes
          </a>
        </div>

      </div>
    </PageLayout>
  );
};
