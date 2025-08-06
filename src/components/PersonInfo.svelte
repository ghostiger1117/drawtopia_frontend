<script lang="ts">
  import OutlineBtn from "./OutlineBtn.svelte";
  import PrimaryBtn from "./PrimaryBtn.svelte";
  import PrimarySelect from "./PrimarySelect.svelte";
  import PrimaryInput from "./PrimaryInput.svelte";
  export let showPhotoGuideModal = false;
  let errors = {
    firstName: "",
    ageGroup: "",
    relationship: "",
  };

  let selectedImage: File | null = null;
  let imagePreviewUrl: string | null = null;
  let fileInput: HTMLInputElement;

  const openPhotoGuideModal = () => {
    showPhotoGuideModal = true;
  };

  const handleImageUpload = () => {
    fileInput.click();
  };

  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      selectedImage = file;

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreviewUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    selectedImage = null;
    imagePreviewUrl = null;
    if (fileInput) {
      fileInput.value = "";
    }
  };
</script>

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
        <div class="image" style="cursor: pointer;">
          {#if imagePreviewUrl}
            <div class="image-preview">
              <img src={imagePreviewUrl} alt="Selected" class="preview-image" />
              <div class="image-overlay">
                <button
                  class="remove-image-btn"
                  on:click={removeImage}
                  type="button"
                >
                  <span>✕</span>
                </button>
                <button
                  class="change-image-btn"
                  on:click={handleImageUpload}
                  type="button"
                >
                  Change Image
                </button>
              </div>
            </div>
          {:else}
            <div
              class="frame-1410103822"
              on:click={handleImageUpload}
              on:keydown={(e) => e.key === "Enter" && handleImageUpload()}
              role="button"
              tabindex="0"
            >
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
          {/if}
          <!-- Hidden file input -->
          <input
            type="file"
            accept="image/*"
            bind:this={fileInput}
            on:change={handleFileSelect}
            style="display: none;"
          />
        </div>
      </div>
      <div class="frame-1410104082">
        <div class="make-sure-only-one-person-in-clearly-visible-see-details">
          <span class="makesureonlyonepersoninclearlyvisibleseedetails_span_01"
            >make sure only one person in clearly visible.
          </span><span
            class="makesureonlyonepersoninclearlyvisibleseedetails_span_02"
            on:click={openPhotoGuideModal}
            on:keydown={(e) => e.key === "Enter" && openPhotoGuideModal()}
            role="button"
            tabindex="0"
            style="cursor: pointer;">See Details</span
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
    <div class="title">
      <div class="frame-1410104017">
        <div class="this-story-is-for-your-littlest-dreamer">
          <span class="thisstoryisforyourlittlestdreamer_span"
            >This story is for your littlest dreamer.</span
          >
        </div>
        <div class="keep-it-short-and-simple-well-do-the-rest">
          <span class="keepitshortandsimplewelldotherest_span"
            >Keep it short and simple — we’ll do the rest!</span
          >
        </div>
      </div>
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

<style>
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
    width: 50%;
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
  .uploadsimple {
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
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

  .image-preview {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: 8px;
  }

  .image-preview:hover .image-overlay {
    opacity: 1;
  }

  .remove-image-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    transition: background 0.2s ease;
  }

  .remove-image-btn:hover {
    background: #ff4444;
    color: white;
  }

  .change-image-btn {
    background: #438bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s ease;
  }

  .change-image-btn:hover {
    background: #357ae8;
  }
  .thisstoryisforyourlittlestdreamer_span {
    color: #871fff;
    font-size: 20px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 28px;
    word-wrap: break-word;
  }

  .this-story-is-for-your-littlest-dreamer {
    align-self: stretch;
  }

  .keepitshortandsimplewelldotherest_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .keep-it-short-and-simple-well-do-the-rest {
    align-self: stretch;
  }

  .frame-1410104017 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .title {
    width: 100%;
    height: 100%;
    padding: 8px;
    background: #f5f2ff;
    border-radius: 9px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }
</style>
