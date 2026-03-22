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
  {
    name: "resume",
    icon: "paper",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <></>,
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
    Hi, I’m Srirangan Sudarshan, a Computer Engineering student with a strong interest in 
    hardware and cybersecurity. My passion lies in computer architecture, VLSI, hardware-oriented 
    security and trust, and designing novel computing architectures that are both secure and high-performance. 
    This portfolio highlights my projects, research, and explorations in these areas.
     Feel free to explore my work and connect to discuss collaboration or new ideas!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About Me`,
  description: `Meet ${person.name}, ${person.role} from Atlanta, Georgia`,
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
        description: (
          <Row gap="12" vertical="center">
                <div className="ml-4">
      <div className="font-semibold">
        B.S. in Computer Engineering
      </div>

      <div className="text-sm text-gray-600">
        Expected May 2028 • GPA: 3.50 / 4.00
      </div>

      <div className="mt-2 text-sm">
        <strong>Relevant Coursework:</strong> Digital Logic, Data Structures, Digital Design Lab, Programming HW/SW systems
      </div>

      <div className="mt-1 text-sm">
        <strong>Focus:</strong> Cybersecurity and Computer Hardware and Emerging Architectures
      </div>
    </div>

          </Row>
        ),
      },
      {
        name: "University of Florida",
        description:
        (
          <Row gap="12" vertical="center">
                <div className="ml-4">
      <div className="font-semibold">
        B.S. in Computer Science
      </div>

      <div className="text-sm text-gray-600">
  Transferred with 31 credits • GPA: 4.0 / 4.0
</div>
    </div>

          </Row>
        ),
        
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Skills",
        tags: [
        {
          name: "C",
          icon: "c",
        },
        {
          name: "C++",
          icon: "cpp",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Java",
          icon: "java",
        },
        {
          name: "Verilog",
          icon: "verilog",
        },
        {
          name: "Assembly (RISC-V)",
          icon: "assembly",
        },
        {
          name: "JavaScript",
          icon: "javascript",
        },
        {
          name: "Typescript",
          icon: "typescript",
        },
        {
          name: "HTML",
          icon: "html",
        },
        {
          name: "SQL",
          icon: "sql",
        },
        {
          name: "MATLAB",
          icon: "matlab",
        },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Hardware",
        description: <></>,
        tags: [
          {
            name: "FPGAs",
            icon: "cpu",
          },
          {
            name: "Arduino",
            icon: "arduino",
          },
          {
            name: "ESP32",
            icon: "cpu",
          },
          {
            name: "STM32",
            icon: "cpu",
          },
          {
            name: "CAN Bus",
            icon: "git", // network/connection style fallback
          },
          {
            name: "Oscilloscope",
            icon: "activity",
          },
          {
            name: "Multimeter",
            icon: "activity",
          },
          {
            name: "Logic Analyzer",
            icon: "activity",
          },

        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Frameworks and libraries",
        description: <></>,
        tags: [
          {
              name: "React",
              icon: "react",
            },
            {
              name: "Next.js",
              icon: "nextjs",
            },
            // Machine Learning / AI
            {
              name: "TensorFlow",
              icon: "tensorflow",
            },
            {
              name: "PyTorch",
              icon: "pytorch",
            },
            {
              name: "Scikit-learn",
              icon: "scikitlearn",
            },

            // Data / Visualization (optional but strong)
            {
              name: "NumPy",
              icon: "numpy",
            },
            {
              name: "Pandas",
              icon: "pandas",
            },
            {
              name: "OpenCV",
              icon: "eye", // good fallback
            },
            {
              name: "Django",
              icon: "django",
            },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "tools",
        description:<></>,
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },

          // Embedded / IoT Platforms
          {
            name: "PlatformIO",
            icon: "platformio",
          },
          {
            name: "Arduino IDE",
            icon: "arduino",
          },

          // Network & Analysis Tools
          {
            name: "Wireshark",
            icon: "wireshark",
          },

          // Reverse Engineering / Security Tools
          {
            name: "Ghidra",
            icon: "ghidra",
          },

          // Containers / Virtualization
          {
            name: "Docker",
            icon: "docker",
          },

          // Misc Dev Tools
          {
            name: "VS Code",
            icon: "vscode",
          },
          {
            name: "Jupyter Notebook",
            icon: "jupyter",
          },
          {
            name: "kicad",
            icon: "kicad",
          },{
            name: "quartus",
            icon: "quartus",
          }
        ],
      }
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
  label: "Projects",
  title: "Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/Certifications",
  label: "Certifications",
  title: `Certifications – ${person.name}`,
  description: `Certificates earned by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/Meta.png",
      alt: "database engineering",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/UPenn.png",
      alt: "Python and Java",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/UF.png",
      alt: "Hypergator (Supercomputing)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Duke.png",
      alt: "ML",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Imperial.png",
      alt: "Multi",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/CS50AI.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/CS50W.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/CS50_SQL.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
