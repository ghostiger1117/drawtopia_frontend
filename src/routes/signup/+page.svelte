<script lang="ts">
  import { TelInput, normalizedCountries } from "svelte-tel-input";
  import type {
    DetailedValue,
    CountryCode,
    E164Number,
  } from "svelte-tel-input/types";

  // Any Country Code Alpha-2 (ISO 3166)
  let selectedCountry: CountryCode | null = "HU";

  // You must use E164 number format. It's guarantee the parsing and storing consistency.
  let value: E164Number | null = "+36301234567";

  // Validity
  let valid = true;

  // Optional - Extended details about the parsed phone number
  let detailedValue: DetailedValue | null = null;
  let email = "";
  let phoneNumber = "";
  let password = "";
  let rememberMe = false;
  let isLoading = false;
  let errors: { [key: string]: string } = {};
  let loginMethod: "phone" | "email" = "phone";
  // let selectedCountry = { name: 'United States', code: '+1', flag: '🇺🇸' };
  let showCountryDropdown = false;

  const countries = [
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
  ];

  const switchLoginMethod = (method: "phone" | "email") => {
    loginMethod = method;
    errors = {}; // Clear errors when switching
  };

  const selectCountry = (country: (typeof countries)[0]) => {
    // selectedCountry = country;
    // showCountryDropdown = false;
  };

  const validateForm = () => {
    errors = {};

    if (loginMethod === "email") {
      if (!email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Please enter a valid email";
      }
    } else {
      if (!phoneNumber) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10,15}$/.test(phoneNumber.replace(/\s/g, ""))) {
        errors.phone = "Please enter a valid phone number";
      }
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: Event) => {
    // event.preventDefault();
    // if (!validateForm()) return;
    // isLoading = true;
    // try {
    // 	// TODO: Replace with actual API call
    // 	const loginData = loginMethod === 'email'
    // 		? { email, password, rememberMe }
    // 		: { phone: selectedCountry.code + phoneNumber, password, rememberMe };
    // 	console.log('Login attempt:', loginData);
    // 	// Simulate API call
    // 	await new Promise(resolve => setTimeout(resolve, 1000));
    // 	// TODO: Handle successful login (redirect, store token, etc.)
    // 	alert('Login successful! (This is a demo)');
    // } catch (error) {
    // 	console.error('Login error:', error);
    // 	errors.general = 'Login failed. Please try again.';
    // } finally {
    // 	isLoading = false;
    // }
  };

  // Function to get country flag emoji from ISO code
  const getCountryFlag = (iso2: string): string => {
    const flagEmojis: { [key: string]: string } = {
      US: "🇺🇸",
      GB: "🇬🇧",
      CA: "🇨🇦",
      AU: "🇦🇺",
      DE: "🇩🇪",
      FR: "🇫🇷",
      JP: "🇯🇵",
      IN: "🇮🇳",
      CN: "🇨🇳",
      BR: "🇧🇷",
      MX: "🇲🇽",
      HU: "🇭🇺",
      IT: "🇮🇹",
      ES: "🇪🇸",
      NL: "🇳🇱",
      SE: "🇸🇪",
      NO: "🇳🇴",
      DK: "🇩🇰",
      FI: "🇫🇮",
      PL: "🇵🇱",
      CZ: "🇨🇿",
      AT: "🇦🇹",
      CH: "🇨🇭",
      BE: "🇧🇪",
      IE: "🇮🇪",
      PT: "🇵🇹",
      GR: "🇬🇷",
      TR: "🇹🇷",
      RU: "🇷🇺",
      UA: "🇺🇦",
      RO: "🇷🇴",
      BG: "🇧🇬",
      HR: "🇭🇷",
      SI: "🇸🇮",
      SK: "🇸🇰",
      LT: "🇱🇹",
      LV: "🇱🇻",
      EE: "🇪🇪",
      MT: "🇲🇹",
      CY: "🇨🇾",
      LU: "🇱🇺",
      IS: "🇮🇸",
      NZ: "🇳🇿",
      SG: "🇸🇬",
      MY: "🇲🇾",
      TH: "🇹🇭",
      VN: "🇻🇳",
      PH: "🇵🇭",
      ID: "🇮🇩",
      KR: "🇰🇷",
      TW: "🇹🇼",
      HK: "🇭🇰",
      IL: "🇮🇱",
      AE: "🇦🇪",
      SA: "🇸🇦",
      EG: "🇪🇬",
      ZA: "🇿🇦",
      NG: "🇳🇬",
      KE: "🇰🇪",
      GH: "🇬🇭",
      AR: "🇦🇷",
      CL: "🇨🇱",
      CO: "🇨🇴",
      VE: "🇻🇪",
      EC: "🇪🇨",
      UY: "🇺🇾",
      PY: "🇵🇾",
      BO: "🇧🇴",
      CR: "🇨🇷",
      PA: "🇵🇦",
      GT: "🇬🇹",
      SV: "🇸🇻",
      HN: "🇭🇳",
      NI: "🇳🇮",
      BZ: "🇧🇿",
      JM: "🇯🇲",
      TT: "🇹🇹",
      BB: "🇧🇧",
      GD: "🇬🇩",
      LC: "🇱🇨",
      VC: "🇻🇨",
      AG: "🇦🇬",
      KN: "🇰🇳",
      DM: "🇩🇲",
      DO: "🇩🇴",
      HT: "🇭🇹",
      CU: "🇨🇺",
      PR: "🇵🇷",
    };
    return flagEmojis[iso2] || "🏳️";
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest(".country-selector")) {
      showCountryDropdown = false;
    }
  };
</script>

<svelte:head>
  <title>Signup - Drawtopia</title>
  <meta name="description" content="Signup to your Drawtopia account" />
</svelte:head>

<svelte:window on:click={handleClickOutside} />

<div class="login-with-phone-number">
  <div class="form">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
    <div class="container">
      <div class="form_01">
        <div class="heading">
          <div class="welcome-to-drawtopia">
            <span class="welcometodrawtopia_span">Welcome to Drawtopia!</span>
          </div>
          <div>
            <span class="logintocontinuewithyourdrawtopiajourney_span"
              >Log in to continue with your drawtopia journey</span
            >
          </div>
        </div>
        <div class="frame-1410103986">
          <button
            type="button"
            class="button-social"
            on:click={() => alert("Google login coming soon!")}
          >
            <div class="icon-l">
              <div class="super-g-img"></div>
            </div>
            <div>
              <span class="loginwithgoogle_span">Login with Google</span>
            </div>
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
                class:active={loginMethod === "phone"}
                on:click={() => switchLoginMethod("phone")}
              >
                <div class="phone">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div><span class="phonenumber_span">Phone Number</span></div>
              </button>
              <button
                type="button"
                class="button_01"
                class:active={loginMethod === "email"}
                on:click={() => switchLoginMethod("email")}
              >
                <div class="envelope">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div><span class="email_span">Email</span></div>
              </button>
            </div>
            <div class="select-wrapper">
              <label for="accountType">Account Type</label>
              <select id="accountType" required class="selectyouraccount_span">
                <option value="" disabled selected hidden
                  >Select your account</option
                >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {#if loginMethod === "phone"}
              <div class="text-field">
                <div><span class="phonenumber_01_span">Phone Number</span></div>
                <div class="wrapper" style="display: flex; width: 100%;">
                  <select
                    class="country-select {!valid ? 'invalid' : ''}"
                    aria-label="Default select example"
                    name="Country"
                    required
                    bind:value={selectedCountry}
                  >
                    <option value={null} hidden={selectedCountry !== null}
                      >Please select</option
                    >
                    {#each normalizedCountries.filter((country) => getCountryFlag(country.iso2) !== "🏳️") as currentCountry (currentCountry.id)}
                      <option
                        value={currentCountry.iso2}
                        selected={currentCountry.iso2 === selectedCountry}
                        aria-selected={currentCountry.iso2 === selectedCountry}
                      >
                        {getCountryFlag(currentCountry.iso2)}
                        (+{currentCountry.dialCode})
                      </option>
                    {/each}
                  </select>
                  <TelInput
                    bind:country={selectedCountry}
                    bind:value
                    bind:valid
                    bind:detailedValue
                    class="basic-tel-input {!valid ? 'invalid' : ''}"
                  />
                </div>
                {#if errors.phone}
                  <span class="error-text">{errors.phone}</span>
                {/if}
              </div>
            {:else}
              <div class="text-field">
                <div><span class="phonenumber_01_span">Email</span></div>
                <input
                  type="email"
                  bind:value={email}
                  placeholder="Enter your Email Here"
                  class="email-input"
                  class:error={errors.email}
                  disabled={isLoading}
                />
                {#if errors.email}
                  <span class="error-text">{errors.email}</span>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div
        class="by-creating-an-account-you-agree-to-our-terms-of-service-and-privacy-policy"
      >
      <input type="checkbox" id="terms" style="width: 16px; height: 16px;"/>&nbsp;
        <span class="policy_terms_1">By creating an account, you agree to our </span>
        <span class="policy_terms_2">Terms of Service</span>
        <span class="policy_terms_3">and </span>
        <span class="policy_terms_4">Privacy Policy</span>
      </div>

      <form on:submit={handleSubmit} style="width: 100%;">
        <div class="frame-1410104077">
          {#if errors.general}
            <div class="error-banner">{errors.general}</div>
          {/if}
          <button type="submit" class="button_02" disabled={isLoading}>
            {#if isLoading}
              <div class="spinner"></div>
              <span class="login_span">Creating account...</span>
            {:else}
              <div class="login">
                <span class="login_span">Create Account</span>
              </div>
            {/if}
          </button>
          <a href="/login" class="button_03">
            <div class="dont-have-account-sign-up">
              <span class="donthaveaccountsignup_span_01"
                >Already have an account?
              </span>
              &nbsp; <span class="donthaveaccountsignup_span_02">Login</span>
            </div>
          </a>
        </div>
      </form>
    </div>
  </div>
  <div class="background-image"></div>
</div>

<style>
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
  .logo-img {
    background-image: url("../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  .super-g-img {
    background-image: url("../../assets/super-g.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  .logintocontinuewithyourdrawtopiajourney_span {
    color: #666d80;
    font-size: 20px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 28px;
    word-wrap: break-word;
  }

  .loginwithgoogle_span {
    color: #121212;
    font-size: 18px;
    font-family: Geist;
    font-weight: 500;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .stroke {
    flex: 1 1 0;
    height: 2px;
    transform: rotate(180deg);
    background: #ededed;
  }

  .or_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .stroke_01 {
    flex: 1 1 0;
    height: 2px;
    transform: rotate(180deg);
    background: #ededed;
  }

  .phonenumber_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .email_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .phonenumber_01_span {
    color: #0d0d12;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .login_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
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
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .donthaveaccountsignup_span_02 {
    color: black;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .dont-have-account-sign-up {
    text-align: center;
  }

  .background-image {
    width: 48%;
    height: 98vh;
    position: relative;
    background: #eef6ff;
    border-radius: 12px;
    border: 1px #ededed solid;
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
    background: #438bff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    width: 100%;
  }

  .button_03 {
    align-self: stretch;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    /* box-shadow: 0px 4px 4px rgba(141.8, 141.8, 141.8, 0.25) inset; */
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .logo-text-full {
    width: 290px;
    min-height: 54.2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-l {
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
    outline: 1px #d2d6db solid;
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

  .switch {
    align-self: stretch;
    padding: 4px;
    background: #f6f8fa;
    border-radius: 8px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .email-input {
    width: 100%;
    height: 50px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 10px;
    border: 1px solid #bbb;
    font-size: 16px;
    outline: none;
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

  .button,
  .button_01 {
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background: transparent;
  }

  .button:hover,
  .button_01:hover {
    background: rgba(255, 255, 255, 0.8) !important;
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

  .selectyouraccount_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }
  .select-wrapper {
    display: flex;
    flex-direction: column;
    /* font-family: Nunito; */
    width: 100%;
  }

  .select-wrapper label {
    margin-bottom: 6px;
    font-size: 16px;
    color: #333;
  }

  .select-wrapper select {
    padding: 12px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    font-size: 16px;
    color: #333;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("../../assets/CaretDown.svg");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    cursor: pointer;
  }

  .select-wrapper select:focus {
    outline: none;
    border-color: #666;
  }
  .policy_terms_1 {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }
  .policy_terms_2 {
    color: #141414;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 500;
    text-decoration: underline;
    line-height: 25.2px;
    word-wrap: break-word;
    cursor: pointer;
  }
  .policy_terms_3 {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }
  .policy_terms_4 {
    color: #141414;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 500;
    text-decoration: underline;
    line-height: 25.2px;
    word-wrap: break-word;
    cursor: pointer;
  }
  .by-creating-an-account-you-agree-to-our-terms-of-service-and-privacy-policy {
    width: 100%;
  }

  .wrapper :global(.basic-tel-input) {
    height: 50px;
    width: 80%;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 0px 10px 10px 0px;
    border: 1px solid;
    outline: none;
    border-color: #bbb;
    font-size: 16px;
  }

  .wrapper :global(.country-select) {
    height: 50px;
    width: 20%;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid;
    outline: none;
    background-color: white;
    border-color: #bbb;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    background-image: url("../../assets/CaretDown.svg");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
  }

  .wrapper :global(.invalid) {
    border-color: red;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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
  }
</style>
