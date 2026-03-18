import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Srirangan",
  lastName: "Sudarshan",
  name: `Srirangan Sudarshan`,
  role: "Computer Engineer",
  avatar: "/images/Srirangan.jpg",
  email: "srirangan9224@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/srirangan9224",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/srirangan-sudarshan",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/homee.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Hello there</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Look at my projects
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Motivated computer engineering undergraduate with hands-on experience in embedded systems, firmware development, and cyber-physical security. Skilled in PCB design, Cyber-Physical Systems (CPS) testbeds, and FPGA prototyping, with a strong research background and active involvement mentoring and organizing several hackathons. Seeking 
        internships to apply hardware and software expertise to real-world challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Georgia Tech Cyber-Physical Security Lab",
        timeframe: "August 2025 - Present",
        role: "Undergraduate researcher",
        achievements: [
          <>
            Conducted research with the Cyber-Physical Security Lab (CPSec) on the GT–Hyundai project, 
            focusing on evaluating the security of in-vehicle embedded communication systems against 
            protocol-level and adversarial attacks.
          </>,
          <>
            Designed and built a CAN bus testbed from the ground up to generate, decode, and analyze 
            automotive communication messages, enabling controlled experimentation on real-world vehicle 
            network behaviors.
          </>,
          <>
          Executed and analyzed over 50,000 test rules on the CAN testbed to systematically evaluate communication integrity, 
          uncover vulnerabilities, and assess the resilience of embedded vehicle systems to security threats.
          </>,
        ],
        images: [
           {
            src: "/images/projects/GTHyundai/temp.jpg",
            alt: "CAN testbed",
            width: 40,
            height: 20,
          },
        ],
      },
      {
        company: "Florida Institute of Cybersecurity Research",
        timeframe: "January 2025 - April 2025",
        role: "Undergraduate research assistant",
        achievements: [
          <>
            Investigated control-flow attestation techniques for embedded systems by leveraging electromagnetic (EM) side-channel emissions, 
            running experiments to capture and analyze EM traces and correlating them with program execution patterns to identify deviations 
            indicative of runtime control-flow anomalies.
          </>,
          <>
            Developed a comprehensive attack pipeline to demonstrate system vulnerability 
            by disassembling compiled C binaries using GCC toolchains, analyzing ELF structures with objdump, 
            and mapping low-level instruction flows to identify exploitable gadgets for control-flow hijacking.
          </>,
          <>
          Successfully constructed and executed a Return-Oriented Programming (ROP) attack on an Arduino-based platform by chaining together 
          carefully selected instruction sequences, validating the exploit through runtime testing, and assessing its impact on system integrity 
          and security guarantees.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/EMCFA/setup.jpg",
            alt: "EMCFA project",
            width: 40,
            height: 20,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: 
        <>BS Computer Engineering (edit)
        </>,
      },
      {
        name: "University of Florida",
        description:
        <>
        Transfered with 31 credits
        </>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        tags: [
          {
            name: "Figma",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
