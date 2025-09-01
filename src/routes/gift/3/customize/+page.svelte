<script lang="ts">
  import GiftStepComponent from "../../../../components/GiftStepComponent.svelte";
  import EditGiftCardModal from "../../../../components/EditGiftCardModal.svelte";
  import arrow_left from "../../../../assets/ArrowLeft.svg";
  import eye from "../../../../assets/Eye.svg";
  import gift from "../../../../assets/Gift_yellow.svg";
  import purple_check from "../../../../assets/purple-check.svg";

  let showEditGiftCardModal = false;

  const handleReviewPurchaseClick = () => {
    console.log("Review Purchase clicked!"); // Debug
    showEditGiftCardModal = true;
    console.log("Modal state:", showEditGiftCardModal); // Debug
  };

  const handleCloseModal = () => {
    showEditGiftCardModal = false;
  };

  const handleModalKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
</script>

<div class="gift-packaging">
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
          <div class="customize-your-gift">
            <span class="customizeyourgift_span">Customize Your Gift</span>
          </div>
          <div class="add-a-personal-touch-to-make-it-extra-special">
            <span class="addapersonaltouchtomakeitextraspecial_span"
              >Add a personal touch to make it extra special</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="step-component-container">
      <GiftStepComponent
        currentStep={3}
        totalSteps={3}
        stepTitle="Customize your Gift"
        stepLabel="Step 3"
      />
    </div>
    <div class="frame-10">
      <div class="gift-packaging_01">
        <span class="giftpackaging_01_span">Gift Packaging</span>
      </div>
      <div class="card">
        <div class="frame-1410104119">
          <div><span class="digitalgiftcard_span">Digital Gift Card</span></div>
          <div class="icon">
            <img src={eye} alt="eye" class="eye" />
            <div><span class="preview_span">Preview</span></div>
          </div>
        </div>
        <div class="frame-1410104160">
          <div class="frame-1410104171">
            <div style="width : 100%; position : relative;">
              <img
              class="image_01"
              src="https://placehold.co/209x322"
              alt="Digital gift card design option 1"
              />
              <img src={purple_check} alt="purple_check" class="purple_check" />
            </div>
            <div style="width : 100%; position : relative;">
            <img
              class="image_02"
              src="https://placehold.co/209x322"
              alt="Digital gift card design option 1"
            />
            </div>
            <div style="width : 100%; position : relative;">
            <img
              class="image_02"
              src="https://placehold.co/209x322"
              alt="Digital gift card design option 1"
            />
            </div>
          </div>
          <div class="button">
            <div class="edit-digital-gift-card">
              <span class="editdigitalgiftcard_span"
                >Edit Digital Gift Card</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="stroke"></div>
      <div class="frame-1410104037">
        <div class="frame-1410104122">
          <div class="tag">
            <img src={gift} alt="gift" class="gift" />
          </div>
          <div class="frame-1410104123">
            <div class="gift-wrap-upgrade">
              <span class="giftwrapupgrade_span">Gift Wrap Upgrade</span>
            </div>
            <div class="premium-packaging-for-printed-books">
              <span class="premiumpackagingforprintedbooks_span"
                >Premium packaging for printed books</span
              >
            </div>
          </div>
        </div>
        <div class="tag_01">
          <div><span class="comingsoon_span">Coming Soon</span></div>
        </div>
      </div>
    </div>
    <div class="frame-1410104113">
      <div class="frame-1410103991">
        <div
          class="button_01"
          role="button"
          tabindex="0"
          on:click={handleReviewPurchaseClick}
          on:keydown={(e) => e.key === "Enter" && handleReviewPurchaseClick()}
        >
          <div class="review-purchase">
            <span class="reviewpurchase_span">Review & Purchase</span>
          </div>
        </div>
      </div>
      <div class="button_02">
        <img src={arrow_left} alt="arrow left" class="arrowleft" />
        <div class="back"><span class="back_span">Back</span></div>
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
  <!-- Modal Overlay -->
  {#if showEditGiftCardModal}
    <div
      class="modal-overlay"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click={handleCloseModal}
      on:keydown={handleModalKeydown}
    >
      <div
        class="modal-content"
        role="dialog"
        tabindex="0"
        on:click|stopPropagation
        on:keydown|stopPropagation
      >
        <EditGiftCardModal />
      </div>
    </div>
  {/if}
</div>

<style>
  .logo-img {
    background-image: url("../../../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .customizeyourgift_span {
    color: #121212;
    font-size: 48px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .customize-your-gift {
    align-self: stretch;
    text-align: center;
  }

  .addapersonaltouchtomakeitextraspecial_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 21.6px;
    word-wrap: break-word;
  }

  .add-a-personal-touch-to-make-it-extra-special {
    align-self: stretch;
    text-align: center;
  }

  .giftpackaging_01_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .gift-packaging_01 {
    align-self: stretch;
  }

  .digitalgiftcard_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .preview_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .image_01 {
    flex: 1 1 0;
    height: 322px;
    position: relative;
    border-radius: 12px;
    border: 1px #ededed solid;
    box-shadow: 0px 1px 8px #871FFF;
    outline: 1px #964DFF solid;
  }

  .image_02 {
    flex: 1 1 0;
    height: 322px;
    position: relative;
    background: #e8e8e8;
    border-radius: 12px;
    border: 1px #ededed solid;
  }


  .editdigitalgiftcard_span {
    color: #438bff;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .edit-digital-gift-card {
    text-align: center;
  }

  .stroke {
    align-self: stretch;
    height: 1px;
    background: #ededed;
  }

  .giftwrapupgrade_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .gift-wrap-upgrade {
    align-self: stretch;
  }

  .premiumpackagingforprintedbooks_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .premium-packaging-for-printed-books {
    align-self: stretch;
  }

  .comingsoon_span {
    color: #ffbe4c;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .reviewpurchase_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .review-purchase {
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
    border-radius: 20px;
    outline: 1px #438bff solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .frame-1410104123 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }

  .tag_01 {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: #fff6e0;
    border-radius: 12px;
    outline: 1px #ffbe4c solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .button_01 {
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

  .eye {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .gift {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .arrowleft {
    width: 20px;
    height: 20px;
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

  .icon {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 12px;
    background: white;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .tag {
    padding: 10px;
    background: #fff6e0;
    border-radius: 12px;
    outline: 1px #ffbe4c solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .button_02 {
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

  .frame-1410104119 {
    align-self: stretch;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
  }

  .frame-1410104171 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104122 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
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

  .frame-1410104160 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410104037 {
    align-self: stretch;
    padding: 12px;
    border-radius: 10px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .card {
    align-self: stretch;
    padding: 12px;
    background: white;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-10 {
    width: 700px;
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
    justify-content: center;
    align-items: center;
    gap: 24px;
    display: flex;
  }

  .gift-packaging {
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

  .step-component-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .purple_check {
    width: 24px;
    position: absolute;
    overflow: hidden;
    top: 10px;
    right: 10px;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    width: 90vw;
    max-width: 600px;
    height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  /* Make button clickable */
  .button_01 {
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .button_01:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(67, 139, 255, 0.3);
  }

  .button_01:focus {
    outline: 2px solid #438bff;
    outline-offset: 2px;
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

    .gift-packaging {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 16px;
      padding-bottom: 16px;
      gap: 24px;
      overflow: visible;
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

    .step-component-container {
      width: 100%;
    }

    /* Main content mobile */
    .frame-10 {
      width: 100%;
      padding: 16px;
      gap: 16px;
    }

    .card {
      width: 100%;
      padding: 16px;
      gap: 16px;
    }

    .frame-1410104160 {
      flex-direction: column;
      gap: 16px;
    }

    .frame-1410104171 {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .image_01,
    .image_02 {
      width: 100%;
      height: auto;
    }

    .button {
      width: 100%;
      padding: 12px 16px;
    }

    /* Gift wrap section mobile */
    .frame-1410104037 {
      flex-direction: column;
      gap: 12px;
      padding: 12px;
    }

    .frame-1410104122 {
      width: 100%;
    }

    /* Preview tag mobile */
    .icon {
      width: 100%;
      justify-content: center;
      padding: 8px 16px;
    }

    /* Coming Soon tag mobile */
    .tag_01 {
      width: 100%;
      align-self: stretch;
      justify-content: center;
    }

    /* Continue section mobile */
    .frame-1410104113 {
      width: 100%;
      gap: 16px;
    }

    .button_01 {
      width: 100%;
      padding: 14px 20px;
    }

    .button_02 {
      display: none;
    }

    /* Typography adjustments for mobile */
    .customizeyourgift_span {
      font-size: 32px;
      line-height: 44.8px;
    }

    .addapersonaltouchtomakeitextraspecial_span {
      font-size: 16px;
      line-height: 19.2px;
    }

    .giftpackaging_01_span {
      font-size: 20px;
      line-height: 28px;
    }

    .digitalgiftcard_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .preview_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .editdigitalgiftcard_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .giftwrapupgrade_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .premiumpackagingforprintedbooks_span {
      font-size: 12px;
      line-height: 16.8px;
    }

    .comingsoon_span {
      font-size: 12px;
      line-height: 16.8px;
    }

    .reviewpurchase_span {
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

    /* Modal mobile adjustments */
    .modal-content {
      width: 95vw;
      height: 80vh;
      max-height: 600px;
    }
    .frame-1410104119 {
      display: block;
    }
  }
</style>
