import React from "react";

const MenuTemplate = () => {
  return (
    <div>
      <h1 className="text-center text-[50px] font-bold text-[#9b4427]">
        Menu Bakery & Cake
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-[50px]">
        {/* CROISSANT */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/croissant.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="2"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Croissant
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">3.50$</p>
          </div>
        </div>
        {/* BREAD  */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/bread_scan.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="1.34"
            exposure="0.85"
            shadow-softness="0.66"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Bread
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">3.00 $</p>
          </div>
        </div>
        {/* PANCAKE */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/pancake.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="1.58"
            exposure="0.85"
            shadow-softness="0.87"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Pancake
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">7.50 $</p>
          </div>
        </div>
        {/* taco */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/taco.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="1.65"
            exposure="0.85"
            shadow-softness="1"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Tacos
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">6.50 $</p>
          </div>
        </div>
        {/* WAFFLE */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/waffles.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="0.93"
            exposure="0.66"
            shadow-softness="0.39"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Waffle
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">6.00 $</p>
          </div>
        </div>
        {/* CUPCAKE */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/cupcake.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="0.93"
            exposure="0.66"
            shadow-softness="0.39"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Cupcake
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">5.50 $</p>
          </div>
        </div>
        {/* DOUGHNUT */}
        <div className=" bg-white shadow-2xl rounded-3xl w-[300px]">
          <model-viewer
            src="/images/modelview/doughnut.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="0.93"
            exposure="0.66"
            shadow-softness="0.39"
          ></model-viewer>

          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Doughnut
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">5.00 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTemplate;
