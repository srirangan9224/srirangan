import { Column, Heading, Meta, Schema, Text, Flex } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources"; 

export default function Blog() {
  // SAFE CHECK: This line is the secret sauce. 
  // It checks if blog exists, then if posts exists, then if it's an array.
  const blogData = blog as any;
  const hasPosts = Array.isArray(blogData?.posts) && blogData.posts.length > 0;

  return (
    <Column maxWidth="m" paddingTop="48" paddingX="16">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog?.title || "Blog"}
        description={blog?.description || "Technical insights."}
        path="/blog"
        image={`/api/og/generate?title=${encodeURIComponent(blog?.title || "Blog")}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="12" marginBottom="56" paddingLeft="24">
        <Heading variant="display-strong-l">{blog?.title || "Blog"}</Heading>
        <Text variant="body-default-xl" onBackground="neutral-weak">
          {blog?.description || "Technical deep-dives."}
        </Text>
      </Column>

      <Column fillWidth flex={1} gap="64">
        {hasPosts ? (
          <>
            <Posts range={[1, 1]} thumbnail />
            <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
            <Mailchimp marginBottom="l" />
            <Heading as="h2" variant="heading-strong-xl" marginLeft="l">Earlier posts</Heading>
            <Posts range={[4]} columns="2" />
          </>
        ) : (
          /* YOUR BIG COMING SOON BOX */
          <Column 
            fillWidth 
            horizontal="center" 
            paddingY="160" 
            background="surface" 
            radius="xl" 
            border="neutral-medium"
            style={{ borderStyle: 'dashed' }}
          >
            <Flex direction="column" horizontal="center" gap="24">
              <Text variant="display-strong-m" style={{ opacity: 0.3 }}>✍️</Text>
              <Column horizontal="center" gap="8" maxWidth="m">
                <Heading variant="display-strong-xs" onBackground="neutral-strong">
                  Coming Soon
                </Heading>
                <Text variant="heading-default-s" onBackground="neutral-weak">
                  I'm currently drafting new technical deep-dives. <br /> 
                  Check back soon for the latest updates.
                </Text>
              </Column>
            </Flex>
          </Column>
        )}
      </Column>
    </Column>
  );
}