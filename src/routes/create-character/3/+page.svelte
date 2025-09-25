<script lang="ts">
  import StarEmoticon from "../../../components/StarEmoticon.svelte";
  import ProgressBar from "../../../components/ProgressBar.svelte";
  import arrowLeft from "../../../assets/ArrowLeft.svg";
  import shieldStar from "../../../assets/ShieldStar.svg";
  import { goto } from "$app/navigation";
  import MobileBackBtn from "../../../components/MobileBackBtn.svelte";
  import MobileStepProgressBar from "../../../components/MobileStepProgressBar.svelte";
  import StyleCard from "../../../components/StyleCard.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import D3 from "../../../assets/3d.png";
  import Cartoon from "../../../assets/cartoon.png";
  import Anime from "../../../assets/anime.png";
  import { 
    generateStyledImage, 
    generateMultipleStyledImages, 
    loadGeneratedImages, 
    handleImageUrlChange,
    saveSelectedImageUrl,
    hasSelectedImageChanged,
    clearAllCachedImages
  } from "../../../lib/imageGeneration";
  import { storyCreation } from "../../../lib/stores/storyCreation";

  let selectedStyle = "cartoon"; // Default selection: "3d", "cartoon", or "anime"
  let uploadedImageUrl = "";
  let characterName = "";
  let selectedCharacterType = "";
  let specialAbility = "";
  let generatingStates: { [key: string]: boolean } = {};
  let generatedImages: { [key: string]: string } = {};
  let error = "";
  
  const styles = ['3d', 'cartoon', 'anime'];

  // Retrieve data from sessionStorage on component mount
  onMount(() => {
    if (browser) {
      const storedImageUrl = sessionStorage.getItem('characterImageUrl');
      const storedCharacterName = sessionStorage.getItem('characterName');
      const storedCharacterType = sessionStorage.getItem('selectedCharacterType');
      const storedSpecialAbility = sessionStorage.getItem('specialAbility');
      
      if (storedImageUrl) {
        uploadedImageUrl = storedImageUrl;
      } else {
        // If no image URL is found, redirect back to step 1
        goto('/create-character/1');
        return;
      }
      
      if (storedCharacterName) characterName = storedCharacterName;
      if (storedCharacterType) selectedCharacterType = storedCharacterType;
      if (storedSpecialAbility) specialAbility = storedSpecialAbility;
      
      // Check if the original image URL has changed from step 2
      const step2ImageChanged = hasSelectedImageChanged('2', uploadedImageUrl);
      const imageUrlChanged = handleImageUrlChange(uploadedImageUrl, styles);
      
      if (imageUrlChanged || step2ImageChanged) {
        // Clear all cached images and generate new ones
        clearAllCachedImages();
        generatedImages = {};
        generateStyleImages(styles);
      } else {
        // Load previously generated images from sessionStorage
        generatedImages = loadGeneratedImages(styles);
        
        // Only generate images that haven't been generated yet
        const missingStyles = styles.filter(style => !generatedImages[style]);
        if (missingStyles.length > 0) {
          generateStyleImages(missingStyles);
        }
      }
    }
  });

  function selectStyle(style: string) {
    selectedStyle = style;
    
    // Save the selected styled image URL
    if (browser && generatedImages[style]) {
      saveSelectedImageUrl('3', generatedImages[style]);
    }
  }

  // Generate images for specified styles simultaneously
  const generateStyleImages = async (stylesToGenerate: string[]) => {
    if (!uploadedImageUrl) return;
    
    error = ""; // Clear previous errors
    
    // Set specified styles to generating state
    stylesToGenerate.forEach(style => {
      generatingStates[style] = true;
    });
    generatingStates = { ...generatingStates };
    
    // Generate specified images in parallel
    const promises = stylesToGenerate.map(style => generateSingleStyledImage(style));
    await Promise.allSettled(promises);
  };

  // Generate a single styled image using the utility function
  const generateSingleStyledImage = async (style: string) => {
    try {
      const result = await generateStyledImage({
        imageUrl: uploadedImageUrl,
        style: style,
        quality: 'normal',
        saveToStorage: true
      });

      if (result.success && result.url) {
        generatedImages[style] = result.url;
        // Force reactivity update
        generatedImages = { ...generatedImages };
        
        // If this is the currently selected style, save it
        if (style === selectedStyle) {
          saveSelectedImageUrl('3', result.url);
        }
      } else {
        error = result.error || `Failed to generate ${style} image`;
      }
    } catch (err) {
      console.error(`Error generating ${style} image:`, err);
      error = err instanceof Error ? err.message : `Failed to generate ${style} image. Please try again.`;
    } finally {
      generatingStates[style] = false;
      generatingStates = { ...generatingStates };
    }
  };

  // Handle continue to next step
  const handleContinue = () => {
    // Update story creation store with selected style
    storyCreation.setCharacterStyle(selectedStyle as any);
    
    goto("/create-character/4");
  };
</script>

<div class="character-creation-default">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <MobileBackBtn backRoute="/create-character/2" />
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span"
          >Choose your Character Style Selection</span
        >
      </div>
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Choose the artistic style that will bring your character to life.
          Each style offers a unique way to tell your story.</span
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
    <MobileStepProgressBar currentStep={3} />
    <ProgressBar currentStep={3} />
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
              >What art style do you love most?</span
            >
          </div>
        </div>
      </div>
    </div>
    
    {#if error}
      <div class="error-message">
        <span class="error-text">{error}</span>
      </div>
    {/if}
    
    <div class="frame-1410103852">
      <StyleCard
        styleId="3d"
        title="3D Realistic"
        subtitle="Like your favorite animated movies"
        bestForText="Kids who love Disney and Pixar movies"
        imageSrc={generatedImages["3d"] || ""}
        imageAlt="3D Realistic"
        isSelected={selectedStyle === "3d"}
        onSelect={selectStyle}
        isGenerating={generatingStates["3d"] || false}
      />
      <StyleCard
        styleId="cartoon"
        title="Cartoon"
        subtitle="Classic storybook style"
        bestForText="Timeless storybook adventures"
        imageSrc={generatedImages["cartoon"] || ""}
        imageAlt="Cartoon"
        isSelected={selectedStyle === "cartoon"}
        onSelect={selectStyle}
        isGenerating={generatingStates["cartoon"] || false}
      />
      <StyleCard
        styleId="anime"
        title="Anime"
        subtitle="Japanesse Anime Style"
        bestForText="Kids who love anime and manga"
        imageSrc={generatedImages["anime"] || ""}
        imageAlt="Anime"
        isSelected={selectedStyle === "anime"}
        onSelect={selectStyle}
        isGenerating={generatingStates["anime"] || false}
      />
    </div>

    <div class="button-container">
        <button class="button_01" on:click={() => goto("/create-character/2")}>
          <div class="arrowleft">
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div class="back-to-step">
            <span class="backtostep_span">Back To Step</span>
          </div>
        </button>
      <button
        class="button-fill"
        on:click={handleContinue}
      >
        <div class="continue-to-style-selection">
          <span class="continuetostyleselection_span"
            >Continue to Style World</span
          >
        </div>
      </button>
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
    font-size: 48px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .create-your-character {
    align-self: stretch;
    text-align: center;
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

  .button_01 {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 4px 4px rgba(98.89, 98.89, 98.89, 0.25);
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    background-color: white;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    width: 200px;
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

  .continuetostyleselection_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .continue-to-style-selection {
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
  }

  .frame-1410103852 {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
  }
  .button-container {
    display: flex; 
    justify-content: space-between; 
    width: 100%;
  }

  .error-message {
    background: #fee;
    border: 1px solid #fcc;
    border-radius: 12px;
    padding: 12px 16px;
    margin: 8px 0;
    text-align: center;
  }

  .error-text {
    color: #d32f2f;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    .button_01 {
      display: none;
    }
    .button-fill {
      width: 100% ;
    }
    .frame-1410103852 {
      flex-direction: column;
      gap: 12px;
    }
    .button-container {
      justify-content: center;
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
  }
</style>
