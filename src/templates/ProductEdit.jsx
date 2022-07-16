import React, { useState,useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { TextInput,SelectBox, PrimaryButton } from '../components/UIkit';
import { saveProduct } from '../reducks/products/operations';

const ProductEdit = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState(""),
          [description, setDescription] = useState(""),
          [images, setImages] = useState([]),
          [category, setCategory] = useState(""),
        //   [categories, setCategories] = useState([]),
          [gender, setGender] = useState(""),
          [price, setPrice] = useState(""),
          [sizes, setSizes] = useState([]);

    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription])

    const inputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])

    const categories = [
        {
            id:"tops",
            name:"トップス"
        },
        {
            id:"tops",
            name:"トップス"
        },
        {
            id:"tops",
            name:"トップス"
        },
        {
            id:"tops",
            name:"トップス"
        },
        {
            id:"tops",
            name:"トップス"
        },
        {
            id:"tops",
            name:"トップス"
        },
    ];
    const genders = [
        {
            id:"men",
            name:"男"
        },
        {
            id:"women",
            name:"女"
        },
        {
            id:"all",
            name:"すべて"
        },
    ]
    

  return (
    <section>
    <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
    <div className="c-section-container">
        {/* <ImageArea images={images} setImages={setImages} /> */}
        <TextInput
            fullWidth={true} label={"商品名"} multiline={false} required={true}
            onChange={inputName} rows={1} value={name} type={"text"}
        />
        <TextInput
            fullWidth={true} label={"商品説明"} multiline={true} required={true}
            onChange={inputDescription} rows={5} value={description} type={"text"}
        />
        <SelectBox
            label={"カテゴリー"} options={categories} required={true} select={setCategory} value={category}
        />
        <SelectBox
            label={"性別"} options={genders} required={true} select={setGender} value={gender}
        />
        <TextInput
            fullWidth={true} label={"価格"} multiline={false} required={true}
            onChange={inputPrice} rows={1} value={price} type={"number"}
        />
        <div className="module-spacer--small"/>
        {/* <SetSizesArea sizes={sizes} setSizes={setSizes} /> */}
        <div className="module-spacer--small" />
        <div className="center">
            <PrimaryButton
                label={"商品情報を保存"}
                onClick={() => dispatch(saveProduct(name, description, category, gender, price))}
            />
        </div>
    </div>
</section>
  )
}

export default ProductEdit