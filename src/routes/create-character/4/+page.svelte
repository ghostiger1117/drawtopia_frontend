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
  import star from "../../../assets/Star.svg";
  import arrowUpDown from "../../../assets/CaretUpDown.svg";
  import check from "../../../assets/Check.svg";
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
  <MobileBackBtn backRoute="/create-character/3" />
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span"
          >Select your Enchancement Level</span
        >
      </div>
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Choose the level of enhancement for your character. All levels are
          included in your story package.</span
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
    <MobileStepProgressBar currentStep={4} />
    <ProgressBar currentStep={4} />
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
              >How polished should your character look?</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410104073">
      <div class="frame-1410104071">
        <div class="frame-16">
          <div class="rectangle-33"></div>
          <div class="frame-1410103721">
            <img src={arrowUpDown} alt="arrowUpDown" />
          </div>
          <div class="frame-1410103722">
            <div class="before"><span class="before_span">Before</span></div>
          </div>
          <div class="frame-1410103723">
            <div class="after"><span class="after_span">After</span></div>
          </div>
        </div>
        <div class="card_heading">
          <div class="frame-1410104074">
            <div class="minimal-enhancement">
              <span class="minimalenhancement_span">Minimal Enhancement</span>
            </div>
            <div class="keep-that-hand-drawn-charm">
              <span class="keepthathand-drawncharm_span"
                >Keep that hand-drawn charm</span
              >
            </div>
          </div>
          <div class="frame-1410104075">
            <div class="checklist">
              <div class="check">
                <img src={check} alt="check" />
              </div>
              <div class="light-cleanup-and-coloring">
                <span class="lightcleanupandcoloring_span"
                  >Light cleanup and coloring</span
                >
              </div>
            </div>
            <div class="checklist_01">
              <div class="check_02">
                <img src={check} alt="check" />
              </div>
              <div>
                <span class="preservesoriginaldrawingstyle_span"
                  >Preserves original drawing style</span
                >
              </div>
            </div>
            <div class="checklist_02">
              <div class="check_04">
                <img src={check} alt="check" />
              </div>
              <div>
                <span class="perfectforyoungerkids3-6_span"
                  >Perfect for younger kids (3-6)</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-1410104076 selected_card" style="position: relative;">
        <div class="tag_card">
          <img src={star} alt="star" />
          <div class="most-popular">
            <span class="mostpopular_span">Most Popular</span>
          </div>
        </div>
        <div class="frame-1410104074_01">
          <div class="frame-16_01">
            <div class="rectangle-33"></div>
            <div class="frame-1410103721">
              <img src={arrowUpDown} alt="arrowUpDown" />
            </div>
            <div class="frame-1410103722">
              <div class="before_01">
                <span class="before_01_span">Before</span>
              </div>
            </div>
            <div class="frame-1410103723">
              <div class="after_01">
                <span class="after_01_span">After</span>
              </div>
            </div>
          </div>
          <div class="card_heading_01">
            <div class="frame-1410104074_02">
              <div class="normal-enhancement">
                <span class="normalenhancement_span">Normal Enhancement</span>
              </div>
              <div class="professional-storybook-quality">
                <span class="professionalstorybookquality_span"
                  >Professional storybook quality</span
                >
              </div>
            </div>
            <div class="frame-1410104075_01">
              <div class="checklist_03">
                <div class="check_06">
                  <img src={check} alt="check" />
                </div>
                <div class="balanced-enhancement-with-polish">
                  <span class="balancedenhancementwithpolish_span"
                    >Balanced enhancement with polish</span
                  >
                </div>
              </div>
              <div class="checklist_04">
                <div class="check_08">
                  <img src={check} alt="check" />
                </div>
                <div class="maintains-character-personality">
                  <span class="maintainscharacterpersonality_span"
                    >Maintains character personality</span
                  >
                </div>
              </div>
              <div class="checklist_05">
                <div class="check_10">
                  <img src={check} alt="check" />
                </div>
                <div class="great-for-all-ages">
                  <span class="greatforallages_span">Great for all ages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={purple_check} alt="purple_check" class="purple_check" />
      </div>
      <div class="frame-1410104075_02">
        <div class="frame-16_02">
          <div class="rectangle-33"></div>
          <div class="frame-1410103721">
            <img src={arrowUpDown} alt="arrowUpDown" />
          </div>
          <div class="frame-1410103722">
            <div class="before_02">
              <span class="before_02_span">Before</span>
            </div>
          </div>
          <div class="frame-1410103723">
            <div class="after_02"><span class="after_02_span">After</span></div>
          </div>
        </div>
        <div class="card_heading_02">
          <div class="frame-1410104074_03">
            <div class="high-enhancement">
              <span class="highenhancement_span">High Enhancement</span>
            </div>
            <div class="publication-ready-artwork">
              <span class="publication-readyartwork_span"
                >Publication-ready artwork</span
              >
            </div>
          </div>
          <div class="frame-1410104075_03">
            <div class="checklist_06">
              <div class="check_12">
                <img src={check} alt="check" />
              </div>
              <div class="fully-rendered-professional-quality">
                <span class="fullyrenderedprofessionalquality_span"
                  >Fully rendered, professional quality</span
                >
              </div>
            </div>
            <div class="checklist_07">
              <div class="check_14">
                <img src={check} alt="check" />
              </div>
              <div>
                <span class="advancedlightinganddetails_span"
                  >Advanced lighting and details</span
                >
              </div>
            </div>
            <div class="checklist_08">
              <div class="check_16">
                <img src={check} alt="check" />
              </div>
              <div>
                <span class="perfectforkeepsakesandgifts_span"
                  >Perfect for keepsakes and gifts</span
                >
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
        <button class="button_01" on:click={() => goto("/create-character/3")}>
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
        on:click={() => goto("/create-character/5")}
      >
        <div class="continue-to-style-selection">
          <span class="continuetostyleselection_span"
            >Continue to Enhancement Selection</span
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

  .rectangle-33 {
    width: 2px;
    height: 346px;
    left: 50%;
    top: 0px;
    position: absolute;
    background: #eef6ff;
  }

  .before_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .before {
    text-align: center;
  }

  .after_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .after {
    text-align: center;
  }

  .minimalenhancement_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .minimal-enhancement {
    align-self: stretch;
  }

  .keepthathand-drawncharm_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .keep-that-hand-drawn-charm {
    align-self: stretch;
  }

  .lightcleanupandcoloring_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .light-cleanup-and-coloring {
    width: 224px;
  }

  .preservesoriginaldrawingstyle_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .perfectforyoungerkids3-6_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .mostpopular_span {
    color: #438bff;
    font-size: 15px;
    font-family: Quicksand;
    font-weight: 700;
    word-wrap: break-word;
  }

  .most-popular {
    text-align: center;
  }

  .before_01_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .before_01 {
    text-align: center;
  }

  .after_01_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .after_01 {
    text-align: center;
  }

  .normalenhancement_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .normal-enhancement {
    align-self: stretch;
  }

  .professionalstorybookquality_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .professional-storybook-quality {
    align-self: stretch;
  }

  .balancedenhancementwithpolish_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .balanced-enhancement-with-polish {
    flex: 1 1 0;
  }

  .maintainscharacterpersonality_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .maintains-character-personality {
    flex: 1 1 0;
  }

  .greatforallages_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .great-for-all-ages {
    flex: 1 1 0;
  }

  .before_02_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .before_02 {
    text-align: center;
  }

  .after_02_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .after_02 {
    text-align: center;
  }

  .highenhancement_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .high-enhancement {
    align-self: stretch;
  }

  .publication-readyartwork_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .publication-ready-artwork {
    align-self: stretch;
  }

  .fullyrenderedprofessionalquality_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .fully-rendered-professional-quality {
    width: 319px;
  }

  .advancedlightinganddetails_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .perfectforkeepsakesandgifts_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .frame-1410103722 {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    left: 25%;
    bottom: 30px;
    position: absolute;
    background: white;
    border-radius: 20px;
    outline: 1px #cacaca solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .frame-1410103723 {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    left: 75%;
    bottom: 30px;
    position: absolute;
    background: white;
    border-radius: 20px;
    outline: 1px #cacaca solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .frame-1410104074 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104074_02 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104074_03 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410103721 {
    padding: 4px;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    position: absolute;
    background: #438bff;
    border-radius: 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .check {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_02 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_04 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .tag_card {
    width: 100%;
    padding: 4px;
    border-radius: 99px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .check_06 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_08 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_10 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_12 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_14 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .check_16 {
    width: 18px;
    height: 18px;
    position: relative;
    background: #141414;
    overflow: hidden;
    border-radius: 99999px;
  }

  .frame-16 {
    align-self: stretch;
    height: 346px;
    position: relative;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
  }

  .checklist {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_01 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_02 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-16_01 {
    align-self: stretch;
    height: 346px;
    position: relative;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
  }

  .checklist_03 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_04 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_05 {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-16_02 {
    align-self: stretch;
    height: 346px;
    position: relative;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
  }

  .checklist_06 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_07 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .checklist_08 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104075 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104075_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104075_03 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .card_heading {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }

  .card_heading_01 {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }

  .card_heading_02 {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }

  .frame-1410104071 {
    flex: 1 1 0;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  .frame-1410104074_01 {
    align-self: stretch;
    background: white;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: flex;
  }

  .frame-1410104075_02 {
    flex: 1 1 0;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  .frame-1410104076 {
    flex: 1 1 0;
    padding-top: 4px;
    padding-bottom: 2px;
    padding-left: 2px;
    padding-right: 2px;
    background: #eef6ff;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: inline-flex;
  }

  .frame-1410104073 {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }
  .selected_card {
    outline: 2px #6912c5 solid;
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
    .frame-1410104073 {
      flex-direction: column;
      gap: 12px;
    }

    .frame-1410104071,
    .frame-1410104076,
    .frame-1410104075_02 {
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
