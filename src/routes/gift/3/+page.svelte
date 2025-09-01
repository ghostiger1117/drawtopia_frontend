<script>
  import Confetti from "../../../assets/Confetti.svg";
  import scheduled_delivery from "../../../assets/Calendar.svg";
  import calenderblank from "../../../assets/CalendarBlank.svg";
  import arrow_left from "../../../assets/ArrowLeft.svg";
  import GiftStepComponent from "../../../components/GiftStepComponent.svelte";

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
</script>
<div class="finishing-touches-filled">
  <div class="navbar">
    <div class="logo-text-full">
      <div class="logo-img"></div>
    </div>
  </div>
  
  <!-- Mobile Back Button -->
  <div class="mobile-back-button">
    <div
      class="mobile-back-btn"
      role="button"
      tabindex="0"
      on:click={handleBack}
      on:keydown={(e) => e.key === "Enter" && handleBack()}
    >
      <img class="arrow-left-icon" src={arrow_left} alt="back" />
    </div>
    <span class="back-text">Back</span>
  </div>

  <div class="frame-1410103818">
    <div class="frame-5">
      <div class="frame-1">
        <div class="heading">
          <div class="add-the-finishing-touches">
            <span class="addthefinishingtouches_span"
              >Add the finishing touches</span
            >
          </div>
          <div class="make-this-gift-extra-special-with-a-personal-message">
            <span class="makethisgiftextraspecialwithapersonalmessage_span"
              >Make this gift extra special with a personal message</span
            >
          </div>
        </div>
      </div>
    </div>
    <GiftStepComponent currentStep={3} totalSteps={3} stepTitle="Customize Your Gift" stepLabel="Step 3" />
    <div class="frame-1410104115">
      <div class="frame-10">
        <div class="special-message-optional">
          <span class="specialmessageoptional_span"
            >Special Message (Optional)</span
          >
        </div>
        <div class="frame-1410103935">
          <div class="form">
            <div class="your-message-to-the-child">
              <span class="yourmessagetothechild_span"
                >Your message to the child</span
              >
            </div>
            <div class="frame-1410104041">
              <div class="input-placeholder">
                <div
                  class="this-is-present-give-to-you-i-hope-you-like-it-thank-you-emma-love-grandma"
                >
                  <span
                    class="thisispresentgivetoyouihopeyoulikeitthankyouemmalovegrandma_span"
                    >This is Present Give to you, i hope you like it, thank you
                    emma.<br />Love, Grandma!</span
                  >
                </div>
              </div>
              <div class="text-0200-characters">
                <span class="f200characters_span">0/200 Characters</span>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-1410104113">
          <div class="form_01">
            <div class="example"><span class="example_span">Example</span></div>
            <div class="frame-1410104041_01">
              <div class="frame-1410104116">
                <div class="input-placeholder_01">
                  <div>
                    <span class="happybirthdayemma_span"
                      >Happy Birthday, Emma!</span
                    >
                  </div>
                </div>
                <div class="input-placeholder_02">
                  <div>
                    <span class="congratulationsemma_span"
                      >Congratulations, Emma!</span
                    >
                  </div>
                </div>
              </div>
              <div class="frame-1410104117">
                <div class="input-placeholder_03">
                  <div>
                    <span class="youreamazing_span">You’re Amazing</span>
                  </div>
                </div>
                <div class="input-placeholder_04">
                  <div><span class="lovegrandma_span">Love, Grandma</span></div>
                </div>
                <div class="input-placeholder_05">
                  <div><span class="proudofyou_span">Proud of You!</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-1410104114">
        <div class="delivery-options">
          <span class="deliveryoptions_span">Delivery Options</span>
        </div>
        <div class="form_02">
          <div class="parent-guardian-email">
            <span class="parentguardianemail_span"
              >Parent / Guardian Email*</span
            >
          </div>
          <div class="input-placeholder_06">
            <div>
              <span class="drawtopiaexamplecom_span">drawtopia@example.com</span
              >
            </div>
          </div>
          <div class="well-send-the-story-creation-link-to-this-email">
            <span class="wellsendthestorycreationlinktothisemail_span"
              >We'll send the story creation link to this email</span
            >
          </div>
        </div>
        <div class="form_03">
          <div class="when-should-the-story-be-delivered">
            <span class="whenshouldthestorybedelivered_span"
              >When should the story be delivered?</span
            >
          </div>
          <div class="frame-1410104179">
            <div class="selected">
              <img src={Confetti} alt="surprise delivery"/>
              <div class="frame-1410103940">
                <div class="frame-1410103939">
                  <div>
                    <span class="surprisedelivery_span">Surprise Delivery</span>
                  </div>
                  <div
                    class="send-the-gift-invitation-immediately-for-maximum-surprise-impact"
                  >
                    <span
                      class="sendthegiftinvitationimmediatelyformaximumsurpriseimpact_span"
                      >Send the gift invitation immediately for maximum surprise
                      impact</span
                    >
                  </div>
                </div>
              </div>
              <div class="ellipse-13"></div>
            </div>
            <div class="selected_01">
              <img src={scheduled_delivery} alt="scheduled delivery"/>
              <div class="frame-1410103940_01">
                <div class="frame-1410103939_01">
                  <div>
                    <span class="scheduleddelivery_span"
                      >Scheduled Delivery</span
                    >
                  </div>
                  <div
                    class="choose-a-specific-date-and-time-for-the-gift-to-be-delivered"
                  >
                    <span
                      class="chooseaspecificdateandtimeforthegifttobedelivered_span"
                      >Choose a specific date and time for the gift to be
                      delivered</span
                    >
                  </div>
                </div>
              </div>
              <div class="frame-1410104043">
                <div class="ellipse-14"></div>
                <div class="ellipse-13_01"></div>
              </div>
            </div>
          </div>
          <div class="input-placeholder_07">
            <div><span class="f2122025_span">12/12/2025</span></div>
            <img src={calenderblank} alt="scheduled delivery"/>
          </div>
        </div>
        <div class="frame-1410104037">
          <div class="how-it-works">
            <span class="howitworks_span">How it works:</span>
          </div>
          <div
            class="text--parent-receives-email-with-creation-link-child-creates-their-personalized-story-you-get-notified-when-its-complete-both-you-and-the-family-can-view-the-final-story"
          >
            <span
              class="parentreceivesemailwithcreationlinkchildcreatestheirpersonalizedstoryyougetnotifiedwhenitscompletebothyouandthefamilycanviewthefinalstory_span"
              >• Parent receives email with creation link<br />• Child creates
              their personalized story<br />• You get notified when it's
              complete<br />• Both you and the family can view the final story</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="frame-1410104113_01">
      <div class="frame-1410103991">
        <div class="button">
          <div class="continue-to-give-packaging">
            <span class="continuetogivepackaging_span"
              >Continue to Give Packaging</span
            >
          </div>
        </div>
      </div>
      <div class="button_01">
          <img src={arrow_left} alt="arrow left"/>
        <div class="back"><span class="back_span">Back</span></div>
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

<style>
  .logo-img {
    background-image: url("../../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .addthefinishingtouches_span {
    color: #121212;
    font-size: 48px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 67.2px;
    word-wrap: break-word;
  }

  .add-the-finishing-touches {
    align-self: stretch;
    text-align: center;
  }

  .makethisgiftextraspecialwithapersonalmessage_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 21.6px;
    word-wrap: break-word;
  }

  .make-this-gift-extra-special-with-a-personal-message {
    align-self: stretch;
    text-align: center;
  }

  .specialmessageoptional_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .special-message-optional {
    align-self: stretch;
  }

  .yourmessagetothechild_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .your-message-to-the-child {
    align-self: stretch;
  }

  .thisispresentgivetoyouihopeyoulikeitthankyouemmalovegrandma_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .this-is-present-give-to-you-i-hope-you-like-it-thank-you-emma-love-grandma {
    flex: 1 1 0;
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

  .example_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .example {
    align-self: stretch;
  }

  .happybirthdayemma_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .congratulationsemma_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .youreamazing_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .lovegrandma_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .proudofyou_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .deliveryoptions_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .delivery-options {
    align-self: stretch;
  }

  .parentguardianemail_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .parent-guardian-email {
    align-self: stretch;
  }

  .drawtopiaexamplecom_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .wellsendthestorycreationlinktothisemail_span {
    color: #666d80;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .well-send-the-story-creation-link-to-this-email {
    align-self: stretch;
  }

  .whenshouldthestorybedelivered_span {
    color: #141414;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .when-should-the-story-be-delivered {
    align-self: stretch;
  }

  .surprisedelivery_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .sendthegiftinvitationimmediatelyformaximumsurpriseimpact_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .send-the-gift-invitation-immediately-for-maximum-surprise-impact {
    align-self: stretch;
  }

  .ellipse-13 {
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    border: 1px #ededed solid;
  }

  .scheduleddelivery_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .chooseaspecificdateandtimeforthegifttobedelivered_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .choose-a-specific-date-and-time-for-the-gift-to-be-delivered {
    align-self: stretch;
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

  .f2122025_span {
    color: #141414;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .howitworks_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .how-it-works {
    align-self: stretch;
  }

  .parentreceivesemailwithcreationlinkchildcreatestheirpersonalizedstoryyougetnotifiedwhenitscompletebothyouandthefamilycanviewthefinalstory_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .text--parent-receives-email-with-creation-link-child-creates-their-personalized-story-you-get-notified-when-its-complete-both-you-and-the-family-can-view-the-final-story {
    align-self: stretch;
  }

  .continuetogivepackaging_span {
    color: white;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .continue-to-give-packaging {
    text-align: center;
  }

  .back_span {
    color: black;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .back {
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

  .heading {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: flex;
  }

  .input-placeholder {
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

  .input-placeholder_01 {
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .input-placeholder_02 {
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .input-placeholder_03 {
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .input-placeholder_04 {
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .input-placeholder_05 {
    padding: 12px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .input-placeholder_06 {
    align-self: stretch;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
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

  .frame-1410104037 {
    align-self: stretch;
    padding: 12px;
    background: #f5f2ff;
    border-radius: 10px;
    outline: 1px #964dff solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: flex;
  }

  .button {
    align-self: stretch;
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

  .frame-1410103820 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .logo-text-full {
    width: 203.32px;
    height: 38px;
    position: relative;
  }

  .frame-1410104043 {
    width: 24px;
    height: 24px;
    position: relative;
    background: white;
    border-radius: 999px;
  }

  .frame-1 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
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

  .frame-1410104116 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }

  .frame-1410104117 {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }

  .form_02 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
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

  .frame-1410103991 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
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
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

  .input-placeholder_07 {
    align-self: stretch;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: white;
    overflow: hidden;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
  }

  .button_01 {
    align-self: stretch;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 4px 4px rgba(98.89, 98.89, 98.89, 0.25);
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
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

  .form {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104041_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
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
    align-items: flex-start;
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
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104113_01 {
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

  .form_01 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .frame-1410104179 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-1410104113 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: flex;
  }

  .form_03 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: flex;
  }

  .frame-10 {
    flex: 1 1 0;
    height: 506px;
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
    display: inline-flex;
  }

  .frame-1410104114 {
    flex: 1 1 0;
    padding-top: 24px;
    padding-bottom: 12px;
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
    display: inline-flex;
  }

  .frame-1410104115 {
    width: 994px;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .frame-1410103818 {
    width: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    display: flex;
  }

  .finishing-touches-filled {
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

  /* Mobile Back Button Styles */
  .mobile-back-button {
    display: none;
  }

  .mobile-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 8px;
    background: white;
    border-radius: 8px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    cursor: pointer;
    transition: background-color 0.2s;
    width: fit-content;
  }

  .mobile-back-btn:hover {
    background-color: #f8fafb;
  }

  .arrow-left-icon {
    width: 20px;
    height: 20px;
  }

  .back-text {
    color: #121212;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 22.4px;
  }

  /* Mobile responsive styles */
  @media (max-width: 800px) {
    .mobile-back-button {
      display: flex;
      width: 100%;
      margin-bottom: 16px;
      align-items: center;
      gap: 10px;
    }

    .finishing-touches-filled {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 16px;
      padding-bottom: 16px;
      gap: 24px;
      overflow: visible;
    }

    .frame-1410103818 {
      width: 100%;
      max-width: 700px;
      gap: 20px;
    }

    .frame-1410104115 {
      width: 100%;
      flex-direction: column;
      gap: 20px;
    }

    /* GiftStepComponent mobile adjustments */
    :global(.progress-bar) {
      width: 100% !important;
      padding: 12px !important;
      margin-bottom: 16px;
    }

    :global(.step1_span),
    :global(.f3_span) {
      font-size: 14px !important;
      line-height: 19.6px !important;
    }

    :global(.settingupgift_span) {
      font-size: 16px !important;
      line-height: 22.4px !important;
    }

    :global(.frame-1410103997) {
      margin-bottom: 8px;
    }

    :global(.bar) {
      height: 6px !important;
      margin-bottom: 8px;
    }

    /* Form sections mobile */
    .frame-10,
    .frame-1410104114 {
      width: 100%;
      padding: 16px;
      gap: 16px;
    }

    .frame-1410103935,
    .frame-1410104113,
    .form_02,
    .form_03 {
      width: 100%;
      gap: 12px;
    }

    /* Input fields mobile */
    .input-placeholder,
    .input-placeholder_01,
    .input-placeholder_02,
    .input-placeholder_03,
    .input-placeholder_04,
    .input-placeholder_05,
    .input-placeholder_06,
    .input-placeholder_07 {
      height: 100%;
      padding: 8px 12px;
    }

    /* Example messages mobile layout */
    .frame-1410104116,
    .frame-1410104117 {
      flex-direction: column;
      gap: 8px;
    }

    .frame-1410104116 .input-placeholder_01,
    .frame-1410104116 .input-placeholder_02,
    .frame-1410104117 .input-placeholder_03,
    .frame-1410104117 .input-placeholder_04,
    .frame-1410104117 .input-placeholder_05 {
      width: 100%;
    }

    /* Delivery options mobile */
    .frame-1410104179 {
      flex-direction: column;
      gap: 12px;
    }

    .selected,
    .selected_01 {
      width: 100%;
      padding: 12px;
    }

    /* Continue section mobile */
    .frame-1410104113_01 {
      width: 100%;
      gap: 16px;
    }

    .button {
      width: 100%;
      padding: 14px 20px;
    }

    .button_01 {
      display: none;
    }

    /* Typography adjustments for mobile */
    .addthefinishingtouches_span {
      font-size: 32px;
      line-height: 44.8px;
    }

    .makethisgiftextraspecialwithapersonalmessage_span {
      font-size: 16px;
      line-height: 19.2px;
    }

    .specialmessageoptional_span,
    .deliveryoptions_span {
      font-size: 20px;
      line-height: 28px;
    }

    .yourmessagetothechild_span,
    .parentguardianemail_span,
    .whenshouldthestorybedelivered_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .example_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .surprisedelivery_span,
    .scheduleddelivery_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .sendthegiftinvitationimmediatelyformaximumsurpriseimpact_span,
    .chooseaspecificdateandtimeforthegifttobedelivered_span,
    .wellsendthestorycreationlinktothisemail_span {
      font-size: 12px;
      line-height: 16.8px;
    }

    .continuetogivepackaging_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .howitworks_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .parentreceivesemailwithcreationlinkchildcreatestheirpersonalizedstoryyougetnotifiedwhenitscompletebothyouandthefamilycanviewthefinalstory_span {
      font-size: 12px;
      line-height: 16.8px;
    }

    .contactushellodrawtopiacom_span,
    .privacypolicy_span,
    .termsofservice_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    /* Layout adjustments */
    .frame-5 {
      gap: 20px;
    }

    .heading {
      gap: 12px;
    }

    .frame-1410103821 {
      gap: 8px;
      margin-top: 24px;
    }

    .frame-1410103820 {
      gap: 16px;
    }

    .frame-1410104037 {
      gap: 8px;
      padding: 12px;
    }
  }
</style>
