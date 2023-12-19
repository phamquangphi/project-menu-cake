import React, { useState } from "react";
import { database } from "../firebase";
import { ref, child, get } from "firebase/database";
const MenuTemplate = () => {
  const [menu, setMenu] = useState([]);
  const dbRef = ref(database);
  get(child(dbRef, `menu`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        setMenu(data);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h1 className="text-center text-[50px] font-bold text-[#9b4427]">
        Menu Bakery & Cake
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-[50px]">
        {menu.map((menu) => {
          return (
            <div key={menu.id} className=" bg-white shadow-2xl rounded-3xl">
              <model-viewer
                src={menu.img}
                ar
                auto-rotate
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                poster="poster.webp"
                shadow-intensity="2"
                style={{
                  width: "330px",
                  marginLeft: "20px",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              >
                <div className="progress-bar hide" slot="progress-bar">
                  <div className="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                  View in your space
                </button>
                <div id="ar-prompt">
                  <img className="w-8" src="/images/unity.png" alt="" />
                </div>
              </model-viewer>
              <div className="flex items-center justify-between my-[30px] mx-5">
                <h1 className="text-[#9b4427] font-bold text-[20px] underline">
                  {menu.name}
                </h1>
                <p className=" text-[#9b4427] font-medium text-[25px]">
                  {menu.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTemplate;
