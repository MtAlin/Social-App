import { useState } from "react";
import "./Stories.scss";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import useStore from "../../state/stateZustand";
const array = [
  {
    id: 1,
    name: "Alin Matusa",
    img: "https://images.unsplash.com/photo-1565185251299-e40edcc7319d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
  },
  {
    id: 2,
    name: "Alin Matusa",
    img: "https://images.unsplash.com/photo-1643658062821-227e84425612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
  },
  {
    id: 3,
    name: "Alin Matusa",
    img: "https://media.istockphoto.com/id/1466108101/photo/street-in-financial-district-of-chicago.jpg?s=170667a&w=0&k=20&c=S9RNTHbtQM2Jfn2oFGCu6ERQNST0mndTYar_MEFHi_M=",
  },
  {
    id: 4,
    name: "Alin Matusa",
    img: "https://images.unsplash.com/photo-1648780947927-f4e225c2ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80",
  },
];
function Stories() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addStorie, storie } = useStore();

  const handleStorie = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Append the selected image to the FormData object
    formData.append("image", selectedImage);
    console.log(formData);
    addStorie(formData);
  };
  return (
    <div className="stories">
      <div className="card">
        <img alt="" src={storie} />
        <h6>Alin Matusa</h6>
        <form
          encType="multipart/form-data"
          className="card_add_button"
          onSubmit={handleSubmit}
        >
          <label htmlFor="files">
            <AddCircleRoundedIcon />
          </label>
          <input
            type="file"
            id="files"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <input type="submit" value="send" onClick={handleStorie} />
        </form>
      </div>
      {array.map((item) => (
        <div className="card" key={item.id}>
          <img alt="" src={item.img} />
          <h6>{item.name}</h6>
        </div>
      ))}
    </div>
  );
}

export default Stories;
