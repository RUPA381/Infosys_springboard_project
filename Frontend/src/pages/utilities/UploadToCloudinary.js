export const UploadToCloudinary = async (pics,fileType) => {
    
    if (pics && fileType) {

        console.log("pics",pics,fileType)
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "ushasri");
      data.append("cloud_name", "docjmwbuo");
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/docjmwbuo/${fileType}/upload`, {
        method: "post",
        body: data,
      })
        const fileData=await res.json();
        console.log("url : ", fileData.url);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };