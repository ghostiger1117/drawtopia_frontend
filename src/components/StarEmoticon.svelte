  <script>
    import star5 from '../assets/star5.svg';
    import star4 from '../assets/star4.svg';
    import star6 from '../assets/star6.svg';
    import eye from '../assets/eye.svg';
    import eyebrow from '../assets/eyebrow.svg';
  </script>

  <div class="loopa">
    <img src={star5} alt="star5" class="star-5" />
    <img src={star4} alt="star4" class="star-4" />
    <img src={star6} alt="star6" class="star-6" />
    <img src={eye} alt="eye" class="eye" />
    <img src={eyebrow} alt="eyebrow" class="eyebrow" />
    <img src={eyebrow} alt="eyebrow" class="eyebrow_01" />
  </div>

  <style>
  .star-5 {
    width: 88px;
    height: 88px;
    left: -7px;
    top: 0px;
    position: absolute;
    /* background: #0F0072; */
    /* border: 0.88px #0F0072 solid; */
  }

  .star-4 {
    width: 81.48px;
    height: 81.48px;
    left: 0px;
    top: 0px;
    position: absolute;
    /* background: white; */
    /* border: 0.81px #0F0072 solid; */
  }

  .star-6 {
    width: 65.19px;
    height: 65.19px;
    left: 7.3px;
    top: 8.15px;
    position: absolute;
    /* background: #438BFF; */
  }

  .eyebrow {
    width: 12.22px;
    height: 4.07px;
    left: 26px;
    top: 22.82px;
    position: absolute;
    border-radius: 3.37px;
    /* outline: 1.63px white solid; */
    outline-offset: -0.81px;
  }

  .eyebrow_01 {
    width: 12.22px;
    height: 4.07px;
    left: 42.30px;
    top: 22.82px;
    position: absolute;
    border-radius: 3.37px;
    /* outline: 1.63px white solid; */
    outline-offset: -0.81px;
  }

  .rectangle-10 {
    width: 16.30px;
    height: 16.30px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: white;
    border-radius: 81.48px;
  }

  .eye {
    width: 32.59px;
    height: 16.30px;
    left: 23.96px;
    top: 30.76px;
    position: absolute;
  }

  .loopa {
    width: 100%;
    height: 100%;
    position: relative;
  }
  </style>