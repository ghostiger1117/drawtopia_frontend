<script lang="ts">
  import type {
    DetailedValue,
    CountryCode,
    E164Number,
  } from "svelte-tel-input/types";
  import PrimaryBtn from "../../components/PrimaryBtn.svelte";
  import OutlineBtn from "../../components/OutlineBtn.svelte";
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

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest(".country-selector")) {
      showCountryDropdown = false;
    }
  };
</script>

<svelte:head>
  <title>OTP-Verify your email</title>
  <meta name="description" content="Verify your email" />
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
            <span class="welcometodrawtopia_span">Check Your Email</span>
          </div>
          <div>
            <span class="logintocontinuewithyourdrawtopiajourney_span"
              >We've sent a 6-digit code to your email address</span
            >
            <span class="donthaveaccountsignup_span_02"
              >logoipsum@gmail.com</span
            >
          </div>
        </div>
      </div>
      <div class="frame-1410103856">
        <input class="input-placeholder f_span" type="text" value="1" />
        <input class="input-placeholder f_span" type="text" value="1" />
        <input class="input-placeholder f_span" type="text" value="1" />
        <input class="input-placeholder f_span" type="text" value="1" />
        <input class="input-placeholder f_span" type="text" value="2" />
        <input class="input-placeholder f_span" type="text" value="2" />
      </div>
      <form style="width: 100%;">
        <div class="frame-1410104077">
          {#if errors.general}
            <div class="error-banner">{errors.general}</div>
          {/if}
          <PrimaryBtn text="Continue" isLoading={isLoading} spinner_name="Logging in..." onClick={handleSubmit} />
          <OutlineBtn text="Back" isLoading={isLoading} spinner_name="Logging in..." onClick={handleSubmit} />
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
  .logintocontinuewithyourdrawtopiajourney_span {
    color: #666d80;
    font-size: 20px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 28px;
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

  .logo-text-full {
    width: 290px;
    min-height: 54.2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame-1410104077 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
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

  .error-banner {
    background-color: #fee2e2;
    color: #dc2626;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    text-align: center;
    font-size: 14px;
  }


  .f_span {
    color: #141414;
    font-size: 32px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 44.8px;
    word-wrap: break-word;
  }

  .input-placeholder {
    flex: 1 1 0;
    text-align: center;
    height: 75px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #bbb;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410103856 {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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
