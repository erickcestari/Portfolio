import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
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