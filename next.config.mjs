import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
});

export default withMDX(nextConfig);