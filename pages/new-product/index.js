// domainName/new-product

import axios from "axios";
import NewProductForm from "../../components/products/NewProductForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function NewProductPage() {
  const router = useRouter();
  async function addProductHandler(enteredProductData) {
    await axios.post("/api/products", enteredProductData, {
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Product</title>
        <meta
          name="description"
          content="Add your product and build great e-commerce app"
        />
      </Head>
      <NewProductForm onAddProduct={addProductHandler} />
    </Fragment>
  );
}
export default NewProductPage;
