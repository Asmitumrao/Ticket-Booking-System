import nodemailer from 'nodemailer';

let transporter = null;
let testAccount = null;

// Create transporter with Ethereal when the server starts
(async () => {
    testAccount = await nodemailer.createTestAccount();

    transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    })


    console.log('📧 Ethereal email account ready:');
    console.log('   User:', testAccount.user);
    console.log('   Pass:', testAccount.pass);
})();



const sendVerificationEmail = async (email, verificationToken) => {

    const link = `http://localhost:8000/api/v1/auth/verify-email?token=${verificationToken}`;
    const info = await transporter.sendMail({
        from: '"Verify your email" <no-reply@authapp.com>', // sender address
        to: email, // list of receivers
        subject: 'Email Verification',
        html: `<p>Click <a href="${link}">here</a> to verify your email.</p>`,

    });

    console.log('✅ Verification email sent (preview it below)');
    console.log('🔗 Preview URL:', nodemailer.getTestMessageUrl(info));
}

export { sendVerificationEmail };

