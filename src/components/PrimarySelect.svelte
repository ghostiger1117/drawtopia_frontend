<script>
  export let options;
  export let selectedOption;
  export let onChange;
</script>

<select id="accountType" required class="selectyouraccount_span select-wrapper" on:change={onChange}>
  <option value="" disabled selected hidden
    >Select your account</option
  >
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<style>
  .select-wrapper {
    padding: 12px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    font-size: 16px;
    color: #333;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("../../assets/CaretDown.svg");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    cursor: pointer;
  }

  .select-wrapper:focus {
    outline: none;
    border-color: #666;
  }
  .selectyouraccount_span {
    color: #666d80;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }
</style>