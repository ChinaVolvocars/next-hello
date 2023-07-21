export default function Page({params}: { params: { categoryId: string} }) {
  return <h1>页面$ {params.categoryId} = {params.categoryId}</h1>
}