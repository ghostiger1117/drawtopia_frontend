<script lang="ts">
  import GiftStepComponent from "../../../components/GiftStepComponent.svelte";
  import PrimarySelect from "../../../components/PrimarySelect.svelte";
  import arrow_left from "../../../assets/ArrowLeft.svg";

  // Age group options
  const ageGroupOptions = [
    { value: "0-2", label: "👶 Ages 0-2 (Tiny Explorers)" },
    { value: "3-5", label: "👧 Ages 3-5 (Imagination Builders)" },
    { value: "6-7", label: "🧒 Ages 6-7 (Story Seekers)" },
    { value: "8-10", label: "👦 Ages 8-10 (Adventure Creators)" },
    { value: "11-12", label: "🧑 Ages 11-12 (Dream Weavers)" }
  ];

  // Relationship options
  const relationshipOptions = [
    { value: "parent", label: "Parent" },
    { value: "grandparent", label: "Grandparent" },
    { value: "aunt-uncle", label: "Aunt/Uncle" },
    { value: "sibling", label: "Sibling" },
    { value: "family-friend", label: "Family Friend" },
    { value: "other", label: "Other" }
  ];

  let selectedAgeGroup = "3-5";
  let selectedRelationship = "grandparent";
  let childName = "Emma";

  const handleAgeGroupChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedAgeGroup = target.value;
  };

  const handleRelationshipChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedRelationship = target.value;
  };

  const handleChildNameChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    childName = target.value;
  };

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
</script>

<div class="profile-creation-filled">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <!-- Mobile Back Button -->
  <div class="mobile-back-button">
    <div
      class="mobile-back-btn"
      role="button"
      tabindex="0"
      on:click={handleBack}
      on:keydown={(e) => e.key === "Enter" && handleBack()}
    >
      <img class="arrow-left-icon" src={arrow_left} alt="back" />
    </div>
    <span class="back-text">Back</span>
  </div>

  <div class="frame-1410103818">
    <div class="frame-5">
      <div class="frame-1">
        <div class="heading">
          <div class="tell-us-about-the-child">
            <span class="tellusaboutthechild_span">Tell us about the child</span
            >
          </div>
          <div class="well-create-a-personalized-story-just-for-them">
            <span class="wellcreateapersonalizedstoryjustforthem_span"
              >We'll create a personalized story just for them</span
            >
          </div>
        </div>
      </div>
    </div>
    <GiftStepComponent currentStep={1} totalSteps={3} stepTitle="Setting Up Gift" stepLabel="Step 1" />
    <div class="frame-10">
      <div class="personal-recipient-information">
        <span class="personalrecipientinformation_span"
          >Personal Recipient Information</span
        >
      </div>
      <div class="frame-1410103935">
        <div class="frame-1410103850">
          <div class="form">
            <div class="childs-first-name">
              <span class="childsfirstname_span">Child’s first name*</span>
            </div>
            <div class="input-placeholder">
              <input 
                type="text" 
                bind:value={childName} 
                on:input={handleChildNameChange}
                placeholder="Enter child's first name"
                class="name-input"
              />
            </div>
          </div>
        </div>
        <div class="form_01">
          <div class="age-group">
            <span class="agegroup_span">Age Group*</span>
          </div>
          <PrimarySelect 
            options={ageGroupOptions} 
            selectedOption={selectedAgeGroup} 
            onChange={handleAgeGroupChange} 
            placeholder="Select age group"
          />
        </div>
        <div class="form_02">
          <div class="select-your-relationship">
            <span class="selectyourrelationship_span"
              >Select Your relationship*</span
            >
          </div>
          <PrimarySelect 
            options={relationshipOptions} 
            selectedOption={selectedRelationship} 
            onChange={handleRelationshipChange} 
            placeholder="Select your relationship"
          />
        </div>
      </div>
      <div class="frame-1410104113">
        <div class="checkbox-label">
          <input type="checkbox" class="input-check" />
          <div class="youll-set-the-occasion-and-pay-theyll-create-the-story">
            <span class="youllsettheoccasionandpaytheyllcreatethestory_span"
              >You'll set the occasion and pay, they'll create the story.</span
            >
          </div>
        </div>
        <div class="frame-1410103991">
          <div class="button">
            <div class="continue-to-occassion-selection">
              <span class="continuetooccassionselection_span"
                >Continue to Occassion Selection</span
              >
            </div>
          </div>
        </div>
        <div class="button_01">
          <img src={arrow_left} alt="arrow left" class="arrowleft" />
          <div class="back"><span class="back_span">Back</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="frame-1410103821">
    <div class="contact-us-hellodrawtopiacom">
      <span class="contactushellodrawtopiacom_span"
        >Contact us: hello@drawtopia.com</span
      >
    </div>
    <div class="rectangle-34"></div>
    <div class="frame-1410103820">
      <div class="privacy-policy">
        <span class="privacypolicy_span">Privacy Policy</span>
      </div>
      <div class="terms-of-service">
        <span class="termsofservice_span">Terms of Service</span>
      </div>
    </div>
  </div>
</div>

<style>
  .logo-img {
    background-image: url("../../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }




  .tellusaboutthechild_span {
    color: #121212;
    font-size: 48px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .tell-us-about-the-child {
    align-self: stretch;
    text-align: center;
  }

  .wellcreateapersonalizedstoryjustforthem_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 21.6px;
    word-wrap: break-word;
  }

  .well-create-a-personalized-story-just-for-them {
    align-self: stretch;
    text-align: center;
  }



  .personalrecipientinformation_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .personal-recipient-information {
    align-self: stretch;
  }

  .childsfirstname_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .childs-first-name {
    align-self: stretch;
  }



  .agegroup_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .age-group {
    align-self: stretch;
  }



  .selectyourrelationship_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .select-your-relationship {
    align-self: stretch;
  }

  .youllsettheoccasionandpaytheyllcreatethestory_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .youll-set-the-occasion-and-pay-theyll-create-the-story {
    flex: 1 1 0;
  }

  .continuetooccassionselection_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .continue-to-occassion-selection {
    text-align: center;
  }



  .back_span {
    color: black;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .back {
    text-align: center;
  }

  .contactushellodrawtopiacom_span {
    color: #141414;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .contact-us-hellodrawtopiacom {
    text-align: center;
  }

  .rectangle-34 {
    align-self: stretch;
    height: 1px;
    background: #ededed;
  }

  .privacypolicy_span {
    color: #141414;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .privacy-policy {
    text-align: center;
  }

  .termsofservice_span {
    color: #141414;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .terms-of-service {
    text-align: center;
  }

  .heading {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: flex;
  }

  .input-placeholder {
    align-self: stretch;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .name-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
  }

  .name-input::placeholder {
    color: #727272;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
  }

  .button {
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
  }

  .frame-1410103820 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .logo-text-full {
    width: 203.32px;
    height: 38px;
    position: relative;
  }

  .frame-1 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    display: flex;
  }

  .form {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-1410103991 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410103821 {
    align-self: stretch;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .navbar {
    align-self: stretch;
    height: 79px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 12px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

  .button_01 {
    align-self: stretch;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 4px 4px rgba(98.89, 98.89, 98.89, 0.25);
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .frame-5 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 48px;
    display: flex;
  }

  .frame-1410103850 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }



  .form_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .form_02 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .checkbox-label {
    align-self: stretch;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .frame-1410103935 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410104113 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-10 {
    align-self: stretch;
    padding-top: 24px;
    padding-bottom: 16px;
    padding-left: 12px;
    padding-right: 12px;
    background: white;
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }

  .frame-1410103818 {
    width: 700px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }

  .profile-creation-filled {
    width: 100%;
    height: 100%;
    padding-top: 24px;
    padding-bottom: 80px;
    padding-left: 100px;
    padding-right: 100px;
    background: white;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    display: inline-flex;
  }
  .input-check {
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
  }

  /* Mobile Back Button Styles */
  .mobile-back-button {
    display: none;
  }

  .mobile-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 8px;
    background: white;
    border-radius: 8px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    cursor: pointer;
    transition: background-color 0.2s;
    width: fit-content;
  }

  .mobile-back-btn:hover {
    background-color: #f8fafb;
  }

  .arrow-left-icon {
    width: 20px;
    height: 20px;
  }

  .back-text {
    color: #121212;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
  }

  /* Fix select positioning */
  .form_01,
  .form_02 {
    position: relative;
    z-index: 1;
  }

  .form {
    position: relative;
    z-index: 2;
  }

  /* Ensure proper stacking context for selects */
  :global(.select-wrapper) {
    position: relative;
    z-index: 10;
  }

  /* Ensure container doesn't clip dropdown */
  .frame-1410103935 {
    overflow: visible;
  }

  .frame-10 {
    overflow: visible;
  }

  .profile-creation-filled {
    overflow: visible;
  }

  /* Mobile responsive styles */
  @media (max-width: 800px) {
    .mobile-back-button {
      display: flex;
      width: 100%;
      margin-bottom: 16px;
      align-items: center;
      gap: 10px;
    }

    .profile-creation-filled {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 16px;
      padding-bottom: 16px;
      gap: 24px;
    }

    .frame-1410103818 {
      width: 100%;
      max-width: 700px;
      gap: 20px;
    }

    /* GiftStepComponent mobile adjustments */
    :global(.progress-bar) {
      width: 100% !important;
      padding: 12px !important;
      margin-bottom: 16px;
    }

    :global(.step1_span),
    :global(.f3_span) {
      font-size: 14px !important;
      line-height: 19.6px !important;
    }

    :global(.settingupgift_span) {
      font-size: 16px !important;
      line-height: 22.4px !important;
    }

    :global(.frame-1410103997) {
      margin-bottom: 8px;
    }

    :global(.bar) {
      height: 6px !important;
      margin-bottom: 8px;
    }

    .frame-10 {
      padding: 16px;
      gap: 16px;
    }

    .frame-1410103935 {
      flex-direction: column;
      gap: 16px;
      overflow: visible;
    }

    .form,
    .form_01,
    .form_02 {
      width: 100%;
      overflow: visible;
    }

    /* Mobile select improvements */
    :global(.select-wrapper) {
      width: 100% !important;
      height: 45px !important;
      padding: 8px 12px !important;
      font-size: 16px !important;
      z-index: 20 !important;
      position: relative;
    }

    .input-placeholder {
      height: 45px;
      padding: 8px 12px;
    }

    .name-input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      font-family: Nunito;
      color: #141414;
    }

    .button {
      width: 100%;
      padding: 14px 20px;
    }

    .button_01 {
      display: none;
    }

    .frame-1410104113 {
      gap: 16px;
    }

    .checkbox-label {
      padding: 10px;
      gap: 10px;
    }

    /* Typography adjustments for mobile */
    .tellusaboutthechild_span {
      font-size: 32px;
      line-height: 44.8px;
    }

    .wellcreateapersonalizedstoryjustforthem_span {
      font-size: 16px;
      line-height: 19.2px;
    }

    .personalrecipientinformation_span {
      font-size: 20px;
      line-height: 28px;
    }

    .childsfirstname_span,
    .agegroup_span,
    .selectyourrelationship_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .youllsettheoccasionandpaytheyllcreatethestory_span {
      font-size: 13px;
      line-height: 18.2px;
    }

    .continuetooccassionselection_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .contactushellodrawtopiacom_span,
    .privacypolicy_span,
    .termsofservice_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    /* Layout adjustments */
    .frame-5 {
      gap: 20px;
    }

    .heading {
      gap: 12px;
    }

    .frame-1410103821 {
      gap: 8px;
      margin-top: 24px;
    }

    .frame-1410103820 {
      gap: 16px;
    }
  }
</style>
