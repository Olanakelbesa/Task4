import { useForm } from "react-hook-form";
import "./ContactForm.css";

type FormValues = {
	username: string;
	email: string;
	channel: string;
};

const ContactForm = () => {
	const form = useForm<FormValues>();
	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const onSubmit = (data: FormValues) => {
		console.log("Form submitted: ", data);
	};

	return (
		<>
			<div>
				<h2>Contact Form</h2>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div>
					<label htmlFor="username">Name</label>
					<input
						type="text"
						id="username"
						{...register("username", {
							required: { value: true, message: "Username is required" },
						})}
					/>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Invalid email format",
							},
						})}
					/>
					<p className="error">{errors.email?.message}</p>
				</div>

				<div>
					<label htmlFor="channel">Message</label>
					<textarea
						id="channel"
						{...register("channel", {
							required: {
								value: true,
								message: "Message is required",
							},
						})}
					/>
					<p className="error">{errors.channel?.message}</p>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
