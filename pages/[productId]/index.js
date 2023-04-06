// domainName/productId
import mongoose from "mongoose";
import ProductDetails from "../../components/products/ProductDetails";
import Product from "../../models/Product";
import { dbConnect } from "../../util/mongo";
import { Fragment } from "react";
import Head from "next/head";

function ProductDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Browse Product Details" />
      </Head>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        price={props.productData.price}
        desc={props.productData.desc}
      />
    </Fragment>
  );
}

export default ProductDetailsPage;

export async function getStaticPaths() {
  // connect to database to  get products ids
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  return {
    fallback: "blocking",
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  // select product from database
  dbConnect();
  const selectedProduct = await Product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return {
    props: {
      productData: {
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        desc: selectedProduct.desc,
        id: selectedProduct._id.toString(),
      },
    },
  };
}
