import AddToCart from "@/components/addToCart";
import {fetchProductById} from "@/lib/server/fetchProducts";

async function Detail({params}: {params: {slug: string}}) {
  const product = await fetchProductById(params.slug);

  return (
    <div className="flex flex-col self-center items-center align-middle p-10">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="rounded-lg lg:block">
          <img src={product?.image} alt={product?.name} />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-5">
            {product?.name}
          </h1>
          <p>{product?.description}</p>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            $ {product?.price}
          </p>

          <form className="mt-10">
            <AddToCart id={product?.id} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Detail;
