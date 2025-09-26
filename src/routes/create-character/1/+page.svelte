<script lang="ts">
  import StarEmoticon from "../../../components/StarEmoticon.svelte";
  import ProgressBar from "../../../components/ProgressBar.svelte";
  import uploadSimple from "../../../assets/upload-icon.svg";
  import darkColors from "../../../assets/day.svg";
  import pen from "../../../assets/pen.svg";
  import picture from "../../../assets/picture.svg";
  import camera from "../../../assets/Camera-black.svg";
  import arrowLeft from "../../../assets/ArrowLeft.svg";
  import shieldStar from "../../../assets/ShieldStar.svg";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import MobileStepProgressBar from "../../../components/MobileStepProgressBar.svelte";
  import MobileBackBtn from "../../../components/MobileBackBtn.svelte";
  import { uploadCharacterImage } from "../../../lib/storage";
  import { user } from "../../../lib/stores/auth";
  import { storyCreation } from "../../../lib/stores/storyCreation";
  import { onMount } from "svelte";
  
  let fileInput: HTMLInputElement;
  let isDragOver = false;
  let uploading = false;
  let uploadProgress = 0;
  let uploadError = "";
  let uploadedImageUrl = "";
  let selectedFile: File | null = null;
  let selectedChildProfileName = "";

  // Reactive statement to keep local state in sync with store
  $: if ($storyCreation.selectedChildProfileName) {
    selectedChildProfileName = $storyCreation.selectedChildProfileName;
  }

  // Check for selected child profile
  onMount(() => {
    if (browser) {
      // If no child profile is selected, redirect to dashboard
      const childProfileId = sessionStorage.getItem('selectedChildProfileId');
      if (!childProfileId) {
        goto('/dashboard');
      }
    }
  });

  // Handle file selection from input
  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      processImageFile(files[0]);
    }
  };

  // Handle drag events
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    isDragOver = true;
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Only set isDragOver to false if we're leaving the drop zone itself
    const dropZone = event.currentTarget as HTMLElement;
    const relatedTarget = event.relatedTarget as Node;
    
    if (!dropZone.contains(relatedTarget)) {
      isDragOver = false;
    }
  };

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      
      if (file.type.startsWith("image/")) {
        await processImageFile(file);
      } else {
        uploadError = "Please drop an image file (JPEG, PNG, WebP, GIF)";
      }
    } else {
      uploadError = "No files were dropped. Please try again.";
    }
  };

  // Process and upload image file
  const processImageFile = async (file: File) => {
    if (!file || !file.type.startsWith("image/")) {
      uploadError = "Please select a valid image file";
      return;
    }

    selectedFile = file;
    uploadError = "";
    uploading = true;
    uploadProgress = 0;

    try {
      const result = await uploadCharacterImage(
        file,
        $user?.id,
        (progress) => {
          uploadProgress = progress;
        }
      );

      if (result.success && result.url) {
        uploadedImageUrl = result.url;
        
        // Update the story creation store with the image URL
        storyCreation.setOriginalImageUrl(result.url);
        
        // Auto-navigate to step 2 after a brief delay
        setTimeout(() => {
          goto("/create-character/2");
        }, 1000);
      } else {
        uploadError = result.error || "Failed to upload image";
      }
    } catch (error) {
      console.error('Upload error:', error);
      uploadError = "An unexpected error occurred while uploading the image";
    } finally {
      uploading = false;
    }
  };

  // Click handler for upload area
  const handleUploadClick = () => {
    if (!uploading) {
      fileInput?.click();
    }
  };
</script>

<div class="character-creation-default">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <MobileBackBtn />
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span">Create Your Character</span>
      </div>
      {#if selectedChildProfileName}
        <div class="selected-child-info">
          <span class="selectedchild_span">Creating story for: {selectedChildProfileName}</span>
        </div>
      {/if}
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Upload your drawing or draw your own character right here!</span
        >
      </div>
      <div class="tag">
        <div class="shieldstar">
          <img src={shieldStar} alt="star" />
        </div>
        <div>
          <span class="ffreepagepreview_span">2 Free Page Preview</span>
        </div>
      </div>
    </div>
    <MobileStepProgressBar currentStep={1} />
    <ProgressBar currentStep={1} />
    <!-- <ProgressBar currentStep={1} /> -->
    <div class="frame-1410104027">
      <div class="star-container">
        <StarEmoticon />
      </div>
      <div class="message-container">
        <div class="polygon-1"></div>
        <div class="message-content">
          <div
            class="lets-bring-your-character-to-life-upload-a-drawing-or-photo"
          >
            <span class="letsbringyourcharactertolifeuploadadrawingorphoto_span"
              >Let's bring your character to life! Upload a drawing or photo.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410104031">
      <div class="frame-10">
        <div class="frame-1410103935">
          <div class="frame-1410103851">
            <div class="form">
              <div class="upload-character">
                <span class="uploadcharacter_span">Upload Character</span>
              </div>
              <div 
                class="image {isDragOver ? 'drag-over' : ''} {uploading ? 'uploading' : ''}"
                on:click={handleUploadClick}
                on:dragover={handleDragOver}
                on:dragleave={handleDragLeave}
                on:drop={handleDrop}
                role="button"
                tabindex="0"
                on:keydown={(e) => e.key === 'Enter' && handleUploadClick()}
              >
                <input 
                  bind:this={fileInput}
                  type="file" 
                  accept="image/*" 
                  style="display: none;"
                  on:change={handleFileSelect}
                />
                
                {#if uploading}
                  <div class="upload-progress">
                    <div class="spinner"></div>
                    <div class="progress-text">
                      <span class="uploading-text">Uploading...</span>
                      <span class="progress-percentage">{uploadProgress}%</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: {uploadProgress}%"></div>
                    </div>
                  </div>
                {:else if uploadedImageUrl}
                  <div class="upload-success">
                    <img src={uploadedImageUrl} alt="Uploaded character" class="uploaded-image" />
                    <div class="success-text">
                      <span class="success-message">✓ Upload successful!</span>
                      <span class="redirect-message">Redirecting to next step...</span>
                    </div>
                  </div>
                {:else}
                  <div class="frame-1410103822">
                    <div class="uploadsimple">
                      <img src={uploadSimple} alt="uploadSimple" />
                    </div>
                    <div class="frame-1410103823">
                      <div class="click-to-choose-file-or-drag-and-drop">
                        <span class="clicktochoosefileordraganddrop_span_01"
                          >Click to Choose File
                        </span>
                        <span class="clicktochoosefileordraganddrop_span_02"
                          >or drag and drop
                        </span>
                      </div>
                      <div class="png-jpg-gifwebp-up-to-10mb">
                        <span class="pngjpggifwebpupto10mb_span"
                          >PNG, JPG, GIF,Webp Up to 10MB</span
                        >
                      </div>
                    </div>
                  </div>
                {/if}
                
                {#if uploadError}
                  <div class="upload-error">
                    <span class="error-message">{uploadError}</span>
                  </div>
                {/if}
              </div>
            </div>
          </div>
          <button class="button">
            <div class="camera">
              <img src={camera} alt="camera" />
            </div>
            <div class="use-camera">
              <span class="usecamera_span">Use Camera</span>
            </div>
          </button>
        </div>
      </div>
      <div class="frame-1410104032">
        <div class="heading_01">
          <div class="helper-tips">
            <span class="helpertips_span">Helper Tips</span>
          </div>
          <div class="checklist-container">
            <div class="checklist">
              <div class="frame">
                <img src={darkColors} alt="darkColors" />
              </div>
              <div class="use-dark-colors-so-we-can-see-your-character-clearly">
                <span class="usedarkcolorssowecanseeyourcharacterclearly_span"
                  >Use dark colors so we can see your character clearly</span
                >
              </div>
            </div>
            <div class="divider"></div>
            <div class="checklist_01">
              <div class="frame_01">
                <img src={pen} alt="pen" />
              </div>
              <div class="draw-your-whole-character-from-head-to-feet">
                <span class="drawyourwholecharacterfromheadtofeet_span"
                  >Draw your whole character from head to feet</span
                >
              </div>
            </div>
            <div class="divider_01"></div>
            <div class="checklist_02">
              <div class="frame_02">
                <img src={picture} alt="pictured" />
              </div>
              <div class="make-your-character-nice-and-big-on-the-paper">
                <span class="makeyourcharacterniceandbigonthepaper_span"
                  >Make your character nice and big on the paper</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; width: 100%;">
        <button class="button_01" on:click={() => goto("/")}>
          <div class="arrowleft">
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div class="back-to-step">
            <span class="backtostep_span">Back To Step</span>
          </div>
        </button>
      <!-- <button 
        class="button-fill" 
        on:click={() => goto("/create-character/2")}
        disabled={uploading}
      >
        <div class="continue-to-next-step">
          <span class="continuetostyleselection_span">
            {uploading ? 'Uploading...' : 'Continue'}
          </span>
        </div>
      </button> -->
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
  .createyourcharacter_span {
    color: #121212;
    font-size: 32px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .create-your-character {
    align-self: stretch;
    text-align: center;
  }

  .selected-child-info {
    align-self: stretch;
    text-align: center;
    padding: 8px 16px;
    background: #eef6ff;
    border-radius: 12px;
    margin: 8px 0;
  }

  .selectedchild_span {
    color: #438bff;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .uploadyourdrawingordrawyourowncharacterrighthere_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 21.6px;
    word-wrap: break-word;
  }

  .upload-your-drawing-or-draw-your-own-character-right-here {
    align-self: stretch;
    text-align: center;
  }

  .ffreepagepreview_span {
    color: #438bff;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 600;
    word-wrap: break-word;
  }

  .polygon-1 {
    width: 0;
    height: 0;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 12px solid transparent;
    /* border-bottom: 12px solid transparent; */
    border-right: 18px solid #d9eaff;
  }

  .letsbringyourcharactertolifeuploadadrawingorphoto_span {
    color: black;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .lets-bring-your-character-to-life-upload-a-drawing-or-photo {
    width: 417px;
  }

  .uploadcharacter_span {
    color: #121212;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 28px;
    word-wrap: break-word;
  }

  .upload-character {
    align-self: stretch;
  }

  .clicktochoosefileordraganddrop_span_01 {
    color: #438bff;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .clicktochoosefileordraganddrop_span_02 {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .click-to-choose-file-or-drag-and-drop {
    width: 296px;
    text-align: center;
  }

  .pngjpggifwebpupto10mb_span {
    color: #666d80;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .png-jpg-gifwebp-up-to-10mb {
    align-self: stretch;
    text-align: center;
  }

  .usecamera_span {
    color: black;
    background-color: white;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 500;
    word-wrap: break-word;
  }

  .use-camera {
    text-align: center;
  }

  .helpertips_span {
    color: black;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 28px;
    word-wrap: break-word;
  }

  .helper-tips {
    align-self: stretch;
  }

  .usedarkcolorssowecanseeyourcharacterclearly_span {
    color: #121212;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .use-dark-colors-so-we-can-see-your-character-clearly {
    text-align: center;
  }

  .divider {
    align-self: stretch;
    height: 1px;
    background: #ededed;
  }

  .drawyourwholecharacterfromheadtofeet_span {
    color: #121212;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .draw-your-whole-character-from-head-to-feet {
    text-align: center;
  }

  .divider_01 {
    align-self: stretch;
    height: 1px;
    background: #ededed;
  }

  .makeyourcharacterniceandbigonthepaper_span {
    color: #121212;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .make-your-character-nice-and-big-on-the-paper {
    text-align: center;
  }

  .backtostep_span {
    color: black;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .back-to-step {
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

  .frame-1410103823 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410103820 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .shieldstar {
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
    top: -2px;
  }

  .uploadsimple {
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
  }

  .camera {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .frame {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .frame_01 {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .frame_02 {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .arrowleft {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .star-container {
    flex-shrink: 0;
    width: 88px;
    height: 88px;
  }

  .message-container {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .message-content {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: #d9eaff;
    border-radius: 24px;
    margin-left: 22px;
    max-width: 446px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
  }

  .tag {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 12px;
    background: #eef6ff;
    border-radius: 99px;
    outline: 1px #438bff solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 4px;
    display: inline-flex;
  }

  .frame-1410103822 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: inline-flex;
  }

  .button {
    align-self: stretch;
    padding: 8px;
    background: white;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .checklist {
    align-self: stretch;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
    padding-right: 16px;
    background: white;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .checklist_01 {
    align-self: stretch;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
    padding-right: 16px;
    background: white;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .checklist_02 {
    align-self: stretch;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
    padding-right: 16px;
    background: white;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .button_01 {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 4px 4px rgba(98.89, 98.89, 98.89, 0.25);
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    background-color: white;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .heading {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: flex;
  }

  .frame-1410104027 {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
  }

  .image {
    align-self: stretch;
    height: 254px;
    background: #f8fafb;
    overflow: hidden;
    border-radius: 10px;
    outline: 2px #ededed solid;
    outline-offset: -2px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .checklist-container {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
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

  .heading_01 {
    align-self: stretch;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
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

  .frame-1410104032 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
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

  .frame-10 {
    flex: 1 1 0;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: white;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .frame-1410104031 {
    align-self: stretch;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .frame-1410103818 {
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    display: flex;
  }

  .character-creation-default {
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
    background-image: url("../../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    .frame-1410104031 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .frame-10 {
      width: 100%;
    }
    .frame-1410104032 {
      width: 100%;
    }
    .character-creation-default {
      padding-left: 20px;
      padding-right: 20px;
    }
    .star-container {
      width: 25%;
    }
    .message-container {
      max-width: 75%;
    }
    .message-content {
      width: 90%;
    }
    /* .button-fill {
      width: 100%;
    } */
  }

  /* .continuetostyleselection_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  } */

  /* .continue-to-next-step {
    text-align: center;
  }

  .button-fill {
    width: 300px;
    height: 100%;
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
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .button-fill:hover {
    background: #3a7ae4;
    transform: translateY(-1px);
  }

  .button-fill:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  .button-fill:disabled:hover {
    background: #cccccc;
    transform: none;
  } */

  /* Upload area styles */
  .image {
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .image:hover {
    background: #f0f4f8;
    outline-color: #438bff;
  }

  .image.drag-over {
    background: #e8f4ff;
    outline: 2px solid #438bff;
    outline-offset: -2px;
  }

  .image.uploading {
    cursor: not-allowed;
  }

  /* Upload progress styles */
  .upload-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 20px;
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #438bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .progress-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .uploading-text {
    color: #438bff;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
  }

  .progress-percentage {
    color: #666d80;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 500;
  }

  .progress-bar {
    width: 200px;
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #438bff 0%, #5ba0ff 100%);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  /* Upload success styles */
  .upload-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 20px;
  }

  .uploaded-image {
    max-width: 200px;
    max-height: 150px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .success-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .success-message {
    color: #22c55e;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
  }

  .redirect-message {
    color: #666d80;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 400;
  }

  /* Upload error styles */
  .upload-error {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    background: #fee2e2;
    border: 1px solid #fca5a5;
    border-radius: 6px;
    padding: 8px 12px;
    max-width: 90%;
  }

  .error-message {
    color: #dc2626;
    font-size: 12px;
    font-family: Nunito;
    font-weight: 500;
    text-align: center;
  }
  @media (max-width: 800px) {
    .button_01 {
      display: none;
    }
    .create-your-character {
      text-align: left;
    }
    .upload-your-drawing-or-draw-your-own-character-right-here {
      text-align: left;
    }
    .heading {
      align-items: flex-start;
    }
  }
</style>
