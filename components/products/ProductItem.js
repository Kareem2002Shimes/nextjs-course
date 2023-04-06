import Card from "../ui/Card";
import classes from "./ProductItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
function ProductItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.name} fill={true} />
          {/* <img src={props.image} alt={props.name} /> */}
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <span>${props.price}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
