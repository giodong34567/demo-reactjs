import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function CreateSkill() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    image: "",
    description: "",
    id: "",
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // cập nhật giá trị input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/skills", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Đã thêm skill:", data);
        closeModal();
        setFormData({
          name: "",
          level: "",
          image: "",
          description: "",
          id: "",
        });
      })
      .catch((err) => console.error("Lỗi khi thêm skill:", err));
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Thêm Skill
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Thêm Skill"
      >
        <h2 className="text-xl font-bold mb-4">Thêm Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Tên skill"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="level"
            placeholder="Trình độ"
            value={formData.level}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Link hình ảnh"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <textarea
            name="description"
            placeholder="Mô tả"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-400 rounded-lg"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Lưu
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default CreateSkill;
