import html2canvas from 'html2canvas';

const convertHtmlToBase64 = async (htmlElement) => {
  try {
    // Use html2canvas to render the HTML content to a canvas
    const canvas = await html2canvas(htmlElement);
    // Convert the canvas to a base64 string
    const base64Image = canvas.toDataURL("image/png");
    console.log(base64Image)
    return base64Image; // Return the base64 string
  } catch (error) {
    console.error("Error capturing HTML to base64 image:", error);
    return null;
  }
};

export default convertHtmlToBase64;