export interface WhyStudyItem {
  title: string;
  icon: string;
  bg: string;
  desc: string;
}

export interface CareerTrack {
  title: string;
  color: string;
  text: string;
  bg: string;
  iconColor: string;
  roles: string[];
}

export interface FuturePath {
  title: string;
  desc: string;
}

export interface IndustryApp {
  name: string;
  desc: string;
  val: string;
}

export interface DepartmentInfo {
  whyStudyTitle: string;
  whyStudyItems: WhyStudyItem[];
  careerTracks: CareerTrack[];
  recruiters: string[];
  futureScope: FuturePath[];
  industryApps: IndustryApp[];
}

export const departmentData: Record<string, DepartmentInfo> = {
  aero: {
    whyStudyTitle: "Why Study Aeronautical Engineering?",
    whyStudyItems: [
      { title: "Aircraft Design", icon: "Compass", bg: "bg-blue-500/10 text-blue-600", desc: "Learn to sketch, design, and calculate the performance of airplanes and helicopters." },
      { title: "Aircraft Structures", icon: "Layers", bg: "bg-indigo-500/10 text-indigo-600", desc: "Understand how to build strong airframes that can handle extreme flight forces." },
      { title: "Aerodynamics", icon: "Wind", bg: "bg-cyan-500/10 text-cyan-600", desc: "Study how air flows around wings and bodies, using computer simulations to reduce drag." },
      { title: "Aircraft Propulsion Systems", icon: "Flame", bg: "bg-amber-500/10 text-amber-600", desc: "Find out how jet engines and rocket propellers generate the power needed to fly." },
      { title: "Flight Mechanics", icon: "TrendingUp", bg: "bg-emerald-500/10 text-emerald-600", desc: "Explore how pilots control planes and how we test aircraft stability in mid-air." },
      { title: "Avionics Systems", icon: "Cpu", bg: "bg-purple-500/10 text-purple-600", desc: "Get hands-on experience with digital cockpits, autopilots, and navigation tools." },
      { title: "Aerospace Materials", icon: "Shield", bg: "bg-rose-500/10 text-rose-600", desc: "Test advanced materials like carbon fiber and titanium to make planes lighter and stronger." },
      { title: "Aircraft Maintenance", icon: "Settings", bg: "bg-slate-500/10 text-slate-700", desc: "Learn how to inspect airplanes, repair components, and follow safety rules." },
      { title: "UAV & Drone Technology", icon: "Radio", bg: "bg-teal-500/10 text-teal-600", desc: "Build and program autonomous drones, flight control boards, and camera sensors." },
      { title: "Space Technology Fundamentals", icon: "Globe", bg: "bg-sky-500/10 text-sky-600", desc: "Learn the basics of space travel, satellite paths, and rocket launch engineering." }
    ],
    careerTracks: [
      {
        title: "Design & Core Engg",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Aircraft Design Engineer", "Aerospace Engineer", "Avionics Engineer", "UAV / Drone Engineer"]
      },
      {
        title: "Research & Defence",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["Research Scientist", "ISRO Scientist", "DRDO Engineer", "Defence Technology Specialist"]
      },
      {
        title: "Aviation & Operations",
        color: "border-amber-500",
        text: "text-amber-600",
        bg: "bg-amber-50/50",
        iconColor: "text-amber-500",
        roles: ["Flight Test Engineer", "Aircraft Maintenance Engineer", "Airline Technical Operations", "Airline Systems Engineer"]
      }
    ],
    recruiters: [
      "ISRO", "DRDO", "HAL", "Boeing", "Airbus", "Tata Advanced Systems",
      "Mahindra Aerospace", "L&T Defence", "Indigo Airlines", "Air India",
      "SpiceJet", "Collins Aerospace"
    ],
    futureScope: [
      { title: "Advanced Aerospace Engineering", desc: "Go for higher studies like M.Tech to design advanced aircraft engines and structures." },
      { title: "Avionics & International Studies", desc: "Pursue Avionics or MS abroad to work on advanced flight control and radar systems." },
      { title: "Aviation Management & Certification", desc: "Get an MBA in Aviation Management or specialize in safety and airworthiness standards." },
      { title: "Research & Flight Operations", desc: "Do research on UAVs and aerodynamics, or join pilot training to get a commercial license." }
    ],
    industryApps: [
      { name: "Aviation Industry", desc: "Working with airlines to design and run commercial aircraft safely.", val: "95%" },
      { name: "Defence Sector", desc: "Designing fighter jets, military transport planes, and missiles for national defence.", val: "90%" },
      { name: "Space Research", desc: "Building satellites, spaceships, and rocket launch vehicles.", val: "88%" },
      { name: "UAV & Drone Industry", desc: "Creating smart drones for delivery, farming, and security checks.", val: "92%" },
      { name: "Aircraft Manufacturing", desc: "Manufacturing aircraft parts and assembling passenger airplanes.", val: "85%" },
      { name: "Airline Operations", desc: "Planning flight routes, schedules, and managing airline technical issues.", val: "89%" },
      { name: "Aircraft Maintenance", desc: "Servicing and repairing passenger jets in standard hangars.", val: "94%" },
      { name: "Research & Development", desc: "Testing new designs in wind tunnels and using computer simulations.", val: "87%" },
      { name: "Satellite Projects", desc: "Tracking and communicating with satellites orbiting the earth.", val: "83%" }
    ]
  },
  cse: {
    whyStudyTitle: "Why Study Computer Science & Engineering?",
    whyStudyItems: [
      { title: "Software Development", icon: "Code", bg: "bg-blue-500/10 text-blue-600", desc: "Build web apps, databases, and mobile applications that millions of people use every day." },
      { title: "Artificial Intelligence", icon: "Sparkles", bg: "bg-indigo-500/10 text-indigo-600", desc: "Train computers to think, see, and make decisions like humans using smart algorithms." },
      { title: "Data Science", icon: "BarChart", bg: "bg-cyan-500/10 text-cyan-600", desc: "Analyze huge amounts of data to find trends and help companies make better decisions." },
      { title: "Cybersecurity", icon: "Shield", bg: "bg-rose-500/10 text-rose-600", desc: "Protect websites and computers from hackers, and learn how to secure private data." },
      { title: "Cloud Computing", icon: "Server", bg: "bg-amber-500/10 text-amber-600", desc: "Deploy and manage software on global networks like AWS, Google Cloud, and Azure." },
      { title: "IoT Systems", icon: "Cpu", bg: "bg-purple-500/10 text-purple-600", desc: "Connect physical objects like smart home devices to the internet using sensors and chips." },
      { title: "Full-Stack Web Dev", icon: "Globe", bg: "bg-emerald-500/10 text-emerald-600", desc: "Learn both front-end design and back-end database coding to build complete websites." },
      { title: "Database Systems", icon: "Layers", bg: "bg-slate-500/10 text-slate-700", desc: "Organize and store data securely so that apps can retrieve it instantly." },
      { title: "Mobile Engineering", icon: "Tablet", bg: "bg-teal-500/10 text-teal-600", desc: "Develop user-friendly mobile apps for iPhones, iPads, and Android devices." },
      { title: "DevOps & Automation", icon: "Settings", bg: "bg-sky-500/10 text-sky-600", desc: "Automate code deployments and manage server infrastructures using modern tools." }
    ],
    careerTracks: [
      {
        title: "Software Engineering",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Software Developer", "Full Stack Developer", "Mobile App Developer", "DevOps Engineer"]
      },
      {
        title: "Data & Intelligent Systems",
        color: "border-purple-500",
        text: "text-purple-600",
        bg: "bg-purple-50/50",
        iconColor: "text-purple-500",
        roles: ["AI/ML Engineer", "Data Scientist", "Data Engineer", "NLP specialist"]
      },
      {
        title: "Security & Infrastructure",
        color: "border-rose-500",
        text: "text-rose-600",
        bg: "bg-rose-50/50",
        iconColor: "text-rose-500",
        roles: ["Cyber Security Analyst", "Cloud Architect", "Database Admin", "Systems Engineer"]
      }
    ],
    recruiters: [
      "Microsoft", "Google", "Amazon", "TCS", "Infosys", "Wipro",
      "Tech Mahindra", "IBM", "Cognizant", "Capgemini", "Accenture", "L&T Infotech"
    ],
    futureScope: [
      { title: "Specialization in AI & Robotics", desc: "Pursue an M.Tech or MS in AI to work on self-driving cars and smart robots." },
      { title: "Data Analytics & Engineering", desc: "Specialize in Big Data, prediction models, and large-scale data systems." },
      { title: "Cybersecurity & Cryptography", desc: "Do research in advanced network security, ethical hacking, and blockchain." },
      { title: "Tech Management & Entrepreneurship", desc: "Get an MBA in Information Systems or launch your own technology startup." }
    ],
    industryApps: [
      { name: "IT & Software Services", desc: "Building custom software, databases, and digital tools for businesses.", val: "98%" },
      { name: "E-Commerce & Retail", desc: "Powering online shopping websites, payment systems, and product recommendations.", val: "96%" },
      { name: "Healthcare & Biotech", desc: "Developing medical software to help doctors diagnose diseases and manage patient data.", val: "92%" },
      { name: "Financial Technology", desc: "Creating secure banking apps, trading platforms, and fraud detection systems.", val: "95%" },
      { name: "Gaming & Entertainment", desc: "Building video games, video streaming apps, and virtual reality experiences.", val: "91%" },
      { name: "Smart Cities & IoT", desc: "Setting up automated traffic lights, smart electricity grids, and home automation.", val: "93%" }
    ]
  },
  agri: {
    whyStudyTitle: "Why Study Agriculture Engineering?",
    whyStudyItems: [
      { title: "Farm Machinery", icon: "Settings", bg: "bg-emerald-500/10 text-emerald-600", desc: "Design and build efficient tractors, sowing machines, and crop harvesters." },
      { title: "Soil & Water Engg", icon: "Layers", bg: "bg-blue-500/10 text-blue-600", desc: "Learn how to conserve soil nutrients, prevent erosion, and manage underground water." },
      { title: "Irrigation Systems", icon: "Compass", bg: "bg-cyan-500/10 text-cyan-600", desc: "Save water using automated smart irrigation, drip systems, and sprinklers." },
      { title: "Food Processing Tech", icon: "Briefcase", bg: "bg-amber-500/10 text-amber-600", desc: "Design machines to dry, mill, package, and preserve food crops after harvest." },
      { title: "Precision Agriculture", icon: "Radio", bg: "bg-teal-500/10 text-teal-600", desc: "Use drones, GPS tracking, and soil sensors to help farmers increase their crop yields." },
      { title: "Greenhouse Technology", icon: "Globe", bg: "bg-green-500/10 text-green-600", desc: "Create temperature-controlled greenhouses to grow fresh vegetables all year round." },
      { title: "Renewable Farm Energy", icon: "Flame", bg: "bg-orange-500/10 text-orange-600", desc: "Power farms using biogas, crop waste fuels, and solar-powered water pumps." },
      { title: "Aquacultural Engg", icon: "Shield", bg: "bg-sky-500/10 text-sky-600", desc: "Build and maintain commercial fish ponds, oxygen systems, and water filters." },
      { title: "Dairy Engineering", icon: "Server", bg: "bg-slate-500/10 text-slate-700", desc: "Design pasteurizers, bottling machines, and cold storage for large dairy plants." },
      { title: "GIS & Land Mapping", icon: "Cpu", bg: "bg-indigo-500/10 text-indigo-600", desc: "Map crop fields and check soil quality using satellites and remote sensors." }
    ],
    careerTracks: [
      {
        title: "Equipment & Machinery",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["Farm Machinery Designer", "Product Development Engineer", "Tractor Systems Specialist", "Maintenance Manager"]
      },
      {
        title: "Irrigation & Ecology",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Irrigation Design Engineer", "Soil Conservation Specialist", "Water Hydrologist", "GIS Analyst"]
      },
      {
        title: "Food & Dairy Processing",
        color: "border-amber-500",
        text: "text-amber-600",
        bg: "bg-amber-50/50",
        iconColor: "text-amber-500",
        roles: ["Food Process Engineer", "Post-Harvest Technologist", "Dairy Plant Manager", "Quality Assurance Officer"]
      }
    ],
    recruiters: [
      "Mahindra & Mahindra", "John Deere", "Escorts", "TAFE", "Jain Irrigation",
      "Amul", "Godrej Agrovet", "ITC Agribusiness", "Kirloskar Brothers", "ICAR",
      "National Seeds Corp", "Bayer CropScience"
    ],
    futureScope: [
      { title: "Sustainable Bioresource Engg", desc: "Study clean biofuels, food processing, and eco-friendly farming practices." },
      { title: "Precision Agri & IoT Automation", desc: "Learn how to use drones and agricultural robots to automate crop production." },
      { title: "Agribusiness Management", desc: "Pursue an MBA in Agribusiness to manage crop supply chains and export food products." },
      { title: "Agricultural Research", desc: "Work in government research labs (like ICAR) to discover new farming techniques." }
    ],
    industryApps: [
      { name: "Farm Mechanization", desc: "Operating and repairing modern tractors and heavy harvesting machines.", val: "95%" },
      { name: "Food & Dairy Industry", desc: "Setting up cold storages, food packaging plants, and sorting systems.", val: "92%" },
      { name: "Water Management", desc: "Designing efficient water delivery networks and farm drainage setups.", val: "94%" },
      { name: "Precision Agriculture", desc: "Using crop-spraying drones and soil health sensors to optimize farming.", val: "90%" },
      { name: "Biomass & Bioenergy", desc: "Turning agricultural waste into clean energy like biogas and solar electricity.", val: "88%" }
    ]
  },
  civil: {
    whyStudyTitle: "Why Study Civil Engineering?",
    whyStudyItems: [
      { title: "Structural Analysis", icon: "Layers", bg: "bg-indigo-500/10 text-indigo-600", desc: "Calculate forces to design safe bridges, flyovers, and tall skyscrapers." },
      { title: "Geotechnical Engg", icon: "Compass", bg: "bg-orange-500/10 text-orange-600", desc: "Study soil strength to design solid foundations for buildings and dams." },
      { title: "Transportation Systems", icon: "Settings", bg: "bg-blue-500/10 text-blue-600", desc: "Plan and design highways, railway lines, metro tunnels, and airport runways." },
      { title: "Water Resources", icon: "Globe", bg: "bg-cyan-500/10 text-cyan-600", desc: "Design dams, irrigation canals, and flood barriers to manage water flow." },
      { title: "Construction Management", icon: "Briefcase", bg: "bg-slate-500/10 text-slate-700", desc: "Learn how to plan construction schedules, estimate costs, and manage work sites." },
      { title: "Environmental Design", icon: "Shield", bg: "bg-emerald-500/10 text-emerald-600", desc: "Build drinking water treatment plants and eco-friendly waste recycling systems." },
      { title: "Concrete Technology", icon: "Cpu", bg: "bg-zinc-500/10 text-zinc-700", desc: "Test concrete mixtures to build structures that last for decades." },
      { title: "Geomatics & Surveying", icon: "Wind", bg: "bg-teal-500/10 text-teal-600", desc: "Map land boundaries and topography using GPS, total stations, and drones." },
      { title: "Urban Infrastructure", icon: "Server", bg: "bg-sky-500/10 text-sky-600", desc: "Design clean water networks, sewage lines, and roads for modern smart cities." },
      { title: "Earthquake Engineering", icon: "Flame", bg: "bg-rose-500/10 text-rose-600", desc: "Build earthquake-resistant buildings using shock absorbers and dampeners." }
    ],
    careerTracks: [
      {
        title: "Construction & Structures",
        color: "border-indigo-500",
        text: "text-indigo-600",
        bg: "bg-indigo-50/50",
        iconColor: "text-indigo-500",
        roles: ["Structural Engineer", "Site Engineer", "Quantity Surveyor", "Project Scheduler"]
      },
      {
        title: "Public Infrastructure",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Transportation Planner", "Water Resource Engineer", "Geotechnical Engineer", "Highway Designer"]
      },
      {
        title: "Environment & Planning",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["Environmental Engineer", "Urban Planner", "GIS Mapping Officer", "LIDAR Survey Specialist"]
      }
    ],
    recruiters: [
      "Larsen & Toubro (L&T)", "Tata Projects", "DLF", "Shapoorji Pallonji",
      "GMR Group", "NHAI", "CPWD", "Indian Railways", "Gammon India",
      "Hindustan Construction (HCC)", "Reliance Infrastructure", "Adani Ports"
    ],
    futureScope: [
      { title: "Structural Engineering Specialization", desc: "Specialize in designing complex bridges, structural steel, and high-rise buildings." },
      { title: "Construction Technology & Management", desc: "Learn Project Management and BIM software to lead major infrastructure projects." },
      { title: "Environmental & Sustainable Infrastructure", desc: "Focus on green building materials and environmental safety audits." },
      { title: "Infrastructure Real Estate MBA", desc: "Get into corporate real estate management, infrastructure financing, and city planning." }
    ],
    industryApps: [
      { name: "Infrastructure Development", desc: "Building apartment complexes, offices, and industrial factories.", val: "96%" },
      { name: "Transportation Systems", desc: "Constructing expressways, metro railway routes, and long bridges.", val: "94%" },
      { name: "Environmental Engineering", desc: "Setting up city water filters, recycling hubs, and waste management plants.", val: "92%" },
      { name: "Water & Dam Projects", desc: "Building reservoirs, hydroelectric power plants, and flood protection systems.", val: "90%" },
      { name: "GIS & Surveying", desc: "Using satellite data and drone surveys to plan highways and property lines.", val: "88%" }
    ]
  },
  ee: {
    whyStudyTitle: "Why Study Electrical Engineering?",
    whyStudyItems: [
      { title: "Power Generation", icon: "Flame", bg: "bg-amber-500/10 text-amber-600", desc: "Learn how electricity is produced at power plants and sent to our homes through the grid." },
      { title: "Electrical Machines", icon: "Settings", bg: "bg-blue-500/10 text-blue-600", desc: "Understand how motors, generators, and transformers work, and how they power factories." },
      { title: "Power Electronics", icon: "Cpu", bg: "bg-purple-500/10 text-purple-600", desc: "Design the electronic circuits that control and convert electrical power (like phone chargers or EV converters)." },
      { title: "Control Systems", icon: "Compass", bg: "bg-indigo-500/10 text-indigo-600", desc: "Study how to automate machines and systems to keep them working smoothly without human intervention." },
      { title: "Renewable Energy", icon: "Wind", bg: "bg-cyan-500/10 text-cyan-600", desc: "Explore green energy sources like solar panels and wind turbines, and how to connect them to the grid." },
      { title: "EV Technology", icon: "Server", bg: "bg-emerald-500/10 text-emerald-600", desc: "Learn the tech behind electric cars—from batteries and motors to charging stations." },
      { title: "Smart Grids", icon: "Globe", bg: "bg-sky-500/10 text-sky-600", desc: "See how modern digital grids use smart meters and sensors to manage power automatically." },
      { title: "High Voltage Engg", icon: "Shield", bg: "bg-rose-500/10 text-rose-600", desc: "Work with very high voltages, testing safety equipment and protecting systems from lightning strikes." },
      { title: "Embedded Hardware", icon: "Layers", bg: "bg-teal-500/10 text-teal-600", desc: "Program microchips (microcontrollers) to control physical machines and smart devices." },
      { title: "Industrial Sensors", icon: "Radio", bg: "bg-slate-500/10 text-slate-700", desc: "Use industrial controllers (PLCs) and monitoring systems (SCADA) to automate factory assembly lines." }
    ],
    careerTracks: [
      {
        title: "Power Sector & Utilities",
        color: "border-amber-500",
        text: "text-amber-600",
        bg: "bg-amber-50/50",
        iconColor: "text-amber-500",
        roles: ["Power Grid Engineer", "Substation Manager", "Maintenance Engineer", "Electrical Safety Officer"]
      },
      {
        title: "Industrial Automation",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Automation Engineer", "PLC Programmer", "SCADA Specialist", "Instrumentation Engineer"]
      },
      {
        title: "Electric Vehicles & Tech",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["EV Powertrain Engineer", "Power Electronics Specialist", "Battery Management Developer", "Solar Consultant"]
      }
    ],
    recruiters: [
      "NTPC", "BHEL", "Power Grid Corporation", "Siemens", "ABB",
      "Schneider Electric", "Tata Power", "General Electric (GE)",
      "Adani Power", "Maruti Suzuki (EV)", "Bosch", "Havells"
    ],
    futureScope: [
      { title: "Power Electronics & Drive Systems", desc: "Do higher studies to design efficient motor controllers and new electric vehicle parts." },
      { title: "Electric Vehicle Powertrain Tech", desc: "Specialize in improving lithium battery life, battery management systems, and fast chargers." },
      { title: "Smart Grid & Renewable Integration", desc: "Research how to use AI for grid power management and battery storage systems." },
      { title: "Industrial Energy Management", desc: "Pursue an MBA in Power Management or qualify as a certified Energy Auditor." }
    ],
    industryApps: [
      { name: "Power Grid & Transmission", desc: "Managing national grid stations, electric lines, and control centers.", val: "96%" },
      { name: "Industrial Manufacturing", desc: "Operating automation systems, assembly lines, and high-voltage panels in factories.", val: "94%" },
      { name: "Electric Vehicles (EV)", desc: "Assembling battery packs, configuring motors, and installing EV charging stations.", val: "95%" },
      { name: "Solar & Wind Plants", desc: "Installing solar tracking systems and wind turbine alternators.", val: "92%" },
      { name: "Commercial Buildings", desc: "Designing electrical wiring, backup generator systems, and safety circuits for buildings.", val: "89%" }
    ]
  },
  mech: {
    whyStudyTitle: "Why Study Mechanical Engineering?",
    whyStudyItems: [
      { title: "Thermodynamics", icon: "Flame", bg: "bg-orange-500/10 text-orange-600", desc: "Study how heat energy is converted into mechanical work in car engines and power plants." },
      { title: "Fluid Mechanics", icon: "Wind", bg: "bg-cyan-500/10 text-cyan-600", desc: "Understand how liquids and gases flow through pipes, water pumps, and turbines." },
      { title: "Machine Design", icon: "Settings", bg: "bg-blue-500/10 text-blue-600", desc: "Design gears, shafts, bearings, and complete mechanical systems from scratch." },
      { title: "Manufacturing Tech", icon: "Layers", bg: "bg-indigo-500/10 text-indigo-600", desc: "Learn hands-on workshop skills like welding, casting, and metal machining." },
      { title: "CAD/CAM Engineering", icon: "Compass", bg: "bg-purple-500/10 text-purple-600", desc: "Draw 3D models on computer software (like SolidWorks) and convert them to CNC machine paths." },
      { title: "Automotive Systems", icon: "Cpu", bg: "bg-amber-500/10 text-amber-600", desc: "Explore how car suspensions, steering gears, and brake systems are built and tested." },
      { title: "Materials Metallurgy", icon: "Shield", bg: "bg-rose-500/10 text-rose-600", desc: "Test different metals and composites to see how much weight they can carry before breaking." },
      { title: "Robotics & Automation", icon: "Radio", bg: "bg-teal-500/10 text-teal-600", desc: "Design robotic arms, pneumatic pistons, and automated factory machines." },
      { title: "HVAC Engineering", icon: "Globe", bg: "bg-sky-500/10 text-sky-600", desc: "Learn how to calculate, design, and install central air conditioning and cold storage systems." },
      { title: "Additive Mfg", icon: "Server", bg: "bg-slate-500/10 text-slate-700", desc: "Use 3D printers to turn computer drawings into real, solid plastic or metal prototype parts." }
    ],
    careerTracks: [
      {
        title: "Design & Simulations",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Mechanical Design Engineer", "CAD Designer", "CAE / FEM Analyst", "Simulation Engineer"]
      },
      {
        title: "Operations & Production",
        color: "border-indigo-500",
        text: "text-indigo-600",
        bg: "bg-indigo-50/50",
        iconColor: "text-indigo-500",
        roles: ["Production Engineer", "Maintenance Supervisor", "HVAC Engineer", "Quality Control Inspector"]
      },
      {
        title: "Robotics & Automotive",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["Automotive Product Engineer", "Robotics Engineer", "Manufacturing Analyst", "Aerodynamics Specialist"]
      }
    ],
    recruiters: [
      "Tata Motors", "Maruti Suzuki", "Larsen & Toubro (L&T)", "BHEL",
      "Mahindra & Mahindra", "John Deere", "Honda Cars", "Reliance Industries",
      "DRDO", "Ashok Leyland", "Bosch", "Thermax"
    ],
    futureScope: [
      { title: "Thermal Engineering & Fluid Dynamics", desc: "Pursuing M.Tech/MS in computational fluid dynamics (CFD), heat transfer modeling, and jet combustion." },
      { title: "Automotive & Electric Powertrain", desc: "Specializing in vehicle structural mechanics, hybrid engine systems, and chassis styling." },
      { title: "Robotics & Mechatronics", desc: "MS in mechatronics, designing artificial limbs, autonomous robotic vehicles, and automated production cells." },
      { title: "Industrial Engineering & MBA", desc: "Pursuing MBA in Operations or Supply Chain Management to direct warehouse lines and factory layouts." }
    ],
    industryApps: [
      { name: "Automotive Industry", desc: "Designing, testing, and manufacturing cars, trucks, and motorbikes.", val: "96%" },
      { name: "Heavy Machinery & Tooling", desc: "Building cranes, metal stampers, and computerized lathe machines.", val: "94%" },
      { name: "Heating & Cooling (HVAC)", desc: "Installing central cooling systems for office towers and malls.", val: "91%" },
      { name: "Robotics & Production", desc: "Setting up automated conveyor belts and robotic arms on factory floors.", val: "93%" },
      { name: "Power Plants", desc: "Maintaining boilers, steam turbines, and cooling systems in electrical power plants.", val: "89%" }
    ]
  },
  ame: {
    whyStudyTitle: "Why Study Aircraft Maintenance Engineering?",
    whyStudyItems: [
      { title: "Aircraft Airworthiness", icon: "Shield", bg: "bg-blue-500/10 text-blue-600", desc: "Check and sign off that an airplane is 100% safe and ready for flight." },
      { title: "Turbine Overhaul", icon: "Flame", bg: "bg-orange-500/10 text-orange-600", desc: "Learn how to take apart, inspect, and rebuild powerful jet engines." },
      { title: "Avionics Instruments", icon: "Cpu", bg: "bg-purple-500/10 text-purple-600", desc: "Test cockpit displays, weather radar, black boxes, and autopilot units." },
      { title: "Airframe Structure", icon: "Layers", bg: "bg-indigo-500/10 text-indigo-600", desc: "Inspect and repair the metal skin, structural frames, and carbon-fiber parts of planes." },
      { title: "Hydraulic Actuators", icon: "Settings", bg: "bg-cyan-500/10 text-cyan-600", desc: "Test the hydraulic systems that control landing gears, brakes, and wing flaps." },
      { title: "Aviation Regulations", icon: "Compass", bg: "bg-slate-500/10 text-slate-700", desc: "Study civil aviation safety rules (like DGCA & CAR-145) to ensure full legal compliance." },
      { title: "NDT Inspection", icon: "Wind", bg: "bg-teal-500/10 text-teal-600", desc: "Use soundwaves and magnetic scanners to find hidden cracks inside aircraft metals without damaging them." },
      { title: "A/C Electrical Systems", icon: "Server", bg: "bg-amber-500/10 text-amber-600", desc: "Service aircraft batteries, generators, and complex wiring networks." },
      { title: "Fuel System Servicing", icon: "Globe", bg: "bg-sky-500/10 text-sky-600", desc: "Check fuel tanks, pumps, and valves, and prevent dangerous fuel leaks." },
      { title: "Flight Line Maintenance", icon: "Radio", bg: "bg-rose-500/10 text-rose-600", desc: "Perform fast, routine checks on airplanes right before they take off from the airport gate." }
    ],
    careerTracks: [
      {
        title: "Aircraft Maintenance",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Licensed Aircraft Engineer (AME)", "Line Maintenance Engineer", "Base Maintenance Engineer", "Aircraft Mechanic"]
      },
      {
        title: "Avionics & Components",
        color: "border-purple-500",
        text: "text-purple-600",
        bg: "bg-purple-50/50",
        iconColor: "text-purple-500",
        roles: ["Avionics Maintenance Engineer", "Component Overhaul Specialist", "Instrument Workshop Technician", "Radio Systems Inspector"]
      },
      {
        title: "Aviation Support",
        color: "border-slate-500",
        text: "text-slate-600",
        bg: "bg-slate-50/50",
        iconColor: "text-slate-500",
        roles: ["Technical Records Officer", "Aviation Quality Auditor", "Hangar Operations Lead", "Aircraft Safety Manager"]
      }
    ],
    recruiters: [
      "Indigo Airlines", "Air India", "SpiceJet", "Akasa Air",
      "Vistara", "GMR Aero Technic", "Air Works", "HAL",
      "Blue Dart Aviation", "Indocopter", "Qatar Airways", "Singapore Airlines"
    ],
    futureScope: [
      { title: "B.Tech Lateral Entry Studies", desc: "Join the 3rd year of Aeronautical or Aerospace B.Tech directly after your AME diploma." },
      { title: "Aviation Type Rating Licensing", desc: "Clear licensing exams to work as a certified engineer for specific planes (like Airbus A320 or Boeing 737)." },
      { title: "Global EASA/FAA Certifications", desc: "Pass international exams to work as an aircraft engineer in the Middle East, Europe, or the USA." },
      { title: "Corporate Aviation MBA", desc: "Get an MBA in Aviation to manage airport cargo, airline flight schedules, and ground staff." }
    ],
    industryApps: [
      { name: "Airlines Line Maintenance", desc: "Running quick inspections and refueling passenger planes at airport gates.", val: "98%" },
      { name: "Hangar Base Maintenance", desc: "Conducting major, deep inspections (C & D checks) and repairs in large hangars.", val: "96%" },
      { name: "Avionics Workshops", desc: "Calibrating cockpit navigation panels, radio sets, and autopilot circuits.", val: "92%" },
      { name: "Structural Repair Centers", desc: "Fixing damaged wing skins, repairing rivets, and servicing landing gear pistons.", val: "94%" },
      { name: "Safety Audits & Records", desc: "Checking aircraft logbooks and preparing safety reports for aviation inspectors.", val: "90%" }
    ]
  },
  bsh: {
    whyStudyTitle: "Why Study Basic Sciences & Humanities?",
    whyStudyItems: [
      { title: "Engineering Math", icon: "Layers", bg: "bg-blue-500/10 text-blue-600", desc: "Learn advanced math like calculus and matrices to solve complex engineering equations." },
      { title: "Applied Physics", icon: "Flame", bg: "bg-orange-500/10 text-orange-600", desc: "Study electromagnetism, lasers, and fiber optics to understand how engineering devices work." },
      { title: "Engineering Chemistry", icon: "Cpu", bg: "bg-emerald-500/10 text-emerald-600", desc: "Understand battery chemicals, clean fuels, rust prevention, and water filters." },
      { title: "Communicative English", icon: "Globe", bg: "bg-indigo-500/10 text-indigo-600", desc: "Improve your speaking, writing, and presentation skills to clear job interviews confidently." },
      { title: "Environmental Studies", icon: "Shield", bg: "bg-green-500/10 text-green-600", desc: "Learn how to manage waste, save energy, and build eco-friendly green systems." },
      { title: "Basic Programming", icon: "Code", bg: "bg-teal-500/10 text-teal-600", desc: "Learn how to write basic computer programs and solve problems logically." },
      { title: "Material Science", icon: "Settings", bg: "bg-cyan-500/10 text-cyan-600", desc: "Study materials under microscopes to test their heat resistance and strength." },
      { title: "Professional Ethics", icon: "Compass", bg: "bg-rose-500/10 text-rose-600", desc: "Learn corporate ethics, teamwork, and responsible engineering practices." },
      { title: "Quantitative Aptitude", icon: "BarChart", bg: "bg-purple-500/10 text-purple-600", desc: "Improve your puzzle-solving, logical reasoning, and basic math skills for placement tests." },
      { title: "Technical Writing", icon: "Tablet", bg: "bg-slate-500/10 text-slate-700", desc: "Learn to write clean lab manuals, engineering reports, and project proposals." }
    ],
    careerTracks: [
      {
        title: "Research & Analysis",
        color: "border-indigo-500",
        text: "text-indigo-600",
        bg: "bg-indigo-50/50",
        iconColor: "text-indigo-500",
        roles: ["Research Assistant", "Materials Analyst", "Environmental Consultant", "Technical Documentation Specialist"]
      },
      {
        title: "Education & Writing",
        color: "border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        iconColor: "text-blue-500",
        roles: ["Physics/Math Lecturer", "Content Developer", "Scientific Technical Writer", "Educational Consultant"]
      },
      {
        title: "Corporate & Training",
        color: "border-emerald-500",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        iconColor: "text-emerald-500",
        roles: ["Soft Skills Trainer", "Corporate Communications Coordinator", "Executive Coach", "Language Lab Instructor"]
      }
    ],
    recruiters: [
      "BYJU'S", "Pearson Education", "TCS (Aptitude & Training)", "Wipro (Communications)",
      "CSIR Laboratories", "DRDO (Applied Science Wing)", "Macmillan Publishers",
      "Environmental Audit Consultants", "Kalinga Publications", "Techno-Educational Institutes"
    ],
    futureScope: [
      { title: "Postgraduate Masters Studies", desc: "Go for higher studies like M.Sc in Applied Math, Physics, or Chemistry." },
      { title: "Ph.D in Nanoscience & Materials", desc: "Do deep research on next-generation batteries, carbon fibers, or nanotechnology." },
      { title: "M.Tech in Materials Science", desc: "Specialize in metallurgy and testing advanced alloys for industries." },
      { title: "Human Resource & corporate MBA", desc: "Get an MBA in HR or Communications to lead employee training and public relations." }
    ],
    industryApps: [
      { name: "Academic & Research R&D", desc: "Analyzing data in research labs and writing scientific articles.", val: "92%" },
      { name: "Corporate Skill Training", desc: "Teaching soft skills and reasoning to new college graduates.", val: "90%" },
      { name: "Material Testing Laboratories", desc: "Testing plastics, metal hardness, and fuel purity in commercial labs.", val: "88%" },
      { name: "Environmental Auditing", desc: "Checking factory waste, soil pH levels, and preparing green audit reports.", val: "86%" },
      { name: "Technical Communications", desc: "Writing user manuals, product guides, and documentation for tech companies.", val: "85%" }
    ]
  }
};
