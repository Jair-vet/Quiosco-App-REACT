import { PrismaClient } from "@prisma/client"

export default function Home({categorias}) {

  return (
    <>
        <h1 className='text-3xl text-center'>Hola mundo usando Next.js</h1>
    </>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany()

  return {
    props: {
      categorias,
    }
  }
}
