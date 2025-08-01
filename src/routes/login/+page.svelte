<script lang="ts">
	let email = '';
	let phoneNumber = '';
	let password = '';
	let rememberMe = false;
	let isLoading = false;
	let errors: { [key: string]: string } = {};
	let loginMethod: 'phone' | 'email' = 'phone';
	let selectedCountry = { name: 'United States', code: '+1', flag: '🇺🇸' };
	let showCountryDropdown = false;

	const countries = [
		{ name: 'United States', code: '+1', flag: '🇺🇸' },
		{ name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
		{ name: 'Canada', code: '+1', flag: '🇨🇦' },
		{ name: 'Australia', code: '+61', flag: '🇦🇺' },
		{ name: 'Germany', code: '+49', flag: '🇩🇪' },
		{ name: 'France', code: '+33', flag: '🇫🇷' },
		{ name: 'Japan', code: '+81', flag: '🇯🇵' },
		{ name: 'India', code: '+91', flag: '🇮🇳' },
		{ name: 'China', code: '+86', flag: '🇨🇳' },
		{ name: 'Brazil', code: '+55', flag: '🇧🇷' },
		{ name: 'Mexico', code: '+52', flag: '🇲🇽' }
	];

	const switchLoginMethod = (method: 'phone' | 'email') => {
		loginMethod = method;
		errors = {}; // Clear errors when switching
	};

	const selectCountry = (country: typeof countries[0]) => {
		selectedCountry = country;
		showCountryDropdown = false;
	};

	const validateForm = () => {
		errors = {};
		
		if (loginMethod === 'email') {
			if (!email) {
				errors.email = 'Email is required';
			} else if (!/\S+@\S+\.\S+/.test(email)) {
				errors.email = 'Please enter a valid email';
			}
		} else {
			if (!phoneNumber) {
				errors.phone = 'Phone number is required';
			} else if (!/^\d{10,15}$/.test(phoneNumber.replace(/\s/g, ''))) {
				errors.phone = 'Please enter a valid phone number';
			}
		}
		
		if (!password) {
			errors.password = 'Password is required';
		} else if (password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}
		
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		
		if (!validateForm()) return;
		
		isLoading = true;
		
		try {
			// TODO: Replace with actual API call
			const loginData = loginMethod === 'email' 
				? { email, password, rememberMe }
				: { phone: selectedCountry.code + phoneNumber, password, rememberMe };
			
			console.log('Login attempt:', loginData);
			
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// TODO: Handle successful login (redirect, store token, etc.)
			alert('Login successful! (This is a demo)');
		} catch (error) {
			console.error('Login error:', error);
			errors.general = 'Login failed. Please try again.';
		} finally {
			isLoading = false;
		}
	};

	// Close dropdown when clicking outside
	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as Element;
		if (!target.closest('.country-selector')) {
			showCountryDropdown = false;
		}
	};
</script>

<svelte:head>
	<title>Login - Drawtopia</title>
	<meta name="description" content="Login to your Drawtopia account" />
</svelte:head>

<svelte:window on:click={handleClickOutside} />

<div class="login-with-phone-number">
	<div class="form">
			<div class="logo-text-full">
					<div class="drawtopia"></div>
					<div class="subtract"></div>
			</div>
			<div class="container">
					<div class="form_01">
							<div class="heading">
									<div class="welcome-to-drawtopia"><span class="welcometodrawtopia_span">Welcome to Drawtopia!</span></div>
									<div><span class="logintocontinuewithyourdrawtopiajourney_span">Log in to continue with your drawtopia journey</span></div>
							</div>
							<div class="frame-1410103986">
									<button type="button" class="button-social" on:click={() => alert('Google login coming soon!')}>
											<div class="icon-l">
													<div class="shape"></div>
													<div class="shape_01"></div>
													<div class="shape_02"></div>
													<div class="shape_03"></div>
											</div>
											<div><span class="loginwithgoogle_span">Login with Google</span></div>
									</button>
									<div class="frame-1410103989">
											<div class="stroke"></div>
											<div><span class="or_span">Or</span></div>
											<div class="stroke_01"></div>
									</div>
									<div class="frame-1410103988">
									<div class="switch">
											<button 
												type="button" 
												class="button" 
												class:active={loginMethod === 'phone'}
												on:click={() => switchLoginMethod('phone')}
											>
													<div class="phone">
															<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
															</svg>
													</div>
													<div><span class="phonenumber_span">Phone Number</span></div>
											</button>
											<button 
												type="button" 
												class="button_01" 
												class:active={loginMethod === 'email'}
												on:click={() => switchLoginMethod('email')}
											>
													<div class="envelope">
															<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
															</svg>
													</div>
													<div><span class="email_span">Email</span></div>
											</button>
									</div>

									{#if loginMethod === 'phone'}
										<div class="text-field">
												<div><span class="phonenumber_01_span">Phone Number</span></div>
												<div class="field-form">
														<div class="field">
																<div class="country-selector">
																	<button 
																		type="button" 
																		class="country-code" 
																		on:click={() => showCountryDropdown = !showCountryDropdown}
																		aria-expanded={showCountryDropdown}
																		aria-haspopup="listbox"
																		aria-label="Select country code"
																	>
																			<div class="country-flag">
																					<span class="flag-emoji">{selectedCountry.flag}</span>
																			</div>
																			<div><span class="f_span">{selectedCountry.code}</span></div>
																			<div class="left-actionable">
																					<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
																						<path d="M7 10l5 5 5-5z" fill="currentColor"/>
																					</svg>
																			</div>
																	</button>
																	{#if showCountryDropdown}
																		<div class="country-dropdown" role="listbox">
																			{#each countries as country}
																				<button 
																					type="button"
																					class="country-item" 
																					on:click={() => selectCountry(country)}
																					role="option"
																					aria-selected={selectedCountry.code === country.code}
																				>
																					<span class="flag-emoji">{country.flag}</span>
																					<span class="country-name">{country.name}</span>
																					<span class="country-code-text">{country.code}</span>
																				</button>
																			{/each}
																		</div>
																	{/if}
																</div>
																<input 
																	type="tel" 
																	bind:value={phoneNumber}
																	placeholder="Enter phone number"
																	class="phone-input"
																	class:error={errors.phone}
																	disabled={isLoading}
																/>
														</div>
												</div>
												{#if errors.phone}
													<span class="error-text">{errors.phone}</span>
												{/if}
										</div>
									{:else}
										<div class="text-field">
												<div><span class="phonenumber_01_span">Email</span></div>
												<div class="field-form">
														<div class="field">
																<input 
																	type="email" 
																	bind:value={email}
																	placeholder="Enter your email"
																	class="email-input"
																	class:error={errors.email}
																	disabled={isLoading}
																/>
														</div>
												</div>
												{#if errors.email}
													<span class="error-text">{errors.email}</span>
												{/if}
										</div>
									{/if}

									<div class="text-field">
											<div><span class="phonenumber_01_span">Password</span></div>
											<div class="field-form">
													<div class="field">
															<input 
																type="password" 
																bind:value={password}
																placeholder="Enter your password"
																class="password-input"
																class:error={errors.password}
																disabled={isLoading}
															/>
													</div>
											</div>
											{#if errors.password}
												<span class="error-text">{errors.password}</span>
											{/if}
									</div>
							</div>
							</div>
					</div>
					<form on:submit={handleSubmit}>
						<div class="frame-1410104077">
								{#if errors.general}
									<div class="error-banner">{errors.general}</div>
								{/if}
								<button type="submit" class="button_02" disabled={isLoading}>
										{#if isLoading}
											<div class="spinner"></div>
											<span class="login_span">Logging in...</span>
										{:else}
											<div class="login"><span class="login_span">Login</span></div>
										{/if}
								</button>
								<a href="/signup" class="button_03">
										<div class="dont-have-account-sign-up"><span class="donthaveaccountsignup_span_01">Don't have account? </span><span class="donthaveaccountsignup_span_02">Sign Up</span></div>
								</a>
						</div>
					</form>
			</div>
	</div>
	<div class="background-image"></div>
</div>

<style>
.drawtopia {
	width: 290px;
	height: 54.20px;
	left: 0px;
	top: 0px;
	position: absolute;
	background: radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, #0FE3EF 44%, #438BFF 100%);
	box-shadow: 0px 0.8099160194396973px 2.4297478199005127px #871FFF inset;
}

.subtract {
	width: 40.50px;
	height: 40.50px;
	left: 173.37px;
	top: 2.60px;
	position: absolute;
	transform: rotate(4deg);
	transform-origin: top left;
	background: radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, #0FE3EF 44%, #438BFF 100%);
	box-shadow: 0px 0.8099161982536316px 2.42974853515625px #871FFF inset;
}

.welcometodrawtopia_span {
	color: #141414;
	font-size: 40px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 56px;
	word-wrap: break-word;
}

.welcome-to-drawtopia {
	align-self: stretch;
}

.logintocontinuewithyourdrawtopiajourney_span {
	color: #666D80;
	font-size: 20px;
	font-family: Nunito;
	font-weight: 400;
	line-height: 28px;
	word-wrap: break-word;
}

.shape {
	width: 14.58px;
	height: 7.49px;
	left: 5.85px;
	top: 4.67px;
	position: absolute;
	background: #EA4335;
}

.shape_01 {
	width: 8.96px;
	height: 8.77px;
	left: 14.19px;
	top: 12.30px;
	position: absolute;
	background: #4285F4;
}

.shape_02 {
	width: 4.02px;
	height: 8.38px;
	left: 4.85px;
	top: 9.81px;
	position: absolute;
	background: #FBBC05;
}

.shape_03 {
	width: 14.51px;
	height: 7.49px;
	left: 5.86px;
	top: 15.85px;
	position: absolute;
	background: #34A853;
}

.loginwithgoogle_span {
	color: #121212;
	font-size: 18px;
	font-family: Geist;
	font-weight: 500;
	line-height: 25.20px;
	word-wrap: break-word;
}

.stroke {
	flex: 1 1 0;
	height: 2px;
	transform: rotate(180deg);
	transform-origin: top left;
	background: #EDEDED;
}

.or_span {
	color: #666D80;
	font-size: 18px;
	font-family: Nunito;
	font-weight: 400;
	line-height: 25.20px;
	word-wrap: break-word;
}

.stroke_01 {
	flex: 1 1 0;
	height: 2px;
	transform: rotate(180deg);
	transform-origin: top left;
	background: #EDEDED;
}



.phonenumber_span {
	color: #141414;
	font-size: 16px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 22.40px;
	word-wrap: break-word;
}



.email_span {
	color: #666D80;
	font-size: 16px;
	font-family: Quicksand;
	font-weight: 400;
	line-height: 22.40px;
	word-wrap: break-word;
}

.phonenumber_01_span {
	color: #0D0D12;
	font-size: 16px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 22.40px;
	word-wrap: break-word;
}

.f_span {
	color: var(--Background-Black, #020E22);
	font-size: 16px;
	font-family: Quicksand;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: 0.20px;
	word-wrap: break-word;
}

.login_span {
	color: white;
	font-size: 18px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 25.20px;
	word-wrap: break-word;
}

.login {
	text-align: center;
}

.donthaveaccountsignup_span_01 {
	color: #727272;
	font-size: 18px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 25.20px;
	word-wrap: break-word;
}

.donthaveaccountsignup_span_02 {
	color: black;
	font-size: 18px;
	font-family: Quicksand;
	font-weight: 600;
	line-height: 25.20px;
	word-wrap: break-word;
}

.dont-have-account-sign-up {
	text-align: center;
}

.background-image {
	width: 50%;
	height: 100vh;
	position: relative;
	background: #EEF6FF;
	border-radius: 12px;
	border: 1px #EDEDED solid;
	display: flex;
	align-items: center;
	justify-content: center;
}

.heading {
	align-self: stretch;
	padding-left: 4px;
	padding-right: 4px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
	display: flex;
}

.button_02 {
	align-self: stretch;
	padding-left: 24px;
	padding-right: 24px;
	padding-top: 16px;
	padding-bottom: 16px;
	background: #438BFF;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	display: inline-flex;
}

.button_03 {
	align-self: stretch;
	padding-left: 24px;
	padding-right: 24px;
	padding-top: 16px;
	padding-bottom: 16px;
	box-shadow: 0px 4px 4px rgba(141.80, 141.80, 141.80, 0.25) inset;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	display: inline-flex;
}

.logo-text-full {
	width: 290px;
	height: 54.20px;
	position: relative;
}

.icon-l {
	width: 28px;
	height: 28px;
	position: relative;
}

.frame-1410103989 {
	align-self: stretch;
	justify-content: center;
	align-items: center;
	gap: 24px;
	display: inline-flex;
}

.phone {
	width: 18px;
	height: 18px;
	position: relative;
	overflow: hidden;
}

.envelope {
	width: 18px;
	height: 18px;
	position: relative;
	overflow: hidden;
}



.left-actionable {
	width: 16px;
	height: 16px;
	position: relative;
	overflow: hidden;
}

.frame-1410104077 {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 4px;
	display: flex;
}

.button-social {
	align-self: stretch;
	height: 57px;
	padding-left: 24px;
	padding-right: 24px;
	padding-top: 16px;
	padding-bottom: 16px;
	background: white;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	outline: 1px #D2D6DB solid;
	outline-offset: -1px;
	justify-content: center;
	align-items: center;
	gap: 4px;
	display: inline-flex;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
}

.button-social:hover {
	background: #f8fafc;
	transform: translateY(-1px);
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.button {
	flex: 1 1 0;
	padding: 8px;
	background: white;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	display: flex;
}

.button_01 {
	flex: 1 1 0;
	padding: 8px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	display: flex;
}

.country-code {
	height: 24px;
	justify-content: center;
	align-items: center;
	gap: 4px;
	display: flex;
	border: none;
	background: transparent;
	cursor: pointer;
	position: relative;
}

.switch {
	align-self: stretch;
	padding: 4px;
	background: #F6F8FA;
	border-radius: 8px;
	outline: 1px #EDEDED solid;
	outline-offset: -1px;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;
	display: inline-flex;
}

.field {
	align-self: stretch;
	padding: 12px;
	background: white;
	overflow: hidden;
	border-radius: 8px;
	outline: 1px #DFE1E7 solid;
	outline-offset: -1px;
	justify-content: center;
	align-items: center;
	gap: 12px;
	display: inline-flex;
}

.field-form {
	align-self: stretch;
	height: 50px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 4px;
	display: flex;
}

.text-field {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 8px;
	display: flex;
}

.frame-1410103988 {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 12px;
	display: flex;
}

.frame-1410103986 {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 24px;
	display: flex;
}

.form_01 {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 24px;
	display: flex;
}

.container {
	align-self: stretch;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 40px;
	display: flex;
}

.form {
	width: 50%;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 40px;
	display: inline-flex;
	padding: 48px;
}

.login-with-phone-number {
	width: 100%;
	height: 100vh;
	background: white;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	gap: 0;
	display: flex;
	flex-wrap: nowrap;
}

/* New interactive styles */
.button.active {
	background: white !important;
	color: #141414 !important;
}

.button_01.active {
	background: white !important;
	color: #141414 !important;
}

.button, .button_01 {
	cursor: pointer;
	transition: all 0.2s ease;
	border: none;
	background: transparent;
}

.button:hover, .button_01:hover {
	background: rgba(255, 255, 255, 0.8) !important;
}



.country-selector {
	position: relative;
}

.country-dropdown {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: white;
	border: 1px solid #DFE1E7;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	max-height: 200px;
	overflow-y: auto;
}

.country-item {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px 12px;
	cursor: pointer;
	transition: background-color 0.2s ease;
	border: none;
	background: none;
	width: 100%;
	text-align: left;
}

.country-item:hover {
	background-color: #f8fafc;
}

.flag-emoji {
	font-size: 16px;
	width: 20px;
	text-align: center;
}

.country-name {
	flex: 1;
	font-size: 14px;
	color: #374151;
}

.country-code-text {
	font-size: 14px;
	color: #6b7280;
}

.phone-input, .email-input, .password-input {
	border: none;
	outline: none;
	background: transparent;
	flex: 1;
	font-size: 16px;
	color: #374151;
	padding: 0;
}

.phone-input::placeholder, .email-input::placeholder, .password-input::placeholder {
	color: #9ca3af;
}

.phone-input.error, .email-input.error, .password-input.error {
	color: #dc2626;
}

.error-text {
	color: #dc2626;
	font-size: 12px;
	margin-top: 4px;
	display: block;
}

.error-banner {
	background-color: #fee2e2;
	color: #dc2626;
	padding: 12px;
	border-radius: 8px;
	margin-bottom: 16px;
	text-align: center;
	font-size: 14px;
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

.button_02:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}

.button_02 {
	cursor: pointer;
	border: none;
	transition: all 0.2s ease;
}

.button_02:hover:not(:disabled) {
	transform: translateY(-1px);
	box-shadow: 0 4px 8px rgba(67, 139, 255, 0.3);
}

.country-flag {
	display: flex;
	align-items: center;
	justify-content: center;
}

@media (max-width: 768px) {
	.login-with-phone-number {
		flex-direction: column;
		height: auto;
		min-height: 100vh;
	}
	
	.form {
		width: 100%;
		height: auto;
		min-height: 50vh;
	}
	
	.background-image {
		width: 100%;
		height: 50vh;
		min-height: 300px;
	}
	
	.country-dropdown {
		max-height: 150px;
	}
}
</style>