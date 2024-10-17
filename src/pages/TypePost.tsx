import { CardSelector } from "../components/gen";
import { Clothes } from "../types/ropa";

export function TypePost({clothes}:{clothes: Clothes[]}) {
  return (
    <>
      {/**Titulo de la pagina */}
      <div className="bg-secondary mx-[20%] rounded-3xl">
        <h1 className="text-new-white font-bold text-[35px] text-center my-10">Seleccionar Prenda</h1>
      </div>
      {/**lista de botones */}
      <section className="grid md:grid-cols-2 sm:grid-flow-row mb-10">
        {clothes.map(clothe => (
          <CardSelector key={clothe.type} clothes={clothe}/>
        ))}
      </section>
    </>
  );
  }