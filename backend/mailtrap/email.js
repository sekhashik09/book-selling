import { VERIFICATION_EMAIL_TEMPLATE,WELCOME_EMAIL_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailTemplate.js"
import { mailtrapClient,sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async ( email) => {
		const recipient = [{email}]
		try {
			const response = await mailtrapClient.send({
				from: sender,
                to: recipient,
                subject: `Welcome to our platform,`,
                html: WELCOME_EMAIL_TEMPLATE,
                category: "Welcome Email",
			})
			console.log("Welcome email sent successfully", response);
		} catch (error) {
			console.error(`Error sending verification`, error);

			throw new Error(`Error sending welcome email: ${error}`);
		}
}

export const sendPasswordResetEmail = async (email,resetURL) => {
	const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });

        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error(`Error sending password reset`, error);

        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });

        console.log("Password reset successful email sent successfully", response);
    } catch (error) {
        console.error(`Error sending password reset successful`, error);

        throw new Error(`Error sending password reset successful email: ${error}`);
    }
}