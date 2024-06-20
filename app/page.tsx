import Resizable from '@/components/resizable'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>React Resizable Panels</h1>
        <p className='text-gray-500'>By Brian Vaughn</p>

        <Resizable />
      </div>
    </section>
  )
}
