
const ProductReview = async ({params}:{params: { productId: string, reviewsid: string }}) => {
    const { productId, reviewsid } = params;
  return (
    <div>
        <h1>Review {reviewsid} for Product {productId}</h1>
    </div>
  )
}

export default ProductReview