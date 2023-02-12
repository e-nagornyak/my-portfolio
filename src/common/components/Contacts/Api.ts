import axios from "axios";

type messageType = {
    fullName: string
    email: string,
    subject: string,
    message: string
}

export const sendMessage = (data: messageType) => axios.post('https://api.emailjs.com/api/v1.0/email/send', {
    service_id: 'service_o8x6s4u',
    template_id: 'template_0t1j73c',
    user_id: 'Xd5yzhjPIM3_1ngQe',
    template_params: {
        "fullName": data.fullName,
        "message": data.message,
        "email": data.email,
        "subject": data.subject
    }
})