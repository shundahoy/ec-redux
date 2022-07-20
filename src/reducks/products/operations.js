import { push } from "connected-react-router";
import { db, FirebaseFieldValue } from "../../firebase";
import { deleteProductAction, fetchProductsAction } from "./actions";
const productsRef = db.collection("products");

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    productsRef
      .doc(id)
      .delete()
      .then(() => {
        const prevProducts = getState().products.list;
        const nextProducts = prevProducts.filter(
          (product) => product.id !== id
        );
        dispatch(deleteProductAction(nextProducts));
      });
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    productsRef
      .orderBy("updated_at", "desc")
      .get()
      .then((snapshots) => {
        const productList = [];
        snapshots.forEach((snapshot) => {
          const product = snapshot.data();
          productList.push(product);
          console.log(product);
        });
        dispatch(fetchProductsAction(productList));
      });
  };
};

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
      id,
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
      id = ref.id;
      data.id = id;
      data.created_at = timestamp;
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
