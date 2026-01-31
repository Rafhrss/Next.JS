import prisma from "@/lib/db";

async function main() {
  const blogPosts = [
    {
    slug: 'mastering-tailwind-css-layouts',
    title: 'Mastering Tailwind CSS Layouts',
    content: `# Why Tailwind CSS?
Tailwind allows you to build modern designs directly in your HTML without leaving your JSX files.

## Useful Utilities
- **Flexbox & Grid:** Essential for responsive designs.
- **Spacing:** Using \`gap\`, \`p-\`, and \`m-\` for consistent layouts.
- **Dark Mode:** Built-in support for switching themes.

**Tip:** Use the \`hidden lg:inline\` classes to show or hide elements based on screen size.`
}
  ]
  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }
  console.log('seed data has been inserted successfully!')
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })