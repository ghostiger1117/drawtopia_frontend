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
</script>

<div class="character-creation-default">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  <div class="frame-1410103818">
    <div class="heading">
      <div class="create-your-character">
        <span class="createyourcharacter_span"
          >Tell Us About Your Character</span
        >
      </div>
      <div class="upload-your-drawing-or-draw-your-own-character-right-here">
        <span class="uploadyourdrawingordrawyourowncharacterrighthere_span"
          >Let's make your character even more special!</span
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
    <ProgressBar currentStep={2} />
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
              >Tell me about your amazing character!</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410104031">
      <div class="frame-8">
        <div class="frame-1410104035">
          <div class="frame-1410104036">
            <img src={sealCheck} alt="sealCheck" />
          </div>
          <div class="your-character-looks-amazing">
            <span class="yourcharacterlooksamazing_span"
              >Your character looks amazing!</span
            >
          </div>
        </div>
        <div class="image">
          <div class="frame-1410104035_01">
            <div class="youre-creating-a-free-2-page-preview">
              <span class="yourecreatingafree2-pagepreview_span"
                >You're creating a free 2-page preview</span
              >
            </div>
          </div>
        </div>
        <button class="frame-1410103991">
          <div class="button">
            <img src={cameraBlue} alt="camera-blue" />
            <div class="retake-photo">
              <span class="retakephoto_span">Retake Photo</span>
            </div>
          </div>
        </button>
        <div class="frame-1410104037">
          <div class="meet-leonee-the-animal-who-can-flying">
            <span class="meetleoneetheanimalwhocanflying_span"
              >Meet Leonee, the animal who can Flying</span
            >
          </div>
        </div>
      </div>
      <div class="frame-1410104032">
        <div class="frame-1410104070">
          <div class="information-character">
            <span class="informationcharacter_span">Information Character</span>
          </div>
          <div class="form">
            <div class="whats-your-characters-name">
              <span class="whatsyourcharactersname_span"
                >What's your character's name?</span
              >
            </div>
            <div class="frame-1410104040">
              <div class="input-placeholder">
                <div>
                  <span class="enteryourcharactername_span"
                    >Enter your Character Name</span
                  >
                </div>
              </div>
              <div class="text-0200-characters">
                <span class="f200characters_span">0/200 Characters</span>
              </div>
            </div>
          </div>
          <div class="form_01">
            <div class="what-type-of-character-is-this">
              <span class="whattypeofcharacteristhis_span"
                >What type of character is this?</span
              >
            </div>
            <div class="frame-1410103942">
              <div class="selected">
                <div class="frame-1410103940">
                  <img src={person} alt="person" />
                  <div class="frame-1410103939">
                    <div><span class="person_span">Person</span></div>
                    <div>
                      <span class="ahumancharacter_span">A human character</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13"></div>
              </div>
              <div class="selected_01">
                <div class="frame-1410103940_01">
                  <img src={animal} alt="animal" />
                  <div class="frame-1410103939_01">
                    <div><span class="animal_span">Animal</span></div>
                    <div>
                      <span class="petorwildanimal_span"
                        >Pet or wild animal</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_01"></div>
              </div>
              <div class="selected_02">
                <div class="frame-1410103940_02">
                  <img src={magical} alt="magical" />
                  <div class="frame-1410103939_02">
                    <div>
                      <span class="magicalfeatures_span">Magical Features</span>
                    </div>
                    <div>
                      <span class="fairydragonetc_span"
                        >Fairy, dragon, etc.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="ellipse-13_02"></div>
              </div>
            </div>
          </div>
          <div class="form_02">
            <div class="frame-1410104039">
              <div class="what-special-ability-does-your-character-have">
                <span class="whatspecialabilitydoesyourcharacterhave_span"
                  >What special ability does your character have?</span
                >
              </div>
              <PrimarySelect
                options={[]}
                selectedOption={""}
                onChange={() => {}}
              />
            </div>
            <div class="form_03">
              <div class="or-describe-your-own-special-power">
                <span class="ordescribeyourownspecialpower_span"
                  >Or describe your own special power:</span
                >
              </div>
              <div class="frame-1410104041">
                <div class="input-placeholder_02">
                  <div>
                    <span
                      class="exampleafriendlyspacealienwithsixarmsandbigeyes_span"
                      >Example : A friendly space alien with six arms and big
                      eyes</span
                    >
                  </div>
                </div>
                <div class="text-0200-characters_01">
                  <span class="f200characters_01_span">0/200 Characters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; width: 100%;">
      <button class="button_01">
        <div class="arrowleft">
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
        <div class="back-to-step">
          <span class="backtostep_span">Back To Step</span>
        </div>
      </button>
      <button class="button-fill">
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
    gap: 24px;
    display: flex;
    width: 100%;
  }

  .image {
    align-self: stretch;
    height: 254px;
    position: relative;
    background: #f8fafb;
    overflow: hidden;
    border-radius: 10px;
    outline: 2px #ededed solid;
    outline-offset: -2px;
  }

  .form {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
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

  .frame-1410104031 {
    align-self: stretch;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .frame-1410103818 {
    width: 1240px;
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
  .yourcharacterlooksamazing_span {
    color: #40c4aa;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .your-character-looks-amazing {
    text-align: center;
  }

  .yourecreatingafree2-pagepreview_span {
    color: #ffbe4c;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .youre-creating-a-free-2-page-preview {
    text-align: center;
  }

  .retakephoto_span {
    color: #438bff;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .retake-photo {
    text-align: center;
  }

  .informationcharacter_span {
    color: black;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 28px;
    word-wrap: break-word;
  }

  .information-character {
    align-self: stretch;
  }

  .whatsyourcharactersname_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .whats-your-characters-name {
    align-self: stretch;
  }

  .enteryourcharactername_span {
    color: #727272;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .f200characters_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .text-0200-characters {
    align-self: stretch;
  }

  .whattypeofcharacteristhis_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .what-type-of-character-is-this {
    align-self: stretch;
  }

  .person_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ahumancharacter_span {
    color: #666d80;
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

  .animal_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .petorwildanimal_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .ellipse-13_01 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .magicalfeatures_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .fairydragonetc_span {
    color: #666d80;
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
    border: 1px #ededed solid;
  }

  .whatspecialabilitydoesyourcharacterhave_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .what-special-ability-does-your-character-have {
    align-self: stretch;
  }

  .ordescribeyourownspecialpower_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .or-describe-your-own-special-power {
    align-self: stretch;
  }

  .exampleafriendlyspacealienwithsixarmsandbigeyes_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .f200characters_01_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .text-0200-characters_01 {
    align-self: stretch;
  }

  .frame-1410104035_01 {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    left: 120px;
    top: 791px;
    position: absolute;
    background: #fff6e0;
    border-radius: 10px;
    outline: 1px #ffbe4c solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .input-placeholder {
    align-self: stretch;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
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

  .input-placeholder_02 {
    align-self: stretch;
    height: 168px;
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
  }

  .image {
    align-self: stretch;
    height: 844px;
    position: relative;
    background: #ededed;
    overflow: hidden;
    border-radius: 12px;
    background-image: url(https://placehold.co/588x844);
  }

  .frame-1410104040 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-1410104041 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-1410104036 {
    padding: 8px;
    background: #40c4aa;
    border-radius: 12px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .button {
    align-self: stretch;
    height: 57px;
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

  .form {
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

  .form_03 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104035 {
    align-self: stretch;
    padding: 8px;
    background: #effefa;
    border-radius: 10px;
    outline: 1px #40c4aa solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410103991 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
    background-color: white;
  }

  .selected {
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

  .selected_01 {
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

  .selected_02 {
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

  .frame-1410104039 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
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
    gap: 12px;
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

  .frame-1410104070 {
    align-self: stretch;
    padding: 16px;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
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

  .frame-1410104031 {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }
  .meetleoneetheanimalwhocanflying_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .meet-leonee-the-animal-who-can-flying {
    width: 555px;
    text-align: center;
  }

  .frame-1410104037 {
    width: 100%;
    height: 100%;
    padding: 12px;
    background: #f5f2ff;
    border-radius: 10px;
    outline: 1px #964dff solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
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
</style>
