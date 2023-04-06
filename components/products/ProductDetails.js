import Card from "../ui/Card";
import classes from "./ProductDetail.module.css";
import Image from "next/image";
function ProductDetails(props) {
  return (
    <section className={classes.detail}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.name} fill={true} />
          {/* <img src={props.image} alt={props.name} /> */}
        </div>
        <h1>{props.name}</h1>
        <span>${props.price}</span>
        <p>{props.desc}</p>
      </Card>
    </section>
  );
}
export default ProductDetails;
