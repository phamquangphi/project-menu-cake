import React from "react";
const MenuTemplate = () => {
  return (
    <div>
      <h1 className="text-center text-[50px] font-bold text-[#9b4427]">
        Menu Bakery & Cake
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-[50px]">
        {/* CROISSANT */}
        <div className=" bg-white shadow-2xl rounded-3xl">
          <model-viewer
            src="/images/modelview/croissant.glb"
            ar
            auto-rotate            
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster="poster.webp"
            shadow-intensity="2"
            touch-action="pan-y"
          >
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
              View in your space
            </button>
            <div id="ar-prompt">
              <img
                src="https://modelviewer.dev/shared-assets/icons/hand.png"
                alt=""
              />
            </div>
          </model-viewer>
          <div className="flex items-center justify-between my-[30px] mx-5">
            <h1 className="text-[#9b4427] font-bold text-[20px] underline">
              Croissant
            </h1>
            <p className=" text-[#9b4427] font-medium text-[25px]">3.50$</p>
          </div>
        </div>
        <model-viewer
          src="/images/modelview/cupcake.glb"
          ar
          auto-rotate
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="2"
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
          <div id="ar-prompt">
            <img
              src="https://modelviewer.dev/shared-assets/icons/hand.png"
              alt=""
            />
          </div>
        </model-viewer>
      </div>
    </div>
  );
};

export default MenuTemplate;
