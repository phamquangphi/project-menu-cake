import React, { useState } from "react";
import { dbStore, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const AddminTemplate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState(null);
  const [error, setError] = useState("");

  const type = ["glb", "png"];
  const cakeImgHandler = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      let fileExtension = selectFile.name.split(".").pop().toLowerCase();
      if (type.includes(fileExtension)) {
        setImg(selectFile);
        setError("");
      } else {
        setImg(null);
        setError("please select a valid image type glb or png");
      }
    } else {
      setImg(null);
      setError("please select a file");
    }
  };
  const addCakeHandler = async (e) => {
    e.preventDefault();
    try {
      if (img) {
        // add images in storage
        const storageRef = ref(storage, `Product_img/${img.name}`);
        await uploadBytes(storageRef, img);
        const imageURL = await getDownloadURL(storageRef);
        //add database api in Firestore
        const docRef = collection(dbStore, "menu");
        await addDoc(docRef, {
          name: name,
          price: Number(price),
          img: imageURL,
        });
      }
      setName("");
      setPrice(0);
      setError("");
      setImg(null);
      alert("add success ");
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Error adding product");
    }
  };

  return (
    <div>
      <h1 className="text-center text-[50px] font-bold text-[#9b4427]">
        Add Menu Cake
      </h1>
      <div className="flex items-center justify-center mt-[30px] ">
        <div className=" ">
          <form action="" onSubmit={addCakeHandler}>
            <div>
              <label className="text-xl font-semibold" htmlFor="cake-name">
                Name
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name...."
                className="w-[400px] h-[40px] border-black border-2 rounded-lg pl-2 "
              />
            </div>
            <div className="mt-4">
              <label className="text-xl font-semibold" htmlFor="cake-price">
                Price
              </label>
              <br />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price $...."
                className="w-[400px] h-[40px] border-black border-2 rounded-lg pl-2 "
              />
            </div>
            <div className="mt-4">
              <label className="text-xl font-semibold" htmlFor="cake-image">
                Image
              </label>
              <br />
              <input
                onChange={cakeImgHandler}
                type="file"
                className="px-[100px] py-[5px] border-black border-2 rounded-lg pl-2 "
              />
            </div>
            <button
              type="submit"
              className="mt-5 px-[30px] py-[10px] bg-[#9b4427] text-white font-bold border-2 rounded-2xl hover:bg-white hover:text-[#9b4427] hover:border-2 hover:border-black"
            >
              ADD Cake
            </button>
          </form>
          {error && <span>{error}</span>}
        </div>
        <img
          className="ml-[10
          0px] w-[30%]"
          src="/images/pancake.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddminTemplate;
