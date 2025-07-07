import { useForm } from "../../../../hooks";
import {
	StyledErrorText,
	StyledForm,
	StyledInput,
	StyledInputWrapper,
	StyledLabel,
} from "./styled";
const PersonalInfoForm = () => {
	const { formData, updateFormData, errors } = useForm(); // Obtém errors do contexto

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		updateFormData({ [name]: value });
	};

	return (
		<>
			<StyledForm
				component="form"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<StyledInputWrapper>
					<StyledLabel htmlFor="name">
						Name
						{errors.name && (
							<StyledErrorText component="span">{errors.name}</StyledErrorText>
						)}
					</StyledLabel>
					<StyledInput
						type="text"
						id="name"
						placeholder="e.g. Stephen King"
						value={formData.name}
						onChange={handleChange}
						hasError={!!errors.name}
						name="name"
						autoComplete="name"
						aria-invalid={!!errors.name}
						aria-describedby={errors.name ? `name-error` : undefined}
					/>
				</StyledInputWrapper>

				<StyledInputWrapper>
					<StyledLabel htmlFor="email">
						Email Address
						{errors.email && (
							<StyledErrorText component="span">{errors.email}</StyledErrorText>
						)}
					</StyledLabel>
					<StyledInput
						type="email"
						id="email"
						placeholder="e.g. stephenking@lorem.com"
						value={formData.email}
						onChange={handleChange}
						hasError={!!errors.email}
						name="email"
						autoComplete="email"
						aria-invalid={!!errors.email}
						aria-describedby={errors.email ? `email-error` : undefined}
					/>
				</StyledInputWrapper>

				<StyledInputWrapper>
					<StyledLabel htmlFor="phone">
						Phone Number
						{errors.phone && (
							<StyledErrorText component="span">{errors.phone}</StyledErrorText>
						)}
					</StyledLabel>
					<StyledInput
						type="tel"
						id="phone"
						placeholder="e.g. +1 234 567 890"
						value={formData.phone}
						onChange={handleChange}
						hasError={!!errors.phone}
						pattern="^\+?\d[\d\s]{7,}$"
						name="phone"
						autoComplete="phone"
						aria-invalid={!!errors.phone}
						aria-describedby={errors.phone ? `phone-error` : undefined}
					/>
				</StyledInputWrapper>
			</StyledForm>
		</>
	);
};

export default PersonalInfoForm;
