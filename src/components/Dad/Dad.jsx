import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
