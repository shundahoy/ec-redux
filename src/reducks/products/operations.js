import { push } from "connected-react-router";
import { db, FirebaseFieldValue } from "../../firebase";
const productsRef = db.collection("products");
export const saveProduct = (
  id,
  name,
  description,
  category,
  gender,
  price,
  images,
  sizes
) => {
  return async (dispatch) => {
    const timestamp = FirebaseFieldValue.serverTimestamp();

    const data = {
      name,
      description,
      category,
      gender,
      images,
      sizes,
      price: parseInt(price, 10),
      updated_at: timestamp,
    };
    if (id === "") {
      const ref = productsRef.doc();
      const id = ref.id;
      data.id = id;
      data.created_at = timestamp;
      console.log(id);
      return productsRef
        .doc(id)
        .set(data)
        .then(() => {
          dispatch(push("/"));
        })
        .catch((err) => {
          throw new Error(err);
        });
    }

    return productsRef
      .doc(String(id))
      .set(data, { marge: true })
      .then(() => {
        dispatch(push("/"));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};
