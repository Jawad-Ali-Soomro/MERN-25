import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    alert("file is changed");
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <React.Fragment>
      <form
        encType="multipart/form-data"
        style={{ padding: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (name && file) {
            const formData = new FormData();
            formData.set("name", name);
            formData.set("avatar", file);
            axios.post("http://localhost:3000/file", formData, {
              onUploadProgress: (progressEvent) => {
                console.log(progressEvent);
                // const totalLength = progressEvent.lengthComputable
                //   ? progressEvent.total
                //   : progressEvent.target.getResponseHeader("content-length") ||
                //     progressEvent.target.getResponseHeader(
                //       "x-decompressed-content-length"
                //     );
                // if (totalLength) {
                //   const progressPercent = Math.round(
                //     (progressEvent.loaded * 100) / totalLength
                //   );
                //   console.log(progressPercent);
                // }
              },
            });
          } else alert("please upload file");
        }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleName}
          value={name}
        />
        <input
          type="file"
          name="avatar"
          // value={file}
          id="avatar"
          onChange={handleFile}
          accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
        />
        <button type="submit">submit</button>
      </form>
      {file && (
        <img
          style={{ borderRadius: "50%", height: "200px", width: "200px" }}
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
    </React.Fragment>
  );
}

export default App;
