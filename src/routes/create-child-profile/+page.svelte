<script>
  import BackBtn from "../../components/BackBtn.svelte";

  import PhotoGuideModal from "../../components/PhotoGuideModal.svelte";
  import PersonInfo from "../../components/PersonInfo.svelte";
  import StoryPreview from "../../components/StoryPreview.svelte";
  
  let showPhotoGuideModal = false;
  
  const closePhotoGuideModal = () => {
    showPhotoGuideModal = false;
  };
</script>

<div class="profile-creation-default">
  <div class="navbar" style="justify-content: center;">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <div class="back-btn-container">
    <BackBtn />
  </div>
  <div class="frame-5">
    <div class="frame-1">
      <div class="heading">
        <div class="create-child-profile">
          <span class="createchildprofile_span">Create Child Profile</span>
        </div>
        <div
          class="tell-us-about-your-child-so-we-can-personalize-their-drawtopia-experience"
        >
          <span
            class="tellusaboutyourchildsowecanpersonalizetheirdrawtopiaexperience_span"
            >Tell us about your child so we can personalize their Drawtopia
            experience</span
          >
        </div>
      </div>
    </div>
  </div>
  <div class="progress-bar">
    <div class="frame-1410103829">
      <div class="frame-1410103997">
        <div class="step-1"><span class="step1_span">Step 1</span></div>
        <div><span class="f2_span">1/2</span></div>
      </div>
      <div class="bar">
        <div class="bar_01"></div>
      </div>
      <div class="setting-up-profile">
        <span class="settingupprofile_span">Setting Up Profile</span>
      </div>
    </div>
  </div>
  <div class="frame-1410103818">
    <PersonInfo bind:showPhotoGuideModal />
    <StoryPreview />
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

{#if showPhotoGuideModal}
  <div class="modal-overlay" on:keydown={(e) => e.key === 'Escape' && closePhotoGuideModal()} role="dialog" tabindex="-1">
    <div class="modal-container">
      <PhotoGuideModal onClose={closePhotoGuideModal} />
    </div>
  </div>
{/if}

<style>


  .createchildprofile_span {
    color: #121212;
    font-size: 48px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .create-child-profile {
    align-self: stretch;
  }

  .tellusaboutyourchildsowecanpersonalizetheirdrawtopiaexperience_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 21.6px;
    word-wrap: break-word;
  }

  .tell-us-about-your-child-so-we-can-personalize-their-drawtopia-experience {
    align-self: stretch;
  }

  .step1_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .step-1 {
    width: 63px;
  }

  .f2_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .bar_01 {
    width: 50%;
    height: 8px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: #438bff;
    border-radius: 12px;
  }

  .settingupprofile_span {
    color: #121212;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .setting-up-profile {
    align-self: stretch;
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

  .frame-1410103997 {
    align-self: stretch;
    justify-content: space-between;
    align-items: center;
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
    min-height: 38px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-img {
    background-image: url("../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  .bar {
    align-self: stretch;
    height: 8px;
    position: relative;
    background: #eef6ff;
    overflow: hidden;
    border-radius: 12px;
  }



  .frame-1 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
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
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
  }

  .frame-1410103829 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }



  .frame-5 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 48px;
    display: flex;
  }



  .progress-bar {
    align-self: stretch;
    padding: 16px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410103818 {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
    flex-direction: row;
  }

  .profile-creation-default {
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

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-container {
    position: absolute  ;
    min-width: 600px;
    min-height: 440px;
    overflow-y: auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
  .back-btn-container {
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
  }

</style>
