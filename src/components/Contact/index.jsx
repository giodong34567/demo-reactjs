import { useState } from "react";

function Contact() {

    const info = [
        { type: "Địa chỉ", value: "Đà Nẵng" },
        { type: "Điện thoại", value: "+84 123 456 789" },
        { type: "Email", value: "pacman16012004@example.com" }
    ]

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        topic: "",
        content: ""
    });

    const validate = () => {
        let error = false;

        if (!form.fullname.trim()) {
            alert("Tên không được để trống");
            error = true;
        }
        else if (!form.email.trim()) {
            alert("Email không được để trống");
            error = true;
        }
        else if (!form.phoneNumber.trim()) {
            alert("Số điện thoại không được để trống");
            error = true;
        }
        else if (!form.topic.trim()) {
            alert("Mời bạn chọn chủ đề");
            error = true;
        }
        else if (!form.content.trim()) {
            alert("Điền nội dung Email !!!");
            error = true;
        }

        return !error;
    };


    const handleOnsubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const res = await fetch("http://localhost:8081/api/mail/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        to: form.email,            
                        subject: form.topic,        
                        body: `
                        ${form.content}`
                    })
                });

                const msg = await res.text();
                alert(msg);
            } catch (err) {
                alert("Lỗi khi gửi liên hệ: " + err.message);
            }
        }
    };



    const handleOnchange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    console.log(form)

    return (
        <>
            <h1 className="flex justify-center font-bold text-5xl mb-20">Liên hệ với chúng tôi</h1>
            <div className="flex justify-center gap-x-5 flex-1">
                {info.map((item, index) => (
                    <div className="shadow-md p-6 rounded-lg bg-white">
                        <h3>{item.type}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
                <form onSubmit={handleOnsubmit} className="space-y-6 bg-white shadow-md p-8 rounded-lg">
                    {/* Họ và tên */}
                    <div>
                        <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">
                            Họ và tên
                        </label>
                        <input
                            id="fullname"
                            name="fullname"
                            value={form.fullname}
                            onChange={handleOnchange}
                            type="text"
                            placeholder="Nhập họ và tên"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleOnchange}
                            type="email"
                            placeholder="Nhập email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Số điện thoại */}
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                            Số điện thoại
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleOnchange}
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Chủ đề */}
                    <div>
                        <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
                            Chủ đề
                        </label>
                        <input
                            id="topic"
                            name="topic"
                            value={form.topic}
                            onChange={handleOnchange}
                            type="text"
                            placeholder="Nhập chủ đề"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Nội dung */}
                    <div>
                        <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                            Nội dung
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleOnchange}
                            rows="5"
                            placeholder="Nhập nội dung liên hệ..."
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Gửi liên hệ
                        </button>
                    </div>
                </form>
            </div>
            F
        </>
    )
}

export default Contact;