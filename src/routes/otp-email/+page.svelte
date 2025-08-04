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
        <!-- <div class="input-placeholder_01">
          <div><span class="f_01_span">1</span></div>
        </div>
        <div class="input-placeholder_02">
          <div><span class="f_02_span">1</span></div>
        </div>
        <div class="input-placeholder_03">
          <div><span class="f_03_span">1</span></div>
        </div>
        <div class="input-placeholder_04">
          <div><span class="f_span_01">2</span></div>
        </div>
        <div class="input-placeholder_05">
          <div><span class="f_01_span_01">2</span></div>
        </div> -->
      </div>
      <form on:submit={handleSubmit} style="width: 100%;">
        <div class="frame-1410104077">
          {#if errors.general}
            <div class="error-banner">{errors.general}</div>
          {/if}
          <button type="submit" class="continue_btn" disabled={isLoading}>
            {#if isLoading}
              <div class="spinner"></div>
              <span class="login_span">Logging in...</span>
            {:else}
              <div class="login"><span class="login_span">Continue</span></div>
            {/if}
          </button>
          <button type="submit" class="back_btn" disabled={isLoading}>
            {#if isLoading}
              <div class="spinner"></div>
              <span class="login_span">Logging in...</span>
            {:else}
              <div class=""><span class="">Back</span></div>
            {/if}
          </button>
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

  .continue_btn {
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
    margin-bottom: 10px;
  }

  .back_btn {
    align-self: stretch;
    border: 2px solid #438bff;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    color: #438bff;
    background-color: white;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
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

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
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

  .continue_btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .continue_btn {
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .continue_btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(67, 139, 255, 0.3);
  }

  .back_btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .back_btn {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back_btn:hover:not(:disabled) {
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
