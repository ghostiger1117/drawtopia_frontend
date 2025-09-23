<script lang="ts">
  import purple_check from "../assets/purple-check.svg";
  import arrowUpDown from "../assets/CaretUpDown.svg";
  import check from "../assets/Check.svg";
  import star from "../assets/Star.svg";

  export let enhancementId: string;
  export let title: string;
  export let subtitle: string;
  export let features: string[];
  export let isSelected: boolean = false;
  export let onSelect: (enhancementId: string) => void;
  export let showMostPopular: boolean = false;

  function handleClick() {
    onSelect(enhancementId);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }
</script>

<div 
  class={`enhancement-card ${isSelected ? 'selected_card' : ''} ${showMostPopular ? 'popular-card' : ''}`}
  style="position: relative;"
  on:click={handleClick}
  role="button"
  tabindex="0"
  on:keydown={handleKeydown}
>
  {#if showMostPopular}
    <div class="tag_card">
      <img src={star} alt="star" />
      <div class="most-popular">
        <span class="mostpopular_span">Most Popular</span>
      </div>
    </div>
  {/if}
  
  <div class="card-content">
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
        <div class="enhancement-title">
          <span class="enhancement-title_span">{title}</span>
        </div>
        <div class="enhancement-subtitle">
          <span class="enhancement-subtitle_span">{subtitle}</span>
        </div>
      </div>
      <div class="frame-1410104075">
        {#each features as feature, index}
          <div class="checklist">
            <div class="check">
              <img src={check} alt="check" />
            </div>
            <div class="feature-text">
              <span class="feature-text_span">{feature}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  {#if isSelected}
    <img src={purple_check} alt="purple_check" class="purple_check" />
  {/if}
</div>

<style>
  .enhancement-card {
    flex: 1 1 0;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .enhancement-card:hover {
    outline: 1px #438bff solid;
    box-shadow: 0px 2px 8px rgba(67, 139, 255, 0.1);
  }

  .enhancement-card.selected_card {
    outline: 2px #6912c5 solid;
    box-shadow: 0px 1px 8px #871fff;
  }

  .popular-card {
    padding-top: 4px;
    padding-bottom: 2px;
    padding-left: 2px;
    padding-right: 2px;
    background: #eef6ff;
    border-radius: 20px;
  }

  .card-content {
    width: 100%;
    background: white;
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: flex;
  }

  .rectangle-33 {
    width: 2px;
    height: 346px;
    left: 50%;
    top: 0px;
    position: absolute;
    background: #eef6ff;
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

  .before_span, .after_span {
    color: black;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .before, .after {
    text-align: center;
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

  .card_heading {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }

  .frame-1410104074 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .enhancement-title {
    align-self: stretch;
  }

  .enhancement-title_span {
    color: #141414;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .enhancement-subtitle {
    align-self: stretch;
  }

  .enhancement-subtitle_span {
    color: #666d80;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .frame-1410104075 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .checklist {
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
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

  .feature-text {
    flex: 1 1 0;
  }

  .feature-text_span {
    color: #727272;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 25.2px;
    word-wrap: break-word;
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

  .most-popular {
    text-align: center;
  }

  .mostpopular_span {
    color: #438bff;
    font-size: 15px;
    font-family: Quicksand;
    font-weight: 700;
    word-wrap: break-word;
  }

  .purple_check {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 800px) {
    .enhancement-card {
      width: 100%;
      flex: none;
    }
  }
</style>
