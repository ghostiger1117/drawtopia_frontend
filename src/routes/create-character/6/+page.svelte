<script lang="ts">
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
  import treasure from "../../../assets/treasurehunt.png";
  import helping from "../../../assets/helpfriend.png";

  let isMobile = false;
  let selectedAdventure = "treasure"; // Default selection: "treasure" or "helping"

  $: if (browser) {
    isMobile = window.innerWidth < 800;
  }

  function selectAdventure(adventure: string) {
    selectedAdventure = adventure;
  }
</script>

<div class="character-creation-default">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <MobileBackBtn backRoute="/create-character/5" />
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
    <MobileStepProgressBar currentStep={6} />
    <ProgressBar currentStep={6} />
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
              >What kind of adventure should hisyam have?</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410103852">
      <div 
        class={selectedAdventure === "treasure" ? "card selected_card" : "card"}
        style="position: relative;"
        on:click={() => selectAdventure("treasure")}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && selectAdventure("treasure")}
      >
        <img
          class="image"
          src={treasure}
          alt="image_card_1"
        />
        <div class="frame-10">
          <div class="treasure-hunt">
            <span class="treasurehunt_span">Treasure Hunt</span>
          </div>
          <div class="frame-1410104045">
            <div class="your-story-preview">
              <span class="yourstorypreview_span">Your Story Preview</span>
            </div>
            <div class="rectangle-35"></div>
            <div
              class="character-name-will-search-for-a-legendary-treasure-hidden-in-the-selected-world"
            >
              <span
                class="characternamewillsearchforalegendarytreasurehiddenintheselectedworld_span"
                >“[Character Name] will search for a legendary treasure hidden
                in the [Selected World]”</span
              >
            </div>
          </div>
          <div class="frame-1410104048">
            <div class="story-focus">
              <span class="storyfocus_span">Story Focus</span>
            </div>
            <div class="frame-1410104047">
              <div class="tags">
                <div>
                  <span class="problem-solving_span"> Problem-solving</span>
                </div>
              </div>
              <div class="tags_01">
                <div><span class="discovery_span">discovery</span></div>
              </div>
              <div class="tags_02">
                <div><span class="perseverance_span">perseverance</span></div>
              </div>
            </div>
          </div>
        </div>
        {#if selectedAdventure === "treasure"}
          <img src={purple_check} alt="purple_check" class="purple_check" />
        {/if}
      </div>
      <div 
        class={selectedAdventure === "helping" ? "card_01 selected_card" : "card_01"}
        style="position: relative;"
        on:click={() => selectAdventure("helping")}
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && selectAdventure("helping")}
      >
          <img
            class="image-6"
            src={helping}
            alt="image_card_2"
          />
        <div class="frame-10_01">
          <div class="helping-a-friend">
            <span class="helpingafriend_span">Helping a Friend</span>
          </div>
          <div class="frame-1410104045_01">
            <div class="your-story-preview_01">
              <span class="yourstorypreview_01_span">Your Story Preview</span>
            </div>
            <div class="rectangle-35_01"></div>
            <div
              class="character-name-will-help-a-friend-in-need-using-their-special-ability"
            >
              <span
                class="characternamewillhelpafriendinneedusingtheirspecialability_span"
                >"[Character Name] will help a friend in need using their
                special [Ability]"</span
              >
            </div>
          </div>
          <div class="frame-1410104048_01">
            <div class="story-focus_01">
              <span class="storyfocus_01_span">Story Focus</span>
            </div>
            <div class="frame-1410104047_01">
              <div class="tags_03">
                <div><span class="kindness_span">Kindness</span></div>
              </div>
              <div class="tags_04">
                <div><span class="cooperation_span">cooperation</span></div>
              </div>
              <div class="tags_05">
                <div>
                  <span class="usingtalentsforgood_span"
                    >using talents for good</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        {#if selectedAdventure === "helping"}
          <img src={purple_check} alt="purple_check" class="purple_check" />
        {/if}
      </div>
    </div>

    <div
      style="display: flex; justify-content: {isMobile
        ? 'center'
        : 'space-between'}; width: 100%;"
    >
      {#if !isMobile}
        <button class="button_01" on:click={() => goto("/create-character/5")}>
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
        on:click={() => goto("/create-character/7")}
      >
        <div class="continue-to-style-selection">
          <span class="continuetostyleselection_span"
            >Continue to Companion</span
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
    width: 90%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
  }
  .image {
    width: 100%;
    aspect-ratio: 1 / 0.7;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .treasurehunt_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .treasure-hunt {
    align-self: stretch;
  }

  .yourstorypreview_span {
    color: #06a1b4;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .your-story-preview {
    align-self: stretch;
  }

  .rectangle-35 {
    align-self: stretch;
    height: 1px;
    background: #ceffff;
  }

  .characternamewillsearchforalegendarytreasurehiddenintheselectedworld_span {
    color: #06a1b4;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .character-name-will-search-for-a-legendary-treasure-hidden-in-the-selected-world {
    align-self: stretch;
  }

  .storyfocus_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .story-focus {
    align-self: stretch;
  }

  .problem-solving_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .discovery_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .perseverance_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .image-6 {
    width: 100%;
    aspect-ratio: 1 / 0.7;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .helpingafriend_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .helping-a-friend {
    align-self: stretch;
  }

  .yourstorypreview_01_span {
    color: #06a1b4;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .your-story-preview_01 {
    align-self: stretch;
  }

  .rectangle-35_01 {
    align-self: stretch;
    height: 1px;
    background: #ceffff;
  }

  .characternamewillhelpafriendinneedusingtheirspecialability_span {
    color: #06a1b4;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .character-name-will-help-a-friend-in-need-using-their-special-ability {
    align-self: stretch;
  }

  .storyfocus_01_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .story-focus_01 {
    align-self: stretch;
  }

  .kindness_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .cooperation_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .usingtalentsforgood_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .tags {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .tags_01 {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .tags_02 {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .tags_03 {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .tags_04 {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .tags_05 {
    padding: 10px;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410104045 {
    align-self: stretch;
    padding: 12px;
    background: #ecffff;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410104045_01 {
    align-self: stretch;
    padding: 12px;
    background: #ecffff;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410104047 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104047_01 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104048 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-1410104048_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .frame-10 {
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

  .frame-10_01 {
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

  .card {
    flex: 1 1 0;
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

  .card_01 {
    flex: 1 1 0;
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

  .mobile-full-width {
    width: 100% !important;
  }

  @media (max-width: 800px) {
    .frame-1410103852 {
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }

    .card,
    .card_01 {
      width: 100%;
      flex: none;
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

    .frame-1410104047,
    .frame-1410104047_01 {
      flex-wrap: wrap;
      gap: 8px;
    }

    .tags,
    .tags_01,
    .tags_02,
    .tags_03,
    .tags_04,
    .tags_05 {
      padding: 8px;
      font-size: 14px;
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

  .selected_card {
    outline: 2px #6912c5 solid;
    box-shadow: 0px 1px 8px #871fff;
  }
  
  .card, .card_01 {
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .card:hover, .card_01:hover {
    outline: 1px #438bff solid;
    box-shadow: 0px 2px 8px rgba(67, 139, 255, 0.1);
  }

  .purple_check {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
