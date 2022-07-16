import { push } from "connected-react-router";
import { db, FirebaseTimestamp, FirebaseFieldValue } from "../../firebase";
const productsRef = db.collection("products");
export const saveProduct = (name, description, category, gender, price) => {
  return async (dispatch) => {
    const timestamp = FirebaseFieldValue.serverTimestamp();
    const data = {
      name,
      category,
      description,
      category,
      gender,
      price: parseInt(price, 10),
      updated_at: timestamp,
    };
    const ref = productsRef.doc();
    const id = ref.id;
    data.id = id;
    data.created_at = timestamp;
    return productsRef
      .doc(id)
      .set(data)
      .then(() => {
        dispatch(push("/"));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};
