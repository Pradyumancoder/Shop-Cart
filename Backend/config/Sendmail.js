
const  nodemailer=require('nodemailer')



const transport=nodemailer.createTransport({
service:"gamil",
auth:{
    user:'hemantprajapati7860@gmail.com',
    pass:'Hemant@7860',
},



})


const mailOptions={
    from:"hemantprajapati7860@gmail.com",
    to:'herontance000@gmail.com',
    subject:"Test the email working",
    text:"This Email is checking the working of the nodemailer",
};


transport.sendMail(mailOptions,(err,info)=>{
    if(err){
        return err;
    }
    else{
        return `Email is Sent ${info}`
    }
})

