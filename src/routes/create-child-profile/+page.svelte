<script>
  import BackBtn from "../../components/BackBtn.svelte";
  import OutlineBtn from "../../components/OutlineBtn.svelte";
  import PrimaryBtn from "../../components/PrimaryBtn.svelte";
  import PrimarySelect from "../../components/PrimarySelect.svelte";
  import PrimaryInput from "../../components/PrimaryInput.svelte";
  import PhotoGuideModal from "../../components/PhotoGuideModal.svelte";
  
  let errors = {
    firstName: "",
    ageGroup: "",
    relationship: "",
  };
  
  let showPhotoGuideModal = false;
  
  const openPhotoGuideModal = () => {
    showPhotoGuideModal = true;
  };
  
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
  <div class="frame-1410103818">
    <BackBtn />
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
    <div class="frame-10">
      <div class="personal-information">
        <span class="personalinformation_span">Personal Information</span>
      </div>
      <div class="frame-1410103935">
        <div class="frame-1410103851">
          <div class="form">
            <div class="upload-a-photo-of-childs-name">
              <span class="uploadaphotoofchildsname_span"
                >Upload a photo of [Child's Name]</span
              >
            </div>
            <div class="image" on:click={openPhotoGuideModal} on:keydown={(e) => e.key === 'Enter' && openPhotoGuideModal()} role="button" tabindex="0" style="cursor: pointer;">
              <div class="frame-1410103822">
                <div class="uploadsimple">
                  <div class="vector_01"></div>
                </div>
                <div class="frame-1410103823">
                  <div class="click-to-upload-or-drag-and-drop">
                    <span class="clicktouploadordraganddrop_span"
                      >Click to upload or drag and drop
                    </span>
                  </div>
                  <div class="png-jpg-gif-up-to-10mb">
                    <span class="pngjpggifupto10mb_span"
                      >PNG, JPG, GIF Up to 10MB</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-1410104082">
            <div
              class="make-sure-only-one-person-in-clearly-visible-see-details"
            >
              <span
                class="makesureonlyonepersoninclearlyvisibleseedetails_span_01"
                >make sure only one person in clearly visible.
              </span><span
                class="makesureonlyonepersoninclearlyvisibleseedetails_span_02"
                >See Details</span
              >
            </div>
          </div>
        </div>
        <div class="frame-1410103850">
          <div class="form_01">
            <div class="childs-first-name">
              <span class="childsfirstname_span">Child’s first name*</span>
            </div>
            <PrimaryInput
              type="text"
              placeholder="Enter your child’s first name (e.g., Léa)"
              disabled={false}
              {errors}
            />
          </div>
        </div>
        <div class="form_02">
          <div class="age-group">
            <span class="agegroup_span">Age Group*</span>
          </div>
          <PrimarySelect
            options={["0-2", "3-5", "6-8", "9-11", "12-14", "15-17"]}
            selectedOption="0-2"
            onChange={() => {}}
          />
        </div>
        <div class="form_03">
          <div class="select-your-relationship">
            <span class="selectyourrelationship_span"
              >Select Your relationship*</span
            >
          </div>
          <!-- <div class="input-placeholder_02"> -->
          <PrimarySelect
            options={["Parent", "Grandparent", "Aunt", "Uncle", "Other"]}
            selectedOption="Parent"
            onChange={() => {}}
          />
          <!-- </div> -->
        </div>
      </div>
      <div class="frame-1410103991">
        <OutlineBtn
          text="Add Another Child"
          isLoading={false}
          spinner_name="add-another-child"
          onClick={() => {}}
          outlineType="dot-outline"
        />
        <PrimaryBtn
          text="Continue to Story Creation"
          isLoading={false}
          spinner_name="continue-to-story-creation"
          onClick={() => {}}
        />
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

  .personalinformation_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .personal-information {
    align-self: stretch;
  }

  .uploadaphotoofchildsname_span {
    color: #121212;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .upload-a-photo-of-childs-name {
    align-self: stretch;
  }

  .vector_01 {
    width: 24px;
    height: 24px;
    left: 4px;
    top: 3px;
    position: absolute;
    /* background: #141414; */
    background-image: url("../../assets/upload-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .clicktouploadordraganddrop_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .click-to-upload-or-drag-and-drop {
    align-self: stretch;
    text-align: center;
  }

  .pngjpggifupto10mb_span {
    color: #666d80;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .png-jpg-gif-up-to-10mb {
    align-self: stretch;
    text-align: center;
  }

  .makesureonlyonepersoninclearlyvisibleseedetails_span_01 {
    color: black;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .makesureonlyonepersoninclearlyvisibleseedetails_span_02 {
    color: #438bff;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 600;
    text-decoration: underline;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .make-sure-only-one-person-in-clearly-visible-see-details {
    flex: 1 1 0;
    text-align: center;
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

  .frame-1410103823 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104082 {
    align-self: stretch;
    padding-top: 8px;
    padding-bottom: 8px;
    background: #eef6ff;
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

  .uploadsimple {
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
  }

  .frame-1 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
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

  .frame-1410103822 {
    width: 251px;
    left: 212px;
    top: 17.14px;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
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

  .image {
    align-self: stretch;
    height: 133px;
    position: relative;
    background: #f8fafb;
    overflow: hidden;
    border-radius: 10px;
    outline: 2px #ededed solid;
    outline-offset: -2px;
  }

  .form_02 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .form_03 {
    width: 100%;
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

  .form {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-1410103851 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410103935 {
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


</style>
