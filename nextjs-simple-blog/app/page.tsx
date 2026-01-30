import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const posts = [{
    id: 1,
    slug: 'learn-nextjs-basic',
    title: 'Learn Next.js Basic',
    content: `# Learn next.js basics
    next.js is a popular react framework that helps you build fast and SEO-frendly web applications.
    
    ## Why use Next.js?
    - Built-in routing system
    -server-side rendering and static generation
    -great developer experience
    
    **Tip:** Start with the App Router if you are building new project.`,
  },];

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Rafa Haris</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full-stacak developer passionate about building great web
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href='/blog'>Read Blog</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href='/comments'>
              <MessageCircle className="w-4 h-4 mr-2"/>
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I specialize in Machine learning, Next.js, React.js. With years of experience building scalable
          aplications, i love turning ideas into reality
        </p>
      </section>

      {/* Recent Posts  TERAKHIR 11.20 */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Card key={post.id} className="hover:bg-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{post.title}</h3>
                    {/* <p className="text-sm text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p> */}
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ): (
        <p className="text-muted-foreground">No posts yet</p>
        )}
      </section>
    </main>
  );
}
