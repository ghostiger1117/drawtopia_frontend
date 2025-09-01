<script lang="ts">
  import GiftStepComponent from "../../../components/GiftStepComponent.svelte";
  import PrimarySelect from "../../../components/PrimarySelect.svelte";
  import arrow_left from "../../../assets/ArrowLeft.svg";
  import GiftStoryComponent from "../../../components/GiftStoryComponent.svelte";

  // Sample story data
  const stories = [
    {
      id: 1,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 3-8",
      title: "First Day of School",
      description:
        "A confidence-building adventure about making friends and being brave",
    },
    {
      id: 2,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 4-9",
      title: "Birthday Surprise",
      description:
        "A magical story about celebrating special moments and family love",
    },
    {
      id: 3,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 5-10",
      title: "Space Explorer",
      description:
        "An exciting journey through the galaxy filled with wonder and discovery",
    },
    {
      id: 4,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 3-7",
      title: "Animal Friends",
      description:
        "A heartwarming tale about friendship and caring for our furry companions",
    },
    {
      id: 5,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 6-11",
      title: "Superhero Training",
      description:
        "An empowering story about discovering your unique strengths and abilities",
    },
    {
      id: 6,
      image: "https://placehold.co/402x280",
      ageRange: "Ages 4-8",
      title: "Ocean Adventure",
      description:
        "A thrilling underwater expedition filled with marine life and mysteries",
    },
  ];

  // Age group options
  const ageGroupOptions = [
    { value: "0-2", label: "👶 Ages 0-2 (Tiny Explorers)" },
    { value: "3-5", label: "👧 Ages 3-5 (Imagination Builders)" },
    { value: "6-7", label: "🧒 Ages 6-7 (Story Seekers)" },
    { value: "8-10", label: "👦 Ages 8-10 (Adventure Creators)" },
    { value: "11-12", label: "🧑 Ages 11-12 (Dream Weavers)" },
  ];

  // Relationship options
  const relationshipOptions = [
    { value: "parent", label: "Parent" },
    { value: "grandparent", label: "Grandparent" },
    { value: "aunt-uncle", label: "Aunt/Uncle" },
    { value: "sibling", label: "Sibling" },
    { value: "family-friend", label: "Family Friend" },
    { value: "other", label: "Other" },
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
            <span class="tellusaboutthechild_span">What's the special occasion?</span
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
    <div class="step-component-container">
      <GiftStepComponent
        currentStep={2}
        totalSteps={3}
        stepTitle="Choose Your Story"
        stepLabel="Step 2"
      />
    </div>
    <!-- Story Selection Section -->
    <div class="story-selection">
      <!-- Stories Grid -->
      <div class="stories-grid">
        {#each stories as story (story.id)}
          <div
            class="story-item"
            role="button"
            tabindex="0"
            on:click={() => console.log("Selected story:", story.title)}
            on:keydown={(e) =>
              e.key === "Enter" && console.log("Selected story:", story.title)}
          >
            <GiftStoryComponent
              image={story.image}
              ageRange={story.ageRange}
              title={story.title}
              description={story.description}
            />
          </div>
        {/each}
      </div>

      <!-- Continue Button -->
      <div class="continue-section-container">
        <div class="continue-section">
          <div class="frame-1410103991">
            <div class="button">
              <div class="continue-to-payment">
                <span class="continuetopayment_span">Continue to Payment</span>
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

  .frame-1410103818 {
    width: 100%;
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

  /* Story Selection Styles */
  .story-selection {
    align-self: stretch;
    background: white;
    border-radius: 20px;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }

  .stories-grid {
    align-self: stretch;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .story-item {
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    border-radius: 20px;
    overflow: hidden;
  }

  .story-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .story-item:focus {
    outline: 2px solid #438bff;
    outline-offset: 2px;
  }

  .continue-section {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
    margin-top: 16px;
    width: 700px;
  }

  .continuetopayment_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .continue-to-payment {
    text-align: center;
  }

  .arrowleft {
    width: 20px;
    height: 20px;
  }
  .step-component-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .continue-section-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
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

    /* Stories grid responsive - horizontal scrolling */
    .stories-grid {
      display: flex !important;
      flex-direction: row !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      gap: 16px !important;
      padding: 0 4px 16px 4px !important;
      scroll-snap-type: x mandatory !important;
      -webkit-overflow-scrolling: touch !important;
    }

    .story-item {
      flex: 0 0 280px !important;
      width: 280px !important;
      scroll-snap-align: start !important;
    }

    /* Hide scrollbar but keep functionality */
    .stories-grid::-webkit-scrollbar {
      height: 4px;
    }

    .stories-grid::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }

    .stories-grid::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 2px;
    }

    .stories-grid::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }

    /* Add subtle shadow to indicate more content */
    .story-selection {
      position: relative;
    }

    .story-selection::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 100%;
      background: linear-gradient(to left, rgba(255,255,255,0.8), transparent);
      pointer-events: none;
      z-index: 1;
    }

    /* Ensure story items have proper touch interaction */
    .story-item {
      touch-action: manipulation;
      user-select: none;
    }

    /* Continue section mobile */
    .continue-section {
      width: 100%;
      gap: 16px;
    }

    .button {
      width: 100%;
      padding: 14px 20px;
    }

    .button_01 {
      display: none;
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

    .continuetopayment_span {
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

    .story-selection {
      gap: 20px;
    }

    .step-component-container,
    .continue-section-container {
      width: 100%;
    }

    /* Ensure proper overflow for mobile */
    .profile-creation-filled {
      overflow: visible;
    }
  }
</style>
