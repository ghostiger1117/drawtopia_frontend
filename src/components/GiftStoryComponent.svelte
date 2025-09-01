<script lang="ts">
  import popular_tag from "../assets/popular_tag.svg";
  export let image: string = "https://placehold.co/402x280";
  export let ageRange: string = "Ages 3-8";
  export let title: string = "First Day of School";
  export let description: string = "A confidence-building adventure about making friends and being brave";
</script>

<div class="card">
  <img class="image" src={image} alt={title}/>
  <div class="frame-10">
    <div class="heading">
      <div class="button">
        <div class="ages-3-8"><span class="ages3-8_span">{ageRange}</span></div>
      </div>
      <div class="first-day-of-school"><span class="firstdayofschool_span">{title}</span></div>
      <div class="a-confidence-building-adventure-about-making-friends-and-being-brave"><span class="aconfidence-buildingadventureaboutmakingfriendsandbeingbrave_span">{description}</span></div>
    </div>
  </div>
  <div class="popular-tag">
    <img src={popular_tag} alt="popular tag"/>
  </div>
</div>

<style>
.image {
  align-self: stretch;
  height: 100%;
  position: relative;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px #D3D3D3 solid;
}

.ages3-8_span {
  color: black;
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 600;
  line-height: 25.20px;
  word-wrap: break-word;
}

.ages-3-8 {
  text-align: center;
}

.firstdayofschool_span {
  color: #141414;
  font-size: 24px;
  font-family: Quicksand;
  font-weight: 600;
  line-height: 33.60px;
  word-wrap: break-word;
}

.first-day-of-school {
  align-self: stretch;
}

.aconfidence-buildingadventureaboutmakingfriendsandbeingbrave_span {
  color: #666D80;
  font-size: 18px;
  font-family: Nunito;
  font-weight: 400;
  line-height: 25.20px;
  word-wrap: break-word;
}

.a-confidence-building-adventure-about-making-friends-and-being-brave {
  align-self: stretch;
}

.button {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
  outline: 1px #DCDCDC solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
}

.heading {
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

.card {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background: white;
  border-radius: 20px;
  outline: 1px #EDEDED solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
  position: relative;
}
.popular-tag {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>