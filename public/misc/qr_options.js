const options = {
  width: 200,
  height: 200,

  margin: 0,
  qrOptions: {
    typeNumber: "0",
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: { type: "square", color: "#000000", gradient: null },
  backgroundOptions: { color: "#ffffff" },
  image:
    "data:image/png;base64,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",
  dotsOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#6a1a4c",
      color2: "#6a1a4c",
      rotation: "0",
    },
  },
  cornersSquareOptions: { type: "square", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0",
    },
  },
  cornersDotOptions: { type: "dot", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0",
    },
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0",
    },
  },
};

export default options;
