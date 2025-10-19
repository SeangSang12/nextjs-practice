const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  return (
    <div>
      <h1>Product Detail: {productId}</h1>
    </div>
  );
};
export default ProductDetail;
