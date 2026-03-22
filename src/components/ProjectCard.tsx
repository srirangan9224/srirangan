"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const hasImages = images && images.length > 0;

  return (
    <Column fillWidth gap="m">
      {/* 1. IMAGE SECTION: Only renders if images exist */}
      {hasImages && (
        <Flex 
          fillWidth
          aspectRatio="auto" 
          overflow="hidden" 
          radius="l" 
          position="relative"
          background="neutral-medium"
        >
          <Carousel
            aspectRatio="auto"
            sizes="(max-width: 960px) 100vw, 700px"
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          
          <style jsx global>{`
            .project-card-video-fix video, 
            .project-card-video-fix img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
              object-position: center !important;
            }
          `}</style>
        </Flex>
      )}

      {/* 2. CONTENT SECTION: Always renders */}
      <Flex
        className="project-card-video-fix"
        direction="column"
        fillWidth
        paddingX="s"
        paddingTop={hasImages ? "12" : "0"} 
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column fillWidth gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read project report</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};