import { articles } from '@/mdx-database/articles'
interface ArticleTranslationProps {
  dic: DictionaryType
}
const ArticleTranslation = (props: ArticleTranslationProps) => {
  const { dic } = props
  return (
    <>
      <h2 className="text-2xl">Σ {dic.blog.articles}</h2>
      <span className="text-lg">{articles?.length} {articles?.length > 1 ? dic.blog.articles.toLowerCase() : dic.blog.articles.toLowerCase().slice(0, -1)}</span>
    </>
  )
}

export default ArticleTranslation