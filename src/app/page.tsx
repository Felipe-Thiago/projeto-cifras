import HeaderLogin from "@/components/HeaderLogin";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      
      <HeaderLogin />
      
      <section className="bg-gray-100 h-screen md:grid md:grid-cols-12 md:grid-rows-12">
        <div className="md:col-start-2 md:col-end-5 md:row-start-2">
          <h1 className="text-3xl">Músicas Recomendadas</h1>
          <div className="bg-white size-24 rounded-full"></div>
        </div>
        
        <div className="md:col-start-10 bg-white w-90 h-120 row-start-2 md:col-end-9">
          <h2 className="text-center text-orange-700 font-semibold mt-5">Grupos públicos</h2>
        </div>
      </section>
    </div>
  );
}
