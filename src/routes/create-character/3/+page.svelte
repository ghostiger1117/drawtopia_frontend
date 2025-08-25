<script>
  import StarEmoticon from "../../../components/StarEmoticon.svelte";
  import ProgressBar from "../../../components/ProgressBar.svelte";
  import uploadSimple from "../../../assets/upload-icon.svg";
  import darkColors from "../../../assets/day.svg";
  import pen from "../../../assets/pen.svg";
  import picture from "../../../assets/picture.svg";
  import cameraBlue from "../../../assets/Camera-blue.svg";
  import arrowLeft from "../../../assets/ArrowLeft.svg";
  import shieldStar from "../../../assets/ShieldStar.svg";
  import sealCheck from "../../../assets/SealCheck.svg";
  import person from "../../../assets/human.svg";
  import animal from "../../../assets/animal.svg";
  import magical from "../../../assets/monster.svg";
  import PrimarySelect from "../../../components/PrimarySelect.svelte";
  import purple_check from "../../../assets/purple-check.svg";
  import { goto } from "$app/navigation";
  import MobileBackBtn from "../../../components/MobileBackBtn.svelte";
  import MobileStepProgressBar from "../../../components/MobileStepProgressBar.svelte";
  import { browser } from "$app/environment";

  let isMobile = false;

  $: if (browser) {
    isMobile = window.innerWidth < 800;
  }
</script>

<div class="character-creation-default">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  {#if isMobile}
    <MobileBackBtn backRoute="/create-character/2" />
  {/if}
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span"
          >Choose your Character Style Selection</span
        >
      </div>
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Choose the artistic style that will bring your character to life. Each style offers a unique way to tell your story.</span
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
    {#if isMobile}
      <MobileStepProgressBar currentStep={3} />
    {:else}
      <ProgressBar currentStep={3} />
    {/if}
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
    <div class="frame-1410103852">
      <div class="card_02">
        <img class="image_02" src="https://placehold.co/402x375" alt="3D Realistic" />
        <div class="frame-10_02">
          <div class="heading_02">
            <div class="anime">
              <span class="anime_span">3D Realistic</span>
            </div>
            <div class="japanesse-anime-style">
              <span class="japanesseanimestyle_span"
                >Like your favorite animated movies</span
              >
            </div>
          </div>
          <div class="frame-1410104045_02">
            <div class="best-for_02">
              <span class="bestfor_02_span">Best For</span>
            </div>
            <div class="rectangle-35_02"></div>
            <div class="kids-who-love-anime-and-manga">
              <span class="kidswholoveanimeandmanga_span"
                >Kids who love Disney and Pixar movies</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card_02">
        <img class="image_02" src="https://placehold.co/402x375" alt="Cartoon" />
        <div class="frame-10_02">
          <div class="heading_02">
            <div class="anime"><span class="anime_span">Cartoon</span></div>
            <div class="japanesse-anime-style">
              <span class="japanesseanimestyle_span"
                >Classic storybook style</span
              >
            </div>
          </div>
          <div class="frame-1410104045_02">
            <div class="best-for_02">
              <span class="bestfor_02_span">Best For</span>
            </div>
            <div class="rectangle-35_02"></div>
            <div class="kids-who-love-anime-and-manga">
              <span class="kidswholoveanimeandmanga_span"
                >Timeless storybook adventures</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card_02_selected" style="position: relative;">
        <img class="image_02" src="https://placehold.co/402x375" alt="Anime" />
        <div class="frame-10_02">
          <div class="heading_02">
            <div class="anime"><span class="anime_span">Anime</span></div>
            <div class="japanesse-anime-style">
              <span class="japanesseanimestyle_span">Japanesse Anime Style</span
              >
            </div>
          </div>
          <div class="frame-1410104045_02">
            <div class="best-for_02">
              <span class="bestfor_02_span">Best For</span>
            </div>
            <div class="rectangle-35_02"></div>
            <div class="kids-who-love-anime-and-manga">
              <span class="kidswholoveanimeandmanga_span"
                >Kids who love anime and manga</span
              >
            </div>
          </div>
        </div>
        <img src={purple_check} alt="purple_check" class="purple_check"/>
      </div>
    </div>

    <div style="display: flex; justify-content: {isMobile ? 'center' : 'space-between'}; width: 100%;">
      {#if !isMobile}
      <button class="button_01" on:click={() => goto('/create-character/2')}>
        <div class="arrowleft">
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
        <div class="back-to-step">
          <span class="backtostep_span">Back To Step</span>
        </div>
      </button>
      {/if}
      <button class="button-fill" class:mobile-full-width={isMobile} on:click={() => goto('/create-character/4')}>
        <div class="continue-to-style-selection">
          <span class="continuetostyleselection_span"
            >Continue to Style Selection</span
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

  .image_02 {
    align-self: stretch;
    height: 375px;
    position: relative;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border: 1px #d3d3d3 solid;
  }

  .anime_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .anime {
    align-self: stretch;
  }

  .japanesseanimestyle_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .japanesse-anime-style {
    align-self: stretch;
  }

  .bestfor_02_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .best-for_02 {
    align-self: stretch;
  }

  .rectangle-35_02 {
    align-self: stretch;
    height: 1px;
    background: #eceff3;
  }

  .kidswholoveanimeandmanga_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .kids-who-love-anime-and-manga {
    align-self: stretch;
  }

  /* .heading {
    align-self: stretch;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  } */

  .heading_02 {
    align-self: stretch;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104045_02 {
    align-self: stretch;
    padding: 12px;
    background: #f8fafb;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-10_02 {
    align-self: stretch;
    padding-top: 8px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .card_02 {
    width: 402px;
    padding-bottom: 10px;
    background: white;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }
  .card_02_selected {
    width: 402px;
    padding-bottom: 10px;
    background: white;
    border-radius: 20px;
    outline: 2px #6912c5 solid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
    box-shadow: 0px 1px 8px #871fff;
    outline: 2px #6912c5 solid;
    border-radius: 20px;
  }
  .frame-1410103852 {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
  }
  .purple_check {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .mobile-full-width {
    width: 100% !important;
  }

  @media (max-width: 800px) {
    .frame-1410103852 {
      flex-direction: column;
      gap: 12px;
    }
    
    .card_02, .card_02_selected {
      width: 100%;
      /* max-width: 350px; */
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
