import { useRef, useEffect } from "react";

const ImageCropper = ({ src, cropWidth, cropHeight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cropImage = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Set canvas size
      canvas.width = cropWidth;
      canvas.height = cropHeight;

      // Load the image
      const image = new Image();
      image.src = src;
      image.onload = () => {
        const sourceX = 0; // Starting x-coordinate to crop
        const sourceY = 0; // Starting y-coordinate to crop

        // Draw the cropped section of the image on the canvas
        ctx.drawImage(
          image,
          sourceX, // x-coordinate of the top-left corner to start cropping
          sourceY, // y-coordinate of the top-left corner to start cropping
          cropWidth, // Width of the cropped image
          cropHeight, // Height of the cropped image
          0, // x-coordinate on the canvas
          0, // y-coordinate on the canvas
          cropWidth, // Width on the canvas
          cropHeight // Height on the canvas
        );
      };
    };

    cropImage();
  }, [src, cropWidth, cropHeight]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: "1px solid black" }} />
    </div>
  );
};

export default ImageCropper;
