import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, blog } from "@/resources"; 
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const CareerGoals = () => {
  return (
    <Column fillWidth gap="16" paddingY="48" horizontal="start">
      
      {/* Title */}
        <Heading as="h2" variant="display-strong-xs">
            Career Goals
        </Heading>


      <Column maxWidth="m" gap="12">

        {/* Paragraph 1 */}
        <Text 
          variant="body-default-l"
          as="p"
          onBackground="neutral-weak"
        >
          My long-term goal is to become a hardware systems architect and researcher focused on secure and high-performance digital systems. I am particularly interested in the intersection of VLSI design, computer architecture, and hardware cybersecurity, where I aim to design systems that are efficient, scalable, and resilient against threats such as side-channel, fault injection, and microarchitectural attacks. I am especially motivated by the challenge of bridging low-level hardware design with system-level security to create robust and trustworthy computing platforms.
        </Text>

        {/* Highlight Line */}
        <Text 
          variant="body-default-l"
          as="p"
          onBackground="neutral-weak"
        >
          As computing systems grow more complex, I aim to integrate security directly into hardware design—making trust, reliability, and verifiability fundamental aspects of modern architectures rather than afterthoughts. I am particularly interested in exploring secure processor design, control-flow integrity, and hardware-software co-design approaches that enhance both performance and security.
        </Text>

        {/* Paragraph 2 */}
        <Text 
          variant="body-default-l"
          as="p"
          onBackground="neutral-weak"
        >
          To achieve this, I plan to pursue a Master’s degree in Electrical and Computer Engineering 
          (ECE), where I can deepen my knowledge in advanced digital design, secure architectures, 
          and hardware-software co-design.
        </Text>

        {/* Paragraph 3 */}
        <Text 
          variant="body-default-l"
          as="p"
          onBackground="neutral-weak"
        >
          Currently, I am building this foundation through coursework, and research in control flow attestation and firmware validation, where I explore practical implementations of hardware security concepts. Moving forward, I aim to expand my research experience through work in secure processor design, contribute to academic publications, and gain industry exposure through internships in semiconductor and hardware security roles.
        </Text>

        {/* Closing */}
        <Text 
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          By combining research, practical design experience, and graduate education, I hope to 
          contribute to the development of next-generation computing systems that are both 
          high-performance and inherently secure.
        </Text>

      </Column>
    </Column>
  );
};

export default function Home() {
  // Check if posts exist in the blog resource
  const postsArray = blog?.posts || []; 
  const hasPosts = postsArray.length > 0;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" arrowIcon>
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* 1. Blog Section (Reordered to first) */}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          
          {hasPosts ? (
            <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
              <Row flex={1} paddingLeft="l" paddingTop="24">
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                  Latest from the blog
                </Heading>
              </Row>
              <Row flex={3} paddingX="20">
                <Posts range={[1, 2]} columns="2" />
              </Row>
            </Row>
          ) : (
            <Row fillWidth gap="24" marginTop="40" vertical="center" horizontal="center">
              <Column horizontal="center" gap="8" paddingY="48">
                <Heading as="h3" variant="display-strong-xs" onBackground="neutral-weak">
                  Coming Soon
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Check back later for new articles and updates.
                </Text>
              </Column>
            </Row>
          )}

          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* a detailed career goals section */}
      <Column fillWidth paddingLeft="l">
        <CareerGoals />
      </Column>

      <Row fillWidth paddingY="24">
         <Line />
      </Row>
      
      {/* 2. Explore Projects (Reordered and limited to 2) */}
      <Column fillWidth gap="32">
        <Row fillWidth paddingLeft="l">
           <Heading as="h2" variant="display-strong-xs">
            Explore Projects
          </Heading>
        </Row>
        <RevealFx translateY="16" delay={0.2}>
          {/* Displays exactly 1 or 2 projects as requested */}
          <Projects range={[1, 2]} />
        </RevealFx>
      </Column>

      <Mailchimp />
    </Column>
  );
}