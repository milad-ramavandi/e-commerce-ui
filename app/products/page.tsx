import Categories from "@/components/Categories";
import FilterProducts from "@/components/FilterProducts";
import ProductsList from "@/components/ProductsList";

const ProductsPage = () => {
  return (
    <div className="space-y-6 mt-2">
      <Categories />
      <FilterProducts />
      <ProductsList isHomePage={false} />
    </div>
  );
};

export default ProductsPage;
