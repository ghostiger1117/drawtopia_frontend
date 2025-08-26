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
  <MobileBackBtn backRoute="/create-character/6" />
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span">Here your Magical Story</span>
      </div>
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Your character is now part of their very own adventure!</span
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
    <MobileStepProgressBar currentStep={7} />
    <ProgressBar currentStep={7} />
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
              >Let's design the perfect cover for your story!</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410104031">
      <div class="frame-8">
        <div class="frame-1410104034">
          <div class="cover-book-preview">
            <span class="coverbookpreview_span">Cover Book Preview</span>
          </div>
        </div>
        <img
          class="image"
          src="https://placehold.co/569x837"
          alt="image_card_1"
        />
      </div>
      <div class="frame-9">
        <div class="information-cover">
          <span class="informationcover_span">Information Cover</span>
        </div>
        <div class="form">
          <div class="form_01">
            <div><span class="titleselection_span">TItle Selection</span></div>
            <div class="frame-1410103942">
              <div class="selected">
                <div class="frame-1410103940">
                  <div class="frame-1410103939">
                    <div>
                      <span class="thegreataddventureyourname_span"
                        >The Great Addventure [Your Name]
                      </span>
                    </div>
                  </div>
                </div>
                <div class="ellipse-13"></div>
                <div class="frame-1410104043">
                  <div class="ellipse-14"></div>
                  <div class="ellipse-13_01"></div>
                </div>
              </div>
              <div class="selected_01">
                <div class="frame-1410103940_01">
                  <div class="frame-1410103939_01">
                    <div>
                      <span class="theamazingofjourneyyourname_span"
                        >The Amazing of Journey [Your Name]
                      </span>
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_02"></div>
              </div>
              <div class="selected_02">
                <div class="frame-1410103940_02">
                  <div class="frame-1410103939_02">
                    <div>
                      <span class="yournameandthespaceadventure_span"
                        >[Your Name] and the Space Adventure</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_03"></div>
              </div>
              <div class="selected_03">
                <div class="frame-1410104084">
                  <div class="frame-1410103940_03">
                    <div class="frame-1410103939_03">
                      <div>
                        <span class="customtitle_span">Custom Title</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_04"></div>
              </div>
            </div>
          </div>
          <div class="form_02">
            <div class="select-your-book-cover-design">
              <span class="selectyourbookcoverdesign_span"
                >Select your Book Cover Design</span
              >
            </div>
            <div class="frame-1410103942_01">
              <div class="selected_04">
                <img
                  class="frame-1410104088"
                  src="https://placehold.co/80x91"
                  alt="image_card_2"
                />
                <div class="frame-1410103940_04">
                  <div class="frame-1410103939_04">
                    <div>
                      <span class="classicstorybook_span"
                        >Classic Storybook</span
                      >
                    </div>
                    <div>
                      <span class="ornateborderwithtraditionalcharm_span"
                        >Ornate border with traditional charm</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_05"></div>
                <div class="frame-1410104043_01">
                  <div class="ellipse-14_01"></div>
                  <div class="ellipse-13_06"></div>
                </div>
              </div>
              <div class="selected_05">
                <div class="frame-1410103940_05">
                  <img
                    class="frame-1410104088_01"
                    src="https://placehold.co/80x91"
                    alt="image_card_3"
                  />
                  <div class="frame-1410103939_05">
                    <div>
                      <span class="modernminimalist_span"
                        >Modern Minimalist</span
                      >
                    </div>
                    <div>
                      <span class="characterfocuswithcleandesign_span"
                        >Character focus with clean design</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_07"></div>
              </div>
              <div class="selected_06">
                <div class="frame-1410103940_06">
                  <img
                    class="frame-1410104088_02"
                    src="https://placehold.co/80x91"
                    alt="image_card_4"
                  />
                  <div class="frame-1410103939_06">
                    <div>
                      <span class="adventuretheme_span">Adventure Theme</span>
                    </div>
                    <div>
                      <span class="worldelementsanddynamiclayout_span"
                        >World elements and dynamic layout</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_08"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="display: flex; justify-content: {isMobile
        ? 'center'
        : 'space-between'}; width: 100%;"
    >
      {#if !isMobile}
        <button class="button_01" on:click={() => goto("/create-character/6")}>
          <div class="arrowleft">
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
          <div class="back-to-step">
            <span class="backtostep_span">Back To Step</span>
          </div>
        </button>
      {/if}
      <button
        class="button-fill"
        class:mobile-full-width={isMobile}
        on:click={() => goto("/create-character/7/preview")}
      >
        <div class="continue-to-style-selection">
          <span class="continuetostyleselection_span">Preview Your Story</span>
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

  .image {
    align-self: stretch;
    height: 280px;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .coverbookpreview_span {
    color: black;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 28px;
    word-wrap: break-word;
  }

  .cover-book-preview {
    text-align: center;
  }

  .image {
    align-self: stretch;
    height: 837px;
    position: relative;
    border-radius: 12px;
  }

  .informationcover_span {
    color: #141414;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 28px;
    word-wrap: break-word;
  }

  .information-cover {
    align-self: stretch;
  }

  .titleselection_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .thegreataddventureyourname_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .ellipse-14 {
    width: 24px;
    height: 24px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: 9999px;
    border: 1px #438bff solid;
  }

  .ellipse-13_01 {
    width: 12px;
    height: 12px;
    left: 6px;
    top: 6px;
    position: absolute;
    background: #438bff;
    border-radius: 9999px;
    border: 1px #438bff solid;
  }

  .theamazingofjourneyyourname_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_02 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 2px #ededed solid;
  }

  .yournameandthespaceadventure_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_03 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 2px #ededed solid;
  }

  .customtitle_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_04 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 2px #ededed solid;
  }

  .selectyourbookcoverdesign_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .select-your-book-cover-design {
    align-self: stretch;
  }

  .frame-1410104088 {
    width: 80px;
    height: 91px;
    position: relative;
    background: white;
    border-radius: 4px;
  }

  .classicstorybook_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ornateborderwithtraditionalcharm_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_05 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .ellipse-14_01 {
    width: 24px;
    height: 24px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: 9999px;
    border: 1px #438bff solid;
  }

  .ellipse-13_06 {
    width: 12px;
    height: 12px;
    left: 6px;
    top: 6px;
    position: absolute;
    background: #438bff;
    border-radius: 9999px;
    border: 1px #438bff solid;
  }

  .frame-1410104088_01 {
    width: 80px;
    height: 91px;
    position: relative;
    background: white;
    border-radius: 4px;
  }

  .modernminimalist_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .characterfocuswithcleandesign_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_07 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .frame-1410104088_02 {
    width: 80px;
    height: 91px;
    position: relative;
    background: white;
    border-radius: 4px;
  }

  .adventuretheme_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .worldelementsanddynamiclayout_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_08 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .frame-1410104034 {
    align-self: stretch;
    padding: 8px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .frame-1410103939 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_01 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_02 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_03 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_04 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_05 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410103939_06 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410104043 {
    width: 24px;
    height: 24px;
    position: relative;
  }

  .frame-1410104043_01 {
    width: 24px;
    height: 24px;
    position: relative;
  }

  .frame-8 {
    flex: 1 1 0;
    padding: 10px;
    background: white;
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410103940 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103940_01 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103940_02 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103940_03 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410103940_04 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103940_05 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103940_06 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .selected {
    align-self: stretch;
    padding: 12px;
    background: #eef6ff;
    border-radius: 12px;
    outline: 1px #438bff solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .selected_01 {
    align-self: stretch;
    padding: 12px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .selected_02 {
    align-self: stretch;
    padding: 12px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104084 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }

  .selected_04 {
    align-self: stretch;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 12px;
    background: #eef6ff;
    border-radius: 12px;
    outline: 1px #438bff solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .selected_05 {
    align-self: stretch;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 12px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .selected_06 {
    align-self: stretch;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 12px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .selected_03 {
    align-self: stretch;
    padding: 12px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410103942_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410103942 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .form_02 {
    align-self: stretch;
    padding: 12px;
    border-radius: 10px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .form_01 {
    align-self: stretch;
    padding: 12px;
    border-radius: 10px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .form {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-9 {
    width: 627px;
    padding: 16px;
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
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .mobile-full-width {
    width: 100% !important;
  }

  @media (max-width: 800px) {
    .frame-1410104031 {
      flex-direction: column;
      gap: 16px;
    }

    .frame-8,
    .frame-9 {
      width: 100%;
      flex: none;
    }

    .frame-9 {
      width: 100%;
    }

    .character-creation-default {
      padding-left: 20px;
      padding-right: 20px;
    }

    .createyourcharacter_span {
      font-size: 32px;
      line-height: 44.8px;
    }

    .uploadyourdrawingordrawyourowncharacterrighthere_span {
      font-size: 16px;
      line-height: 19.2px;
    }

    .lets-bring-your-character-to-life-upload-a-drawing-or-photo {
      width: auto;
      max-width: 300px;
    }

    .message-content {
      margin-left: 12px;
      max-width: 300px;
    }

    .star-container {
      align-self: center;
    }

    .message-container {
      margin-left: 0;
      justify-content: center;
    }

    .image {
      height: 400px;
    }

    .coverbookpreview_span,
    .informationcover_span {
      font-size: 18px;
      line-height: 25.2px;
    }

    .titleselection_span,
    .selectyourbookcoverdesign_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .selected,
    .selected_01,
    .selected_02,
    .selected_03,
    .selected_04,
    .selected_05,
    .selected_06 {
      padding: 8px;
    }

    .frame-1410104088,
    .frame-1410104088_01,
    .frame-1410104088_02 {
      width: 60px;
      height: 68px;
    }

    .thegreataddventureyourname_span,
    .theamazingofjourneyyourname_span,
    .yournameandthespaceadventure_span,
    .customtitle_span,
    .classicstorybook_span,
    .modernminimalist_span,
    .adventuretheme_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .ornateborderwithtraditionalcharm_span,
    .characterfocuswithcleandesign_span,
    .worldelementsanddynamiclayout_span {
      font-size: 12px;
      line-height: 16.8px;
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
