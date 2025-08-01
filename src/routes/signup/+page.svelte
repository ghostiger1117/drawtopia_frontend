<script lang="ts">
	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let agreeToTerms = false;
	let isLoading = false;
	let errors: { [key: string]: string } = {};

	const validateForm = () => {
		errors = {};
		
		if (!firstName.trim()) {
			errors.firstName = 'First name is required';
		}
		
		if (!lastName.trim()) {
			errors.lastName = 'Last name is required';
		}
		
		if (!email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Please enter a valid email';
		}
		
		if (!password) {
			errors.password = 'Password is required';
		} else if (password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
			errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
		}
		
		if (!confirmPassword) {
			errors.confirmPassword = 'Please confirm your password';
		} else if (password !== confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}
		
		if (!agreeToTerms) {
			errors.terms = 'You must agree to the Terms of Service';
		}
		
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		
		if (!validateForm()) return;
		
		isLoading = true;
		
		try {
			// TODO: Replace with actual API call
			console.log('Signup attempt:', { firstName, lastName, email, password });
			
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));
			
			// TODO: Handle successful signup (redirect, show confirmation, etc.)
			alert('Account created successfully! (This is a demo)');
		} catch (error) {
			console.error('Signup error:', error);
			errors.general = 'Account creation failed. Please try again.';
		} finally {
			isLoading = false;
		}
	};

	const getPasswordStrength = (password: string) => {
		if (password.length === 0) return { strength: 0, label: '' };
		if (password.length < 6) return { strength: 1, label: 'Weak', color: '#dc2626' };
		if (password.length < 8) return { strength: 2, label: 'Fair', color: '#f59e0b' };
		if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return { strength: 2, label: 'Fair', color: '#f59e0b' };
		return { strength: 3, label: 'Strong', color: '#059669' };
	};

	$: passwordStrength = getPasswordStrength(password);
</script>

<svelte:head>
	<title>Sign Up - Drawtopia</title>
	<meta name="description" content="Create your Drawtopia account" />
</svelte:head>

<div class="signup-container">
	<div class="signup-card">
		<div class="logo-section">
			<h1>Drawtopia</h1>
			<p>Create your account and start your creative journey!</p>
		</div>

		<form on:submit={handleSubmit} class="signup-form">
			{#if errors.general}
				<div class="error-banner">{errors.general}</div>
			{/if}

			<div class="name-row">
				<div class="form-group">
					<label for="firstName">First Name</label>
					<input
						id="firstName"
						type="text"
						bind:value={firstName}
						placeholder="First name"
						class:error={errors.firstName}
						disabled={isLoading}
					/>
					{#if errors.firstName}
						<span class="error-text">{errors.firstName}</span>
					{/if}
				</div>

				<div class="form-group">
					<label for="lastName">Last Name</label>
					<input
						id="lastName"
						type="text"
						bind:value={lastName}
						placeholder="Last name"
						class:error={errors.lastName}
						disabled={isLoading}
					/>
					{#if errors.lastName}
						<span class="error-text">{errors.lastName}</span>
					{/if}
				</div>
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class:error={errors.email}
					disabled={isLoading}
				/>
				{#if errors.email}
					<span class="error-text">{errors.email}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="password">Password</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="Create a password"
					class:error={errors.password}
					disabled={isLoading}
				/>
				{#if password.length > 0}
					<div class="password-strength">
						<div class="strength-bar">
							<div 
								class="strength-fill" 
								style="width: {passwordStrength.strength * 33.33}%; background-color: {passwordStrength.color}"
							></div>
						</div>
						<span class="strength-label" style="color: {passwordStrength.color}">
							{passwordStrength.label}
						</span>
					</div>
				{/if}
				{#if errors.password}
					<span class="error-text">{errors.password}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="confirmPassword">Confirm Password</label>
				<input
					id="confirmPassword"
					type="password"
					bind:value={confirmPassword}
					placeholder="Confirm your password"
					class:error={errors.confirmPassword}
					disabled={isLoading}
				/>
				{#if errors.confirmPassword}
					<span class="error-text">{errors.confirmPassword}</span>
				{/if}
			</div>

			<div class="terms-section">
				<label class="checkbox-label">
					<input
						type="checkbox"
						bind:checked={agreeToTerms}
						disabled={isLoading}
					/>
					<span class="checkmark"></span>
					<span class="terms-text">
						I agree to the <a href="/terms" target="_blank">Terms of Service</a> 
						and <a href="/privacy" target="_blank">Privacy Policy</a>
					</span>
				</label>
				{#if errors.terms}
					<span class="error-text">{errors.terms}</span>
				{/if}
			</div>

			<button type="submit" class="signup-btn" disabled={isLoading}>
				{#if isLoading}
					<span class="spinner"></span>
					Creating Account...
				{:else}
					Create Account
				{/if}
			</button>

			<div class="login-link">
				Already have an account? <a href="/login">Sign in here</a>
			</div>
		</form>
	</div>
</div>

<style>
	.signup-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 1rem;
	}

	.signup-card {
		background: white;
		border-radius: 16px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		padding: 2.5rem;
		width: 100%;
		max-width: 500px;
		margin: 1rem 0;
	}

	.logo-section {
		text-align: center;
		margin-bottom: 2rem;
	}

	.logo-section h1 {
		color: #667eea;
		font-size: 2rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
	}

	.logo-section p {
		color: #6b7280;
		margin: 0;
		font-size: 0.95rem;
	}

	.signup-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.error-banner {
		background: #fee2e2;
		color: #dc2626;
		padding: 0.75rem;
		border-radius: 8px;
		font-size: 0.875rem;
		text-align: center;
	}

	.name-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: 600;
		color: #374151;
		font-size: 0.875rem;
	}

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		padding: 0.75rem;
		border: 2px solid #e5e7eb;
		border-radius: 8px;
		font-size: 1rem;
		transition: border-color 0.2s ease;
	}

	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="password"]:focus {
		outline: none;
		border-color: #667eea;
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
	}

	input.error {
		border-color: #dc2626;
	}

	.error-text {
		color: #dc2626;
		font-size: 0.75rem;
		margin-top: 0.25rem;
	}

	.password-strength {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.strength-bar {
		flex: 1;
		height: 4px;
		background: #e5e7eb;
		border-radius: 2px;
		overflow: hidden;
	}

	.strength-fill {
		height: 100%;
		transition: width 0.3s ease, background-color 0.3s ease;
	}

	.strength-label {
		font-size: 0.75rem;
		font-weight: 600;
		min-width: 50px;
	}

	.terms-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.checkbox-label {
		display: flex;
		align-items: flex-start;
		cursor: pointer;
		font-size: 0.875rem;
		color: #6b7280;
		line-height: 1.4;
	}

	.checkbox-label input[type="checkbox"] {
		display: none;
	}

	.checkmark {
		width: 18px;
		height: 18px;
		border: 2px solid #d1d5db;
		border-radius: 4px;
		margin-right: 0.75rem;
		margin-top: 2px;
		flex-shrink: 0;
		position: relative;
		transition: all 0.2s ease;
	}

	.checkbox-label input[type="checkbox"]:checked + .checkmark {
		background-color: #667eea;
		border-color: #667eea;
	}

	.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
		content: "✓";
		position: absolute;
		color: white;
		font-size: 12px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.terms-text a {
		color: #667eea;
		text-decoration: none;
		font-weight: 500;
	}

	.terms-text a:hover {
		text-decoration: underline;
	}

	.signup-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.signup-btn:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
	}

	.signup-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top: 2px solid white;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.login-link {
		text-align: center;
		color: #6b7280;
		font-size: 0.875rem;
	}

	.login-link a {
		color: #667eea;
		text-decoration: none;
		font-weight: 600;
	}

	.login-link a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.name-row {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.signup-card {
			padding: 2rem;
			margin: 0.5rem;
		}
		
		.logo-section h1 {
			font-size: 1.75rem;
		}
	}
</style>